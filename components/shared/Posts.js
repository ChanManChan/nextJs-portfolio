import styled, { keyframes, css } from 'styled-components';
import F_Button from './F_Button';
import S_Input from '../forms/S_Input';
import Disabled_State from '../styles/Disabled_State';
import Loading from '../styles/Loading';

//! For "Data" [img and p container]
const slideDown = keyframes`
   from {
    opacity: 0;
    padding: 0;
 }
  to {
    opacity: 1;
    padding: 2rem;
 }
`;

//! For "Data > img"

/* "clip-path: inset" <- values are from-top, from-right, from-bottom, from-left */

const showImage = keyframes`
  from {
    opacity: 0;
    clip-path: inset(50% 0 50% 0);
    transform: scale(0.4);
 }
  to {
    opacity: 1;
    clip-path: inset(0 0 0 0);
 }
`;

//! For "Data > p"
const showContent = keyframes`
  from {
    opacity: 0;
 }
  to {
    opacity: 1;
 }
`;

const Section = styled.section`
  width: 97%;
  margin: 4rem auto;
`;

const Data = styled.div`
  display: flex;
  flex-wrap: wrap;
  overflow: auto;
  height: 100%;
  padding: 0 2rem;
  line-height: 1.5;
  img {
    opacity: 0;
    align-self: flex-start;
    margin-top: 2rem;
  }
  p {
    opacity: 0;
    margin-top: 2rem;
    flex: 1;
  }
`;

const Summary = styled.summary`
  display: block;
  cursor: pointer;
  padding: 1rem;
  font-size: 2.2rem;
  transition: 0.3s;
  border-bottom: 0.2rem solid;
  user-select: none;
  &:before {
    color: ${(p) => p.theme.quaternaryColor};
    content: attr(data-index);
  }
  span {
    float: right;
  }
`;

/**
 *  animation: [duration | timing-function | delay | iteration-count | direction | fill-mode | play-state | name]
 *  animation: 3s ease-in 1s 2 reverse both paused slidein;
 */

const img_detail = css`
  max-width: 8.8rem;
  width: 100%;
  padding: 0.5rem;
  border: 0.2rem solid ${(p) => p.theme.staticColor2};
`;

const Details = styled.details`
  position: relative;
  &[open] > ${Summary} {
    color: #f44336;
  }
  &[open] > ${Data} > p {
    padding-left: 2rem;
    animation: 0.6s 0.2s forwards ${showContent};
  }
  &[open] > ${Data} {
    animation: 0.3s forwards ${slideDown};
  }
  &[open] > ${Data} > img {
   ${img_detail}
    animation: 0.3s 0.15s forwards ${showImage};
  }
  &.lead{
    border-bottom:0.2rem solid ${(p) => p.theme.staticColor1}
  }
  .reply--btn{
    position: absolute;
    bottom: 2rem;
    right: 0.5rem;
    z-index: 1;
  }
`;

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

const handleAddComment = (data, resetForm) => {
  alert(data.content);
  resetForm();
};

const Posts = ({ auth, author, a_avatar, op, cr_at, posts = [], loading }) => (
  <Disabled_State loading={`${loading}`}>
    <Section>
      <Details className='lead' open>
        <Summary>
          {author}
          <span>{cr_at}</span>
        </Summary>
        <Data>
          <img src={a_avatar} />
          <p>{op}</p>
        </Data>
        {auth ? (
          <F_Button ext_class='reply--btn' size='small' themeColor='#757575'>
            Add a Post
          </F_Button>
        ) : (
          <i>Log in to add a comment</i>
        )}
      </Details>
      {posts.map((p, i) => (
        <Details key={i}>
          {p.parent && (
            <Second_lvl>
              <div>
                <img src={p.parent.user.avatar} />
                <strong>{p.parent.user.username}</strong>
              </div>
              <i>{p.parent.content}</i>
            </Second_lvl>
          )}
          <Summary data-index={`${i + 1}. `}>
            {p.user.username}
            <span>{p.createdAt}</span>
          </Summary>
          <Data>
            <img src={p.user.avatar} />
            <p>{p.content}</p>
          </Data>
          {auth && (
            <F_Button
              ext_class='reply--btn nlead--btn'
              size='small'
              themeColor='#757575'
              nl
            >
              Reply
            </F_Button>
          )}
        </Details>
      ))}
      {auth && (
        <S_Input
          plc_Content='Add a Post'
          parent_fn={handleAddComment}
          loading={false}
          post
        />
      )}
    </Section>
    <Loading msg='Fetching Posts...' loading={`${loading}`} />
  </Disabled_State>
);

export default Posts;
