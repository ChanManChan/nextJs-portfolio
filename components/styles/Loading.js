import styled, { keyframes } from 'styled-components';

const container = keyframes`
  0%,100%{
    width:10rem;
    height:10rem;
  }
  10%{
    width:10rem;
    height:10rem;
  }
  50%{
    width:15rem;
    height:15rem;
  }
  90%{
    width:10rem;
    height:10rem;
  }
`;

const innerSquare = keyframes`
  0%{
    transform:rotate(0deg);
  }
  10%{
    transform:rotate(0deg);
  }
  50%{
    transform:rotate(90deg);
  }
  90%{
    transform:rotate(90deg);
  }
  100%{
    transform:rotate(90deg);
  }
`;

const Container = styled.div`
  width: 10rem;
  height: 10rem;
  position: relative;
  animation: ${container} 1s linear infinite;
  transform: rotate(45deg);
  span {
    position: absolute;
    width: 5rem;
    height: 5rem;
    animation: ${innerSquare} 1s linear infinite;
  }
  span:nth-child(1) {
    top: 0;
    left: 0;
    background-color: #fceba7;
  }
  span:nth-child(2) {
    top: 0;
    right: 0;
    background-color: #55ddb9;
  }
  span:nth-child(3) {
    bottom: 0;
    left: 0;
    background-color: #fd6c64;
  }
  span:nth-child(4) {
    bottom: 0;
    right: 0;
    background-color: #1f78b0;
  }
`;

const Loading = () => (
  <Container>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </Container>
);
export default Loading;
