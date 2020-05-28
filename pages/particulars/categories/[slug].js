import withParent from '@/hoc/withParent';
import {
  useFetchBriefsByCategory,
  useFetchUser,
  useCreateBrief,
} from '@/apollo/actions';
import withApollo from '@/hoc/withApollo';
import { getDataFromTree } from '@apollo/react-ssr';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import Table from '@/components/shared/Table';
import V_Menu from '@/components/shared/menus/V_Menu';
import Button from '@/components/shared/buttons/ShimmerButton';
import FooterInput from '@/components/forms/S_Input';
import B_Button from '@/components/shared/buttons/F_Button';
import { toast } from 'react-toastify';

const PageFunction = styled.h1`
  margin: 0 0 5rem;
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

const useInitialData = () => {
  const router = useRouter();
  const slug = router.query.slug;
  const { data } = useFetchBriefsByCategory({
    variables: { slug },
  });
  const { data: u_data } = useFetchUser();
  const s_Briefs = (data && data.briefsByCategory) || [];
  const user = (u_data && u_data.user) || null;
  const title =
    (s_Briefs.length > 0 && s_Briefs[1].particularsCategory.title) || '';

  return {
    title,
    user,
    s_Briefs,
    slug,
  };
};

const handleCreateBrief = (slug, createBrief) => async (b_data, resetForm) => {
  b_data.particularsCategory = slug;
  await createBrief({ variables: b_data });
  toast.success('Brief created successfully', {
    position: toast.POSITION.BOTTOM_LEFT,
  });
  const footer = document.querySelector('.slide-footer');
  if (footer.classList.contains('active')) {
    footer.classList.remove('active');
    document.querySelector('.post--btn').innerText = 'Add a Brief';
  }
  resetForm();
};

const Briefs = () => {
  const { s_Briefs, title, user, slug } = useInitialData();
  const [createBrief, { loading }] = useCreateBrief();

  return (
    <>
      <PageFunction>{title}</PageFunction>
      {user ? (
        <>
          <B_Button size='medium' themeColor='#444'>
            Add a Brief
          </B_Button>
          <FooterInput
            plc_Title='Enter brief title'
            plc_Content='Enter concepts covered in CSV fashion'
            parent_fn={handleCreateBrief(slug, createBrief)}
            loading={loading}
            brief
          />
        </>
      ) : (
        <i>Log in to create a brief</i>
      )}
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

export default withApollo(withParent(Briefs), { getDataFromTree });
