import withParent from '@/hoc/withParent';
import {
  useFetchUser,
  useFetchAllTopics,
  useCreateTopic,
} from '@/apollo/actions';
import withApollo from '@/hoc/withApollo';
import { getDataFromTree } from '@apollo/react-ssr';
import styled from 'styled-components';
import Table from '@/components/shared/Table';
import FooterInput from '@/components/forms/S_Input';
import B_Button from '@/components/shared/buttons/F_Button';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
import { removeFooter } from '@/utils/functions';
import { shortify } from '@/utils/functions';
import { PageFunction, Body_cell } from '@/components/styles/common';
import Disabled_State from '@/components/styles/Disabled_State';
import Loading from '@/components/styles/Loading';

const M_body_cell = styled(Body_cell)`
  ${(p) =>
    p.topic
      ? `&:first-of-type {
          text-align: center;
    }`
      : ''}
`;

const useInitialData = () => {
  const router = useRouter();
  const { data, loading: t_loading } = useFetchAllTopics();
  const { data: u_data } = useFetchUser();
  const topics = (data && data.topics) || [];
  const user = (u_data && u_data.user) || null;
  return {
    user,
    topics,
    router,
    t_loading,
  };
};

const handleCreateTopic = (createTopic) => async (t_data, resetForm) => {
  await createTopic({ variables: t_data });
  toast.success('Topic created successfully', {
    position: toast.POSITION.BOTTOM_LEFT,
  });
  removeFooter('.post--btn', 'Add a Topic');
  resetForm();
};

const TR = styled.tr`
  cursor: pointer;
  transition: background 0.3s ease;
  &:hover {
    background: #ebebeb !important;
  }
`;

const Topics = () => {
  const { topics, user, router, t_loading } = useInitialData();
  const [createTopic, { loading }] = useCreateTopic();

  const redirectToTopic = (slug) =>
    router.push('/connect/topics/[slug]', `/connect/topics/${slug}`);
  return (
    <Disabled_State loading={`${t_loading}`} cover>
      <PageFunction>Select a Topic</PageFunction>
      {user ? (
        <>
          <B_Button size='medium' themeColor='#444'>
            Add a Topic
          </B_Button>
          <FooterInput
            plc_Title='Enter topic title'
            plc_Content='Body of your topic'
            parent_fn={handleCreateTopic(createTopic)}
            loading={loading}
          />
        </>
      ) : (
        <i style={{ lineHeight: '5' }}>Log in to create a topic</i>
      )}
      <Table col_1='Topic' col_2='Content' col_3='Author' topics>
        {topics.map((t, i) => (
          <TR key={i} onClick={() => redirectToTopic(t.slug)}>
            <M_body_cell topic>{t.title}</M_body_cell>
            <M_body_cell>{shortify(t.content, 100)}</M_body_cell>
            <M_body_cell>{t.user.username}</M_body_cell>
          </TR>
        ))}
      </Table>
      <Loading msg='Fetching topics...' loading={`${t_loading}`} />
    </Disabled_State>
  );
};

export default withApollo(withParent(Topics), { getDataFromTree });
