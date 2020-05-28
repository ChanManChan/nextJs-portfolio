import styled from 'styled-components';

const MobileMenuIcon = styled.div`
  margin: auto 0 auto auto;
  width: 2.5rem;
  min-width: 2.5rem;
  padding: 0.5rem;
  cursor: pointer;
  > div {
    height: 0.3rem;
    background: #fff;
    margin: 0.5rem 0;
    width: 100%;
  }
  @media (min-width: 768px) {
    display: none;
  }
`;

const Hamburger = (props) => (
  <MobileMenuIcon onClick={props.onClick}>
    <div />
    <div />
    <div />
  </MobileMenuIcon>
);
export default Hamburger;
