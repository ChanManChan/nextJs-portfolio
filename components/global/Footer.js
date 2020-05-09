import styled, { ThemeContext } from 'styled-components';
import { useContext } from 'react';
const Footer = styled.footer`
  border-top: 0.2rem solid ${(p) => p.theme.primaryColor};
  background: ${(p) => p.theme.secondaryColor};
  text-align: center;
  color: #fff;
  padding: 1.5rem 0;
  margin: 1rem 0 0;
`;

const CustomFooter = () => {
  const { primaryColor, secondaryColor } = useContext(ThemeContext);
  return (
    <Footer theme={{ primaryColor, secondaryColor }}>
      <small>Copyright &copy; Your Website</small>
    </Footer>
  );
};
export default CustomFooter;
