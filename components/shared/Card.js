import styled from 'styled-components';

const Icon = styled.i`
  opacity: 0;
  font-size: 18px;
  color: #fff;
  will-change: transform;
  transform: scale(0.1);
  transition: all 0.2s ease;
`;

const ImageContainer = styled.div`
  width: 400px;
  height: 200px;
  background-image: ${(p) => p.projectImage};
  background-size: 100% 100%;
  filter: grayscale(100%);
`;

const Button = styled.button`
  position: absolute;
  right: 1.4rem;
  bottom: 1.4rem;
  width: 3rem;
  height: 3rem;
  background-color: ${(p) => p.buttonBg};
  border: none;
  border-radius: 3rem;
  cursor: pointer;
  outline: none;
  transition: all 0.3s ease;
  mix-blend-mode: hard-light;
  ${Icon} {
    font-size: 3rem;
  }
`;

const Card = styled.div`
  position: relative;
  width: 500px;
  height: 200px;
  background-color: #fff;
  overflow: hidden;
  margin-bottom: 4px;

  &:before {
    content: '';
    z-index: 99;
    position: absolute;
    top: -10px;
    left: 32px;
    display: block;
    width: 16px;
    height: 16px;
    border-radius: 16px;
    background-color: #e6e5e1;
  }
  &:after {
    content: '';
    z-index: 99;
    position: absolute;
    bottom: -10px;
    left: 32px;
    display: block;
    width: 16px;
    height: 16px;
    border-radius: 16px;
    background-color: #e6e5e1;
  }
  ul {
    z-index: 99;
    position: absolute;
    left: 39px;
    top: 5px;
    list-style-type: none;
    li {
      width: 2px;
      height: 2px;
      border-radius: 2px;
      margin: 6px 0;
      background-color: #e6e5e1;
    }
  }
  h3 {
    pointer-events: none;
    z-index: 99;
    position: absolute;
    bottom: 10px;
    right: 130px;
    font-size: 2rem;
    color: #fff;
  }

  .fa-arrow-right {
    z-index: 100;
    position: absolute;
    right: 75px;
    bottom: 25px;
    font-size: 40px;
    cursor: pointer;
  }
  p {
    z-index: 99;
    position: absolute;
    top: 20px;
    right: 70px;
    color: #333;
    opacity: 0.7;
    font-size: 12px;
    font-weight: bold;
    letter-spacing: 1px;
    writing-mode: vertical-lr;
    transition: all 0.2s ease;
  }

  .social {
    position: absolute;
    left: 60px;
    top: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 180px;
    height: 64px;
    border-radius: 80px;
  }

  .social ${Icon}:nth-of-type(1) {
    transition-delay: 0.4s;
  }

  .social ${Icon}:nth-of-type(2) {
    transition-delay: 0.3s;
  }

  .social ${Icon}:nth-of-type(3) {
    transition-delay: 0.2s;
  }

  .social ${Icon}:nth-of-type(4) {
    transition-delay: 0.1s;
  }

  &:hover ${Icon} {
    opacity: 1;
    transform: scale(1);
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

const CustomCard = ({ projectName, techStack, projectImage, buttonBg }) => (
  <Card>
    <h3>{projectName}</h3>
    <Icon className='fas fa-arrow-right'></Icon>
    <p>{techStack}</p>
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
    <div className='social'>
      <Icon className='fab fa-node-js'></Icon>
      <Icon className='fab fa-react'></Icon>
      <Icon className='fas fa-database'></Icon>
      <Icon className='fab fa-github'></Icon>
    </div>
    <Button buttonBg={buttonBg} />
  </Card>
);
export default CustomCard;
