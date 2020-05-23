import styled from 'styled-components';

const TableWrapper = styled.div`
  margin: 1rem 7rem 7rem;
  box-shadow: 0 3.5rem 5rem rgba(0, 0, 0, 0.2);
  @media (max-width: 768px) {
    &:before {
      content: 'Scroll horizontally >';
      display: block;
      text-align: right;
      font-size: 11px;
      padding: 0 0 10px;
    }
  }
`;
const Head_cell = styled.th`
  text-align: center;
  padding: 8px;
  color: #fff;
  background: #4fc3a1;
  &:nth-child(odd) {
    color: #fff;
    background: #324960;
  }
`;
const Body_cell = styled.td`
  color: #000;
  text-align: center;
  padding: 8px;
  border-right: 1px solid #cfd8dc;
  font-size: 12px;
`;

//! The border-collapse CSS property sets whether cells inside a <table> have shared or separate borders.
/**
    collapse:- Adjacent cells have shared borders (the collapsed-border table rendering model).
    separate:- Adjacent cells have distinct borders (the separated-border table rendering model).
 */
const Table = styled.table`
  border-radius: 5px;
  font-size: 12px;
  font-weight: normal;
  border: none;
  border-collapse: collapse;
  width: 100%;
  max-width: 100%;
  white-space: nowrap;
  background-color: white;
  tr:nth-child(even) {
    background: #f8f8f8;
  }
  @media (max-width: 768px) {
    display: block;
    width: 100%;
    & > thead,
    & > tbody,
    & > thead ${Head_cell} {
      display: block;
    }
    & > thead ${Head_cell}:last-child {
      border-bottom: none;
    }
    & > thead {
      float: left;
    }
    & > tbody {
      width: auto;
      position: relative;
      overflow-x: auto;
    }
    ${Head_cell}, ${Body_cell} {
      padding: 20px 0.625em 0.625em 0.625em;
      height: 60px;
      vertical-align: middle;
      box-sizing: border-box;
      overflow-x: hidden;
      overflow-y: auto;
      width: 120px;
      font-size: 13px;
      text-overflow: ellipsis;
    }
    & > thead ${Head_cell} {
      text-align: left;
      border-bottom: 1px solid #f7f7f9;
    }
    & > tbody > tr {
      display: table-cell;
      &:nth-child(odd) {
        background: none;
      }
    }
    tr:nth-child(even) {
      background: transparent;
    }
    tr > ${Body_cell}:nth-child(odd) {
      background: #f8f8f8;
      border-right: 1px solid #e6e4e4;
    }
    tr > ${Body_cell}:nth-child(even) {
      border-right: 1px solid #e6e4e4;
    }
    & > tbody ${Body_cell} {
      display: block;
      text-align: center;
    }
  }
`;

const R_Table = () => (
  <TableWrapper>
    <Table>
      <thead>
        <tr>
          <Head_cell>Topic</Head_cell>
          <Head_cell>Category</Head_cell>
          <Head_cell>Author</Head_cell>
        </tr>
      </thead>
      <tbody>
        <tr>
          <Body_cell>Content 1</Body_cell>
          <Body_cell>Content 1</Body_cell>
          <Body_cell>Content 1</Body_cell>
        </tr>
        <tr>
          <Body_cell>Content 2</Body_cell>
          <Body_cell>Content 2</Body_cell>
          <Body_cell>Content 2</Body_cell>
        </tr>
        <tr>
          <Body_cell>Content 3</Body_cell>
          <Body_cell>Content 3</Body_cell>
          <Body_cell>Content 3</Body_cell>
        </tr>
        <tr>
          <Body_cell>Content 4</Body_cell>
          <Body_cell>Content 4</Body_cell>
          <Body_cell>Content 4</Body_cell>
        </tr>
      </tbody>
    </Table>
  </TableWrapper>
);
export default R_Table;
