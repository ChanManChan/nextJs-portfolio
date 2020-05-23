import styled from 'styled-components';

const Card = styled.div`
  flex: 0 1 calc(33.33% - 3rem);
  display: flex;
  flex-flow: column wrap;
  color: #555bff;
  min-height: 9rem;
  padding: 1.5rem;
  background-color: #fff;
  border: 0.3rem solid #555bff;
  box-shadow: 1rem -1rem 0 -0.3rem #fff, 1rem -1rem #1fc11b,
    2rem -2rem 0 -0.3rem #fff, 2rem -2rem #ff5555;
  transition: box-shadow 1s, top 1s, left 1s;
  cursor: pointer;
  &:hover {
    box-shadow: 0 0 0 -0.3rem #fff, 0 0 #1fc11b, 0 0 0 -0.3rem #fff, 0 0 #ff5555;
  }
`;

const Title = styled.h2`
  letter-spacing: 0.5px;
  margin-bottom: 1rem;
  text-transform: uppercase;
  flex: 1;
`;

const Subtitle = styled.p`
  font-size: 1.4rem;
`;

const CategoryCard = ({ title, subtitle }) => (
  <Card>
    <Title>{title}</Title>
    <Subtitle>{subtitle}</Subtitle>
  </Card>
);

export default CategoryCard;
