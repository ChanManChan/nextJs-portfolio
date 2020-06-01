import styled from 'styled-components';

//! Container
export const FormWrapper = styled.div`
  width: 100%;
  /* padding: top | right & left | bottom */
  padding: 3rem 1.5rem 2.4rem;
`;

//! Page title
export const PageFunction = styled.h1`
  /* margin: top | right & left | bottom */
  margin: 0 0 4rem;
  font-size: 3rem;
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(50rem, 1fr));
  grid-row-gap: 3rem;
`;

export const Body_cell = styled.td.attrs({ className: 'body--cell' })`
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
  &:last-of-type {
    text-align: center;
  }
`;
