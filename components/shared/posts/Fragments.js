import styled from 'styled-components';
import { fromNow } from '@/utils/functions';
import F_Button from '../buttons/F_Button';
import { Summary, Data, Details, img_detail } from './styles';

const Second_lvl = styled.div`
  display: flex;
  flex-direction: column;
  color: #000;
  background-color: #e1e1e1;
  padding: 1rem;
  width: 90%;
  border-radius: 0.3rem;
  margin: 0.5rem auto;
  align-items: flex-start;
  div {
    display: flex;
    img {
      ${img_detail}
      margin-right: 1rem;
    }
  }
`;

//! ORIGINAL POST
export const Lead = ({
  username,
  createdAt,
  avatar,
  content,
  auth,
  setReplyTo,
}) => (
  <Details className='lead' open>
    <Summary>
      {username}
      <span>{fromNow(createdAt)}</span>
    </Summary>
    <Data>
      <img src={avatar} />
      <p>{content}</p>
    </Data>
    <br />
    {auth ? (
      <F_Button
        ext_class='reply--btn'
        size='small'
        autoTheme
        s_state={() => setReplyTo({})}
      >
        Add a Post
      </F_Button>
    ) : (
      <i>Log in to add a comment</i>
    )}
  </Details>
);

//! REPLYING TO
const Parent = ({
  p: { user: { avatar = '', username = '' } = {}, content = '' },
}) => (
  <Second_lvl>
    <div>
      <img src={avatar} />
      <strong>{username}</strong>
    </div>
    <i>{content}</i>
  </Second_lvl>
);

//! COMMENTS
export const Siblings = ({
  i = 0,
  p: {
    _id = '',
    user: { username = '', avatar = '' } = {},
    createdAt = '',
    content = '',
    parent = {},
  },
  auth = {},
  setReplyTo,
}) => {
  return (
    <Details>
      {parent && <Parent p={parent} />}
      <Summary data-index={`${i + 1}. `}>
        {username}
        <span>{fromNow(createdAt)}</span>
      </Summary>
      <Data>
        <img src={avatar} />
        <p>{content}</p>
      </Data>
      <br />
      {auth && (
        <F_Button
          ext_class='reply--btn nlead--btn'
          size='small'
          autoTheme
          post_data={{ _id, user: { username } }}
          s_state={(data) => setReplyTo({ ...data })}
          nl
        >
          Reply
        </F_Button>
      )}
    </Details>
  );
};
