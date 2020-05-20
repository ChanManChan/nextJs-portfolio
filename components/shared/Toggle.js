import styled from 'styled-components';

const ToggleWrapper = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 1rem;
  width: 5rem;
  min-width: 5rem;
  height: 2.5rem;
  border-radius: 2.5rem;
  border: 1px solid #666;
  margin: auto;
  display: flex;
  cursor: pointer;
  background-image: linear-gradient(
    to bottom,
    ${(p) => p.theme.primaryColor},
    ${(p) => p.theme.secondaryColor}
  );
`;

const Notch = styled.div`
  height: 2.1rem;
  width: 2.1rem;
  border-radius: 50%;
  border: 1px solid #666;
  margin-top: 0.1rem;
  background: #fff;
  transition: transform 0.1s linear;
  transform: translate(${(p) => (p.isActive ? '2.6rem' : '0.1rem')});
`;

const Toggle = ({ isActive, onToggle }) => (
  <ToggleWrapper onClick={onToggle}>
    <Notch isActive={isActive} />
  </ToggleWrapper>
);
export default Toggle;
