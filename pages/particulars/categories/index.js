import withParent from '@/hoc/withParent';
import CategoryCard from '@/components/shared/CategoryCard';
import styled from 'styled-components';
import { useFetchParticularsCategories } from '@/apollo/actions';
import Disabled_State from '@/components/styles/Disabled_State';
import Loading from '@/components/styles/Loading';
import withApollo from '@/hoc/withApollo';
import { getDataFromTree } from '@apollo/react-ssr';
import { PageFunction } from '@/components/styles/common';

const Container = styled.div`
  padding: 3rem 1.5rem 2.4rem;
  height: 30rem;
`;

const FlexWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
`;

const ParticularsCategories = () => {
  const { data, loading } = useFetchParticularsCategories();
  const p_Categories = (data && data.particularsCategories) || [];

  return (
    <Container>
      <Disabled_State loading={`${loading}`}>
        <PageFunction>Categories</PageFunction>
        <FlexWrapper>
          {p_Categories.map((c, i) => (
            <CategoryCard
              key={i}
              href='/particulars/categories/[slug]'
              as={`/particulars/categories/${c.slug}`}
              title={c.title}
              subtitle={c.subTitle}
            />
          ))}
        </FlexWrapper>
        <Loading msg='Fetching categories...' loading={`${loading}`} />
      </Disabled_State>
    </Container>
  );
};

export default withApollo(withParent(ParticularsCategories), {
  getDataFromTree,
});
