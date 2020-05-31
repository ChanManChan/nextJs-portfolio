import withParent from '@/hoc/withParent';
import styled from 'styled-components';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
import kv_pairs from '@/variables/messages';
import { useFetchHighlight } from '@/apollo/actions';
import withApollo from '@/hoc/withApollo';
import Card from '@/components/shared/card/Card';
import TopicCard from '@/components/shared/CategoryCard';
import { getDataFromTree } from '@apollo/react-ssr';
import Disabled_State from '@/components/styles/Disabled_State';
import Loading from '@/components/styles/Loading';
import Button from '@/components/shared/buttons/ShimmerButton';
import Link from 'next/link';
import { shortify } from '@/utils/functions';

const ProjectContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(50rem, 1fr));
  grid-row-gap: 3rem;
  margin-bottom: 2rem;
  @media (max-width: 768px) {
    & ~ a {
      padding: 1rem 2rem;
      border: 0.15rem solid ${(p) => p.theme.bodyFontColor};
      font-size: 1rem;
    }
  }
`;

const TopicContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  margin-bottom: 2rem;
  padding: 3rem;
`;

const PageFunction = styled.h2`
  margin: 5rem 0 7rem;
  font-size: 3rem;
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const useGetInitialData = () => {
  const { data, loading } = useFetchHighlight({ variables: { ask: 3 } });
  const { topics = [], projects = [] } = (data && data.highlight) || {};
  return { projects, topics, loading };
};

const Home = () => {
  const { projects, topics, loading } = useGetInitialData();
  const disposeId = React.useRef(null);
  const router = useRouter();
  const { message } = router.query;

  React.useEffect(() => {
    disposeId.current = setTimeout(() => {
      router.replace('/', '/', { shallow: true });
    }, 2000);
    return () => {
      clearTimeout(disposeId.current);
    };
  }, [message]);

  if (message)
    toast[kv_pairs[message].status](kv_pairs[message].value, {
      position: toast.POSITION.BOTTOM_LEFT,
    });

  return (
    <Disabled_State loading={`${loading}`}>
      <PageFunction>Projects</PageFunction>
      <ProjectContainer>
        {projects.map((p, i) => (
          <Card
            key={i}
            id={p._id}
            projectName={p.title}
            techStack={p.techStack}
            projectImage="url('/bg.jpeg')"
            buttonBg={p.theme}
            disable_func
          />
        ))}
      </ProjectContainer>
      <Link href='/projects' passHref>
        <Button size='medium' autoTheme>
          See More Projects
        </Button>
      </Link>
      <PageFunction>Ask Me</PageFunction>
      <TopicContainer>
        {topics.map((t, i) => (
          <TopicCard
            key={i}
            href='/connect/topics/[slug]'
            as={`/connect/topics/${t.slug}`}
            title={t.title}
            subtitle={shortify(t.content)}
          />
        ))}
      </TopicContainer>
      <Link href='/connect' passHref>
        <Button size='medium' autoTheme>
          See More Topics
        </Button>
      </Link>
      <Loading msg='Fetching random highlights...' loading={`${loading}`} />
    </Disabled_State>
  );
};

export default withApollo(withParent(Home, 'Home'), { getDataFromTree });
