import Image from '@/components/shared/Image';
import Link from '@/components/shared/buttons/ShimmerButton';
import Badge from '@/components/styles/Badge';
import Span from '@/components/styles/Glitch_Effect';

import {
  H1,
  ProjectTitle,
  Title,
  Stack,
  Border,
  Description,
  Deployed,
  Repository,
  Screenshot1,
  Screenshot2,
  Screenshot3,
  Screenshot4,
} from '../styles/specific/projects[id]_styles';

export const P_TITLE = ({ title }) => (
  <ProjectTitle>
    <H1>{title}</H1>
  </ProjectTitle>
);

export const Page_fnc = () => (
  <Title>
    <p>
      <span>details</span>
    </p>
  </Title>
);

export const T_STACK = ({ techStack }) => (
  <Stack className='border'>
    <Border>
      {techStack.map((t, i) => (
        <Badge
          key={i}
          title={t.name}
          subTitle={t.description}
          bdgTheme={t.theme}
        />
      ))}
    </Border>
  </Stack>
);

export const P_Desc = ({ description }) => (
  <Description className='border'>
    <Border>
      <Span>{description}</Span>
    </Border>
  </Description>
);

export const Deployed_Link = ({ deployed }) => (
  <Deployed className='border'>
    <Border>
      <Link
        size='large'
        themeColor='#757575'
        href={deployed}
        target='_blank'
        rel='noopener noreferrer'
      >
        Deployed link
      </Link>
    </Border>
  </Deployed>
);

export const REPOS = ({ repoAPI, repoClient }) => (
  <Repository className='border'>
    <Border>
      <Link
        size='large'
        themeColor='#757575'
        href={repoAPI}
        target='_blank'
        rel='noopener noreferrer'
      >
        API
      </Link>
      <Link
        size='large'
        themeColor='#757575'
        href={repoClient}
        target='_blank'
        rel='noopener noreferrer'
      >
        Client
      </Link>
    </Border>
  </Repository>
);

const Border_Image = ({
  img_Link = '',
  caption = '',
  desc = '',
  projectName = '',
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <Border>
      <Image
        caption={caption}
        desc={desc}
        altName={projectName}
        img_Link={img_Link}
        handleShowDialog={() => setIsOpen((cs) => !cs)}
        openDialog={isOpen}
      />
    </Border>
  );
};

export const SS_1 = (props) => (
  <Screenshot1 className='border'>
    <Border_Image {...props} />
  </Screenshot1>
);

export const SS_2 = (props) => (
  <Screenshot2 className='border'>
    <Border_Image {...props} />
  </Screenshot2>
);

export const SS_3 = (props) => (
  <Screenshot3 className='border'>
    <Border_Image {...props} />
  </Screenshot3>
);

export const SS_4 = (props) => (
  <Screenshot4 className='border'>
    <Border_Image {...props} />
  </Screenshot4>
);
