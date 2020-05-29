import Pagination from 'react-js-pagination';
import styled from 'styled-components';

const Container = styled.div`
  .ul {
    display: flex;
    list-style: none;
  }
  .anchor {
    padding: 1rem 1.5rem;
    border: 0.1rem solid ${(p) => p.theme.staticColor1};
    text-decoration: none;
    color: ${(p) => p.theme.bodyFontColor};
    background-color: ${(p) => p.theme.bodyBackgroundColor};
    transition: background-color 0.2s ease-in-out;
    &:hover {
      background-color: ${(p) => p.theme.staticColor2};
    }
  }
  .active_anchor {
    background-color: ${(p) => p.theme.quaternaryColor};
  }
`;

const AppPagination = ({ count, pageSize, pageNum, onPageChange }) => {
  return (
    <Container>
      <Pagination
        innerClass='ul'
        activeLinkClass='active_anchor'
        linkClass='anchor'
        activePage={pageNum}
        itemsCountPerPage={pageSize}
        totalItemsCount={count}
        pageRangeDisplayed={5}
        onChange={(page) => onPageChange(page, pageSize)}
      />
    </Container>
  );
};

export default AppPagination;
