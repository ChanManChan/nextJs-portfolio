import styled from 'styled-components';

const MobileMenuIcon = styled.div`
  width: 3.5rem;
  min-width: 3.5rem;
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
