import withParent from '@/hoc/withParent';
import withApollo from '@/hoc/withApollo';
import {
  useFetchTopicBySlug,
  useFetchPostsByTopic,
  useFetchUser,
} from '@/apollo/actions';
import { useRouter } from 'next/router';
import { getDataFromTree } from '@apollo/react-ssr';
import Thread from '@/components/shared/Posts';

const useInitialData = () => {
  const router = useRouter();
  const slug = router.query.slug;
  const { data, loading: t_loading } = useFetchTopicBySlug({
    variables: { slug },
  });
  const { data: p_data, loading: p_loading } = useFetchPostsByTopic({
    variables: { slug },
  });
  const { data: u_data, loading: u_loading } = useFetchUser();
  const topic = (data && data.topicBySlug) || {};
  const posts = (p_data && p_data.postsByTopic) || [];
  const user = (u_data && u_data.user) || null;
  return {
    topic,
    posts,
    user,
    loading: {
      t_loading,
      p_loading,
      u_loading,
    },
  };
};

const Posts = () => {
  const {
    topic: {
      title = '',
      user: { username = '', avatar = '' } = {},
      content = '',
      createdAt = '',
    },
    posts,
    user,
    loading: { t_loading = false, p_loading = false, u_loading = false } = {},
  } = useInitialData();

  return (
    <>
      <h1>{title}</h1>
      <Thread
        author={username}
        a_avatar={avatar}
        op={content}
        cr_at={createdAt}
        posts={posts}
        auth={user}
        loading={t_loading || p_loading || u_loading}
      />
    </>
  );
};

export default withApollo(withParent(Posts), { getDataFromTree });
