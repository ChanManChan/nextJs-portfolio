import styled, { css } from 'styled-components';

const shared = css`
  position: absolute;
  text-transform: uppercase;
  font-size: 0.9rem;
  padding: 0 0 1rem;
  font-family: 'Font Awesome 5 Free';
  font-weight: 900;
`;

const TableWrapper = styled.div`
  margin: 1rem 0 4rem;
  box-shadow: 0 3.5rem 3rem rgba(0, 0, 0, 0.2);
  position: relative;
  @media (max-width: 768px) {
    &:before {
      content: 'Scroll horizontally \f061';
      ${shared}
      right: 0;
      top: -10%;
    }
    ${(p) =>
      p.topics &&
      `&:after {
      content: 'Each column points to a different route \f062';
      ${shared}
      left: 0;
      top: 110%;
    }`}
  }
`;

const Head_cell = styled.th`
  color: #000;
  text-align: center;
  padding: 1.5rem 0.5rem;
  font-size: 2rem;
  border: 0.3rem solid ${(p) => p.theme.primaryColor};
  background: ${(p) => p.theme.primaryColor};
  &:nth-child(odd) {
    color: #fff;
    background: ${(p) => p.theme.tertiaryColor};
    border: 0.3rem solid ${(p) => p.theme.primaryColor};
  }
`;

//! The border-collapse CSS property sets whether cells inside a <table> have shared or separate borders.
/**
    collapse:- Adjacent cells have shared borders (the collapsed-border table rendering model).
    separate:- Adjacent cells have distinct borders (the separated-border table rendering model).
 */
const common = css`
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 1.3rem;
  &:last-child {
    height: 6rem;
  }
`;

const detectMobile = ({ mobile }) => {
  if (mobile)
    return css`
      ${Head_cell} {
        width: 10rem;
        height: 10rem;
        padding: 0.625rem;
        ${common}
      }
      .body--cell {
        width: 20rem;
        height: 10rem;
        padding: 0.625rem;
        ${common}
      }
    `;
  else
    return css`
      ${Head_cell}, .body--cell {
        padding: 2rem 0.625rem 0.625rem;
        height: 6rem;
        width: 12rem;
        ${common}
      }
    `;
};

const Table = styled.table`
  border-radius: 0.2rem;
  border: 0.3rem solid ${(p) => p.theme.primaryColor};
  border-collapse: collapse;
  width: 100%;
  white-space: nowrap;
  background-color: #fff;
  tr:nth-child(even) {
    background: #f8f8f8;
  }
  @media (max-width: 768px) {
    ${detectMobile}
    & > thead {
      display: block;
      float: left;
      ${Head_cell} {
        display: block;
        text-align: left;
      }
    }
    & > tbody {
      display: block;
      /*"overflow-x: auto" <- Scroll horizontally  */
      overflow-x: auto;
      tr {
        display: table-cell;
        .body--cell {
          display: block;
          text-align: center;
        }
      }
    }
    tr {
      /* "tr" is a single vertical table-cell now, each "Body_cell" counts only upto 3 within each tr column*/
      .body--cell:nth-child(odd) {
        background: #f8f8f8;
        border-right: 0.1rem solid #e6e4e4;
      }
      .body--cell:nth-child(even) {
        background: #fff;
        border-right: 0.1rem solid #e6e4e4;
      }
    }
  }
`;

const R_Table = ({ col_1, col_2, col_3, children, mobile, topics }) => (
  <TableWrapper topics={topics}>
    <Table mobile={mobile}>
      <thead>
        <tr>
          <Head_cell>{col_1}</Head_cell>
          <Head_cell>{col_2}</Head_cell>
          <Head_cell>{col_3}</Head_cell>
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </Table>
  </TableWrapper>
);
export default R_Table;
