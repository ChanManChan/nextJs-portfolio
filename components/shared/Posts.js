import styled from 'styled-components';
import S_Input from '../forms/S_Input';
import Disabled_State from '../styles/Disabled_State';
import Loading from '../styles/Loading';
import { toast } from 'react-toastify';
import { removeFooter } from '@/utils/functions';
import { Lead, Siblings } from './posts/index';

const Section = styled.section`
  width: 97%;
  height: ${(p) => (p.loading === 'true' ? '40rem' : 'auto')};
  margin: 4rem auto;
`;

//! HANDLE SUBMIT ONLY FOR "Siblings"
const handleAddComment = (cr_post, replyTo, topicID, scroll2Btm) => async (
  data,
  resetForm
) => {
  if (replyTo) data.parent = replyTo._id;
  data.topic = topicID;
  await cr_post({ variables: data });
  toast.success('Post has been created.', {
    position: toast.POSITION.BOTTOM_LEFT,
  });
  removeFooter('.nlead--btn', 'Reply');
  resetForm();
  scroll2Btm();
};

//! MAIN COMPONENT
const Posts = ({
  topic: {
    _id = '',
    title = '',
    user: { username = '', avatar = '' } = {},
    content = '',
    createdAt = '',
  },
  auth,
  posts = [],
  loading,
  cr_post,
  create_load,
}) => {
  const pgDn = React.useRef();
  const [replyTo, setReplyTo] = React.useState({});

  const scroll2Btm = () => pgDn.current.scrollIntoView({ behavior: 'smooth' });

  return (
    <Disabled_State loading={`${loading}`}>
      <Section loading={`${loading}`}>
        <Lead
          username={username}
          createdAt={createdAt}
          avatar={avatar}
          content={content}
          auth={auth}
        />
        {posts.map((p, i) => (
          <Siblings key={i} i={i} p={p} auth={auth} setReplyTo={setReplyTo} />
        ))}
        <div ref={pgDn}></div>
        {auth && (
          <S_Input
            plc_Content='Add a Post'
            parent_fn={handleAddComment(cr_post, replyTo, _id, scroll2Btm)}
            loading={create_load}
            reploTo={
              (replyTo.user && replyTo.user.username) ||
              title + '--[ Original Post ]'
            }
            s_state={(data) => setReplyTo({ ...data })}
            post
          />
        )}
      </Section>
      <Loading msg='Fetching Posts...' loading={`${loading}`} />
    </Disabled_State>
  );
};

export default Posts;
