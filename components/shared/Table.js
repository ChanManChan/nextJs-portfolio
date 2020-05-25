import styled from 'styled-components';

const TableWrapper = styled.div`
  margin: 1rem 0 4rem;
  box-shadow: 0 3.5rem 3rem rgba(0, 0, 0, 0.2);
  @media (max-width: 768px) {
    &:before {
      content: 'Scroll horizontally >';
      display: block;
      text-align: right;
      text-transform: uppercase;
      font-size: 1.2rem;
      padding: 0 0 1rem;
    }
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
    ${Head_cell}, .body--cell {
      padding: 2rem 0.625rem 0.625rem;
      height: 6rem;
      width: 12rem;
      overflow: hidden;
      text-overflow: ellipsis;
      font-size: 1.3rem;
    }
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

const R_Table = ({ col_1, col_2, col_3, children }) => (
  <TableWrapper>
    <Table>
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
