import styled from 'styled-components';
import Link from 'next/link';
import Anchor from './CustomIcon';

//! Initial tech icons and right arrow styles
const Icon = styled.i`
  opacity: 0;
  font-size: 2.5rem;
  color: #fff;
  will-change: transform, opacity;
  transform: scale(0.1);
  transition: transform 0.2s ease, opacity 0.2s ease;
`;

//! Tech image container
const ImageContainer = styled.div`
  width: 40rem;
  height: 20rem;
  background-image: ${(p) => p.projectImage};
  /* The size of the background image is set in percent of the parent element; 100% width and 100% height. ie. within this 40 X 20 rem ImageContainer */
  background-size: 100% 100%;
  filter: grayscale(100%);
  will-change: filter;
  transition: filter 0.2s ease;
`;

//! Expanding (radius wise) button
const Button = styled.a`
  position: absolute;
  /* Initial position of the bottom-right corner circle */
  right: 1.4rem;
  bottom: 1.4rem;
  width: 3rem;
  height: 3rem;
  border-radius: 3rem;
  background-color: ${(p) => p.buttonBg};
  border: none;
  outline: none;
  cursor: pointer;
  transform: scale(1);
  will-change: transform;
  transition: transform 0.3s ease;
  /* The mix-blend-mode CSS property sets how an element's content should blend with the content of the element's parent and the element's background. */
  mix-blend-mode: hard-light;
`;

const Card = styled.div`
  position: relative;
  width: 50rem;
  height: 20rem;
  background-color: #fff;
  overflow: hidden;
  margin-bottom: 0.4rem;

  .actionIcons {
    position: absolute;
    cursor: pointer;
    color: transparent;
    border: none;
    will-change: color, border;
    transition: border 0.2s ease, color 0.2s ease;
  }
  .editIcon {
    &:before {
      content: '\f0ad';
    }
    left: 7rem;
    top: 6.6rem;
  }
  .deleteIcon {
    &:before {
      content: '\f2ed';
    }
    left: 11.6rem;
    top: 6.6rem;
  }

  /*Movie ticket like top cutout semicircle */
  &:before {
    content: '';
    z-index: 99;
    position: absolute;
    top: -1rem;
    left: 3.2rem;
    display: block;
    width: 1.6rem;
    height: 1.6rem;
    border-radius: 1.6rem;
    background-color: #e6e5e1;
  }
  /*Movie ticket like bottom cutout semicircle */
  &:after {
    content: '';
    z-index: 99;
    position: absolute;
    bottom: -1rem;
    left: 3.2rem;
    display: block;
    width: 1.6rem;
    height: 1.6rem;
    border-radius: 1.6rem;
    background-color: #e6e5e1;
  }

  /* Movie ticket like punched holes */
  ul {
    z-index: 99;
    position: absolute;
    left: 3.9rem;
    top: 0.5rem;
    list-style-type: none;
    li {
      width: 0.2rem;
      height: 0.2rem;
      border-radius: 0.2rem;
      margin: 0.6rem 0;
      background-color: #e6e5e1;
    }
  }

  /* Project title */
  h3 {
    text-align: end;
    pointer-events: none;
    user-select: none;
    z-index: 99;
    position: absolute;
    bottom: 1rem;
    right: 13rem;
    font-size: 2rem;
    color: #fff;
  }

  .fa-arrow-right {
    z-index: 100;
    position: absolute;
    right: 7.5rem;
    bottom: 2.5rem;
    font-size: 4rem;
    cursor: pointer;
  }
  /* Tech stack */
  p {
    z-index: 99;
    position: absolute;
    top: 2rem;
    right: 7rem;
    margin-right: -2rem;
    color: #333;
    opacity: 0.7;
    font-size: 1.2rem;
    font-weight: bold;
    letter-spacing: 0.1rem;
    /* The writing-mode CSS property sets whether lines of text are laid out horizontally or vertically, as well as the direction in which blocks progress.  */
    writing-mode: vertical-rl;
    transition: color 0.2s ease;
  }

  /* Tech icons container*/
  .tech {
    position: absolute;
    left: 6rem;
    top: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 18rem;
    height: 6.4rem;
    border-radius: 8rem;
  }

  /* Tech icons (display them one after the other)*/
  .tech ${Icon}:nth-of-type(1) {
    transition-delay: 0.4s;
  }

  .tech ${Icon}:nth-of-type(2) {
    transition-delay: 0.3s;
  }

  .tech ${Icon}:nth-of-type(3) {
    transition-delay: 0.2s;
  }

  .tech ${Icon}:nth-of-type(4) {
    transition-delay: 0.1s;
  }

  /* Display the tech icons and right arrow when hovering*/
  &:hover ${Icon} {
    opacity: 1;
    transform: scale(1);
  }

  &:hover .editIcon,
  &:hover .deleteIcon {
    color: #fff;
    border: 0.1rem solid #fff;
  }

  &:hover ${Button} {
    transform: scale(16.5);
  }

  &:hover p {
    color: #fff;
  }
  &:hover ${ImageContainer} {
    filter: grayscale(0);
  }
`;

const CustomCard = ({
  projectName,
  techStack,
  projectImage,
  buttonBg,
  id,
  remove,
  as,
  ...props
}) => (
  <Card {...props}>
    <h3>{projectName}</h3>
    <Icon className='fas fa-arrow-right'></Icon>
    <p>{techStack && techStack.map((t) => t.name + ', ')}</p>
    <ImageContainer projectImage={projectImage} />
    <ul>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
    <div className='tech'>
      <Icon className='fab fa-node-js' />
      <Icon className='fab fa-react' />
      <Icon className='fas fa-database' />
      <Icon className='fab fa-github' />
    </div>
    <Anchor link as={as} className='actionIcons editIcon'>
      <Icon className='fas fa-wrench' />
    </Anchor>
    <Anchor action={remove} className='actionIcons deleteIcon'>
      <Icon className='fas fa-trash-alt' />
    </Anchor>
    <Link href='/projects/[id]' as={`/projects/${id}`} passHref>
      <Button buttonBg={buttonBg} />
    </Link>
  </Card>
);
export default CustomCard;
