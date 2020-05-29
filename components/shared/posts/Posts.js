import styled from 'styled-components';
import S_Input from '@/components/forms/S_Input';
import Disabled_State from '@/components/styles/Disabled_State';
import Loading from '@/components/styles/Loading';
import { toast } from 'react-toastify';
import { removeFooter } from '@/utils/functions';
import { Lead, Siblings } from './Fragments';

const Section = styled.section`
  width: 97%;
  height: ${(p) => (p.loading === 'true' ? '40rem' : 'auto')};
  margin: 4rem auto;
`;

const cleanUp = (scroll2Btm, resetForm) => {
  toast.success('Post has been created.', {
    position: toast.POSITION.BOTTOM_LEFT,
  });
  removeFooter('.nlead--btn', 'Reply');
  removeFooter('.post--btn', 'Add a Post');
  resetForm();
  scroll2Btm();
};

//! HANDLE SUBMIT
const handleAddComment = ({
  cr_post,
  replyTo,
  _id,
  scroll2Btm,
  fetchMore,
  count,
  pageNum,
  pageSize,
}) => async (data, resetForm) => {
  if (replyTo) data.parent = replyTo._id;
  data.topic = _id;
  await cr_post({ variables: data });
  let lastPage = 0;
  if (count === 0) lastPage = 1;
  else lastPage = Math.ceil(count / pageSize);
  lastPage === pageNum &&
    (await fetchMore({
      variables: { pageSize, pageNum: lastPage },
      updateQuery: (previousResults, { fetchMoreResult }) => {
        //! Object.assign(target, ...sources) <- Return value, the target object. (The Object.assign() method copies all enumerable own properties from one or more source objects to a target object).
        return Object.assign({}, previousResults, {
          postsByTopic: { ...fetchMoreResult.postsByTopic },
        });
      },
    }));
  cleanUp(scroll2Btm, resetForm);
};

const Posts = ({
  topic: {
    _id = '',
    title = '',
    user: { username = '', avatar = '' } = {},
    content = '',
    createdAt = '',
  } = {},
  user,
  posts = [],
  loading,
  create_load,
  ...rest
}) => {
  const pgDn = React.useRef();
  const [replyTo, setReplyTo] = React.useState({});

  const scroll2Btm = () => pgDn.current.scrollIntoView({ behavior: 'smooth' });

  const parameters = {
    ...rest,
    replyTo,
    _id,
    scroll2Btm,
  };

  return (
    <Disabled_State loading={`${loading}`}>
      <Section loading={`${loading}`}>
        <Lead
          username={username}
          createdAt={createdAt}
          avatar={avatar}
          content={content}
          auth={user}
          setReplyTo={setReplyTo}
        />
        {posts.map((p, i) => (
          <Siblings key={i} i={i} p={p} auth={user} setReplyTo={setReplyTo} />
        ))}
        <div ref={pgDn}></div>
        {user && (
          <S_Input
            plc_Content='Add a Post'
            parent_fn={handleAddComment(parameters)}
            loading={create_load}
            replyTo={
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
