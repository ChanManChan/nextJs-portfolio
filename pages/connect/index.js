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

const PageFunction = styled.h1`
  margin: 0 0 5rem;
  font-size: 3rem;
`;

const Body_cell = styled.td.attrs({ className: 'body--cell' })`
  color: #000;
  text-align: left;
  padding: 1.5rem 0.5rem;
  font-size: 2rem;
  width: 37.5%;
  height: 18rem;
  white-space: initial;
  border-bottom: 0.3rem solid ${(p) => p.theme.primaryColor};
  &:not(:last-child) {
    border-right: 0.3rem solid ${(p) => p.theme.primaryColor};
  }
  ${(p) =>
    p.topic
      ? `&:first-of-type {
          text-align: center;
    }`
      : ''}
  &:last-of-type {
    width: 25%;
    text-align: center;
  }
`;

const useInitialData = () => {
  const router = useRouter();
  const { data } = useFetchAllTopics();
  const { data: u_data } = useFetchUser();
  const topics = (data && data.topics) || [];
  const user = (u_data && u_data.user) || null;
  return {
    user,
    topics,
    router,
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
  const { topics, user, router } = useInitialData();
  const [createTopic, { loading }] = useCreateTopic();

  const redirectToTopic = (slug) =>
    router.push('/connect/topics/[slug]', `/connect/topics/${slug}`);

  return (
    <>
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
        <i>Log in to create a topic</i>
      )}
      <Table col_1='Topic' col_2='Content' col_3='Author'>
        {topics.map((t, i) => (
          <TR key={i} onClick={() => redirectToTopic(t.slug)}>
            <Body_cell topic>{t.title}</Body_cell>
            <Body_cell>{t.content}</Body_cell>
            <Body_cell>{t.user.username}</Body_cell>
          </TR>
        ))}
      </Table>
    </>
  );
};

export default withApollo(withParent(Topics), { getDataFromTree });
