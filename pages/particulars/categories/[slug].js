import withParent from '@/hoc/withParent';
import { useFetchBriefsByCategory } from '@/apollo/actions';
import withApollo from '@/hoc/withApollo';
import { getDataFromTree } from '@apollo/react-ssr';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import Table from '@/components/shared/Table';
import V_Menu from '@/components/shared/V_Menu';
import Button from '@/components/shared/ShimmerButton';

const PageFunction = styled.h1`
  margin: 0 0 10rem;
  font-size: 3rem;
`;
const Body_cell = styled.td.attrs({ className: 'body--cell' })`
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
    width: 25%;
    text-align: center;
  }
`;

const FSL_Container = styled.div`
  height: 100%;
  width: 100%;
`;

const Topics = () => {
  const router = useRouter();
  const { data } = useFetchBriefsByCategory({
    variables: { slug: router.query.slug },
  });

  const s_Briefs = (data && data.briefsByCategory) || [];
  const title =
    (s_Briefs.length > 0 && s_Briefs[1].particularsCategory.title) || '';
  return (
    <>
      <PageFunction>{title}</PageFunction>
      <Table col_1='Course' col_2='Concepts' col_3='Certificate'>
        {s_Briefs.map((b, i) => (
          <tr key={i}>
            <Body_cell>{b.title}</Body_cell>
            <Body_cell>
              <FSL_Container>
                <V_Menu content={b.content} />
              </FSL_Container>
            </Body_cell>
            <Body_cell>
              <Button
                href='https://google.com'
                themeColor='#757575'
                size='medium'
                target='_blank'
              >
                View Certificate
              </Button>
            </Body_cell>
          </tr>
        ))}
      </Table>
    </>
  );
};

export default withApollo(withParent(Topics), { getDataFromTree });
