import Link from 'next/link';
import Anchor from '../buttons/CustomIcon';
import { Icon, ImageContainer, Button, Card, Punched_line } from './styles';

const CustomCard = ({
  projectName = '',
  techStack = [],
  projectImage = '',
  buttonBg,
  id,
  remove,
  as,
  disable_func,
  ...props
}) => (
  <Card {...props}>
    <h3>{projectName}</h3>
    <Icon className='fas fa-arrow-right'></Icon>
    <p>{techStack.map((t) => t.name + ', ')}</p>
    <ImageContainer projectImage={projectImage} />
    <Punched_line />
    <div className='tech'>
      <Icon className='fab fa-node-js' />
      <Icon className='fab fa-react' />
      <Icon className='fas fa-database' />
      <Icon className='fab fa-github' />
    </div>
    {!disable_func && (
      <>
        <Anchor link as={as} className='actionIcons editIcon'>
          <Icon className='fas fa-wrench' />
        </Anchor>
        <Anchor action={remove} className='actionIcons deleteIcon'>
          <Icon className='fas fa-trash-alt' />
        </Anchor>
      </>
    )}
    <Link href='/projects/[id]' as={`/projects/${id}`} passHref>
      <Button buttonBg={buttonBg} />
    </Link>
  </Card>
);

export default CustomCard;
