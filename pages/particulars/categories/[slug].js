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
import { PageFunction, Body_cell } from '@/components/styles/common';
import { removeFooter } from '@/utils/functions';
import Disabled_State from '@/components/styles/Disabled_State';
import Loading from '@/components/styles/Loading';

const Add_B_btn = styled(B_Button).attrs({ className: 'post--btn' })`
  @media (max-width: 500px) {
    padding: 1rem 2rem;
    border: 0.15rem solid
      ${(p) => (p.autoTheme ? p.theme.bodyFontColor : p.themeColor)};
    font-size: 1rem;
  }
`;

const M_body_cell = styled(Body_cell)`
  @media (max-width: 768px) {
    & > ${Button} {
      padding: 0.9rem 1.2rem;
      border: 0.15rem solid ${(p) => p.theme.staticColor2};
      font-size: 1rem;
    }
  }
`;

const FSL_Container = styled.div`
  height: 100%;
  width: 100%;
`;

const useInitialData = () => {
  const router = useRouter();
  const slug = router.query.slug;
  const { data, loading: f_loading } = useFetchBriefsByCategory({
    variables: { slug },
  });
  const { data: u_data } = useFetchUser();
  const s_Briefs = (data && data.briefsByCategory) || [];
  const user = (u_data && u_data.user) || null;
  const title =
    (s_Briefs.length > 0 && s_Briefs[0].particularsCategory.title) || '';

  return {
    title,
    user,
    s_Briefs,
    slug,
    f_loading,
  };
};

const handleCreateBrief = (slug, createBrief) => async (b_data, resetForm) => {
  b_data.particularsCategory = slug;
  await createBrief({ variables: b_data });
  toast.success('Brief created successfully', {
    position: toast.POSITION.BOTTOM_LEFT,
  });
  removeFooter('.post--btn', 'Add a Brief');
  resetForm();
};

const Briefs = () => {
  const { s_Briefs, title, user, slug, f_loading } = useInitialData();
  const [createBrief, { loading }] = useCreateBrief();

  return (
    <Disabled_State loading={`${f_loading}`} cover>
      <PageFunction>{title}</PageFunction>
      {user ? (
        <>
          <Add_B_btn size='medium' themeColor='#444'>
            Add a Brief
          </Add_B_btn>
          <FooterInput
            plc_Title='Enter brief title'
            plc_Content='Enter concepts covered in CSV fashion'
            parent_fn={handleCreateBrief(slug, createBrief)}
            loading={loading}
            brief
          />
        </>
      ) : (
        <i style={{ lineHeight: '5' }}>Log in to create a brief</i>
      )}
      <Table col_1='Course' col_2='Concepts' col_3='Certificate' mobile>
        {s_Briefs.map((b, i) => (
          <tr key={i}>
            <M_body_cell>{b.title}</M_body_cell>
            <M_body_cell>
              <FSL_Container>
                <V_Menu content={b.content} />
              </FSL_Container>
            </M_body_cell>
            <M_body_cell>
              <Button
                href='https://google.com'
                size='medium'
                target='_blank'
                themeColor='#757575'
              >
                View Certificate
              </Button>
            </M_body_cell>
          </tr>
        ))}
      </Table>
      <Loading msg='Fetching briefs...' loading={`${f_loading}`} />
    </Disabled_State>
  );
};

export default withApollo(withParent(Briefs), { getDataFromTree });
