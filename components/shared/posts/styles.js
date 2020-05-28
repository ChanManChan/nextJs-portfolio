import styled, { keyframes, css } from 'styled-components';

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

export const img_detail = css`
  max-width: 8.8rem;
  width: 100%;
  padding: 0.5rem;
  border: 0.2rem solid ${(p) => p.theme.staticColor2};
`;

export const Data = styled.div`
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

export const Summary = styled.summary`
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

export const Details = styled.details`
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
