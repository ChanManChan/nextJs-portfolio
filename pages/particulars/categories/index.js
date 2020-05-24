import withParent from '@/hoc/withParent';
import CategoryCard from '@/components/shared/CategoryCard';
import styled from 'styled-components';

const Container = styled.div`
  padding: 3rem 1.5rem 2.4rem;
`;

const PageFunction = styled.h1`
  margin: 0 0 10rem;
  font-size: 3rem;
`;

const FlexWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
`;

const ParticularsCategories = () => {
  return (
    <Container>
      <PageFunction>Categories</PageFunction>
      <FlexWrapper>
        <CategoryCard
          title='General Discussion'
          subtitle='Open any topic you want'
        />
        <CategoryCard
          title='Job Requests'
          subtitle='Post here job opportunities'
        />
        <CategoryCard
          title='Developer Jokes'
          subtitle='Just funny developing stuff'
        />
      </FlexWrapper>
    </Container>
  );
};
export default withParent(ParticularsCategories);
