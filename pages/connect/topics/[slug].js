import withParent from '@/hoc/withParent';
import withApollo from '@/hoc/withApollo';
import {
  useFetchTopicBySlug,
  useFetchPostsByTopic,
  useFetchUser,
  useCreatePost,
} from '@/apollo/actions';
import { useRouter } from 'next/router';
import { getDataFromTree } from '@apollo/react-ssr';
import Thread from '@/components/shared/posts/Posts';
import AppPagination from '@/components/shared/Pagination';
import styled from 'styled-components';

const Hook = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const H1 = styled.h1`
  font-size: 3rem;
  @media (max-width: 600px) {
    font-size: 2.35rem;
  }
`;

const useInitialData = (slug, pagination) => {
  const { data, loading: t_loading } = useFetchTopicBySlug({
    variables: { slug },
  });

  //! " pollInterval: 100" <- Every 100ms I'm sending new request to server to fetch new data
  const { data: p_data, loading: p_loading, fetchMore } = useFetchPostsByTopic({
    variables: { slug, ...pagination },
    pollInterval: 5000,
  });
  const { data: u_data, loading: u_loading } = useFetchUser();
  const topic = (data && data.topicBySlug) || {};
  const postsData = (p_data && p_data.postsByTopic) || { posts: [], count: 0 };
  const user = (u_data && u_data.user) || null;
  return {
    ...postsData,
    loading: {
      t_loading,
      p_loading,
      u_loading,
    },
    topic,
    user,
    fetchMore,
  };
};

const Posts = () => {
  const router = useRouter();
  const { slug, pageNum = 1, pageSize = 5 } = router.query;

  const [pagination, setPagination] = React.useState({
    pageNum: parseInt(pageNum, 10),
    pageSize: parseInt(pageSize, 10),
  });

  const {
    loading: { t_loading = false, p_loading = false, u_loading = false } = {},
    ...rest
  } = useInitialData(slug, pagination);

  const [createPost, { loading: cr_loading }] = useCreatePost();
  return (
    <Hook>
      <H1>{rest.topic.title}</H1>
      <Thread
        loading={t_loading || p_loading || u_loading}
        cr_post={createPost}
        create_load={cr_loading}
        {...pagination}
        {...rest}
      />
      <AppPagination
        {...pagination}
        count={rest.count}
        onPageChange={(pageNum, pageSize) => {
          //! shallow: true <- when i push this route, i don't want to fetch new data
          router.push(
            '/connect/topics/[slug]',
            `/connect/topics/${slug}?pageNum=${pageNum}&pageSize=${pageSize}`,
            { shallow: true }
          );
          setPagination({ pageNum, pageSize });
        }}
      />
    </Hook>
  );
};

export default withApollo(withParent(Posts), { getDataFromTree });

// router.push(
//   {
//     pathname: '/connect/topics/[slug]',
//     query: {
//       pageNum,
//       pageSize,
//     },
//   },
//   `/connect/topics/${slug}`,
//   { shallow: true }
// );
