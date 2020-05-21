import styled from 'styled-components';
import Anchor from '@/components/shared/CustomLink';

const MenuItem = styled.li`
  position: relative;
  background: ${(p) => p.theme.secondaryColor};
  border-bottom: 0.3rem solid
    ${(p) => (p.theme.id === 'light' ? '#ed6d3a' : '#88ffff')};
  transition: border-bottom 0.23s ease-in-out, background 0.23s linear;
  cursor: pointer;
  z-index: 2;
  padding: 1.4rem 1.9rem;
  &:hover {
    border-bottom-color: ${(p) => p.theme.gridColor};
    background: ${(p) => p.theme.tertiaryColor};
  }
`;

const OrderedList = styled.ol`
  display: none;
  position: absolute;
  visibility: hidden;
  top: 4.8rem;
  left: 0;
  opacity: 0;
  flex-direction: column;
  list-style: none;
  margin-top: 1rem;
`;

const Popup = styled.span`
  display: inline-block;
  padding: 1.4rem 1.9rem;
  position: relative;
  background: ${(p) => p.theme.secondaryColor};
  transition: border-bottom 0.23s ease-in-out, background 0.23s linear;
  cursor: pointer;
  text-align: center;
  &[aria-haspopup='true'] {
    border-bottom: 0.3rem solid
      ${(p) => (p.theme.id === 'light' ? '#ed6d3a' : '#88ffff')};
  }
  &:hover,
  &:focus-within {
    border-bottom-color: ${(p) => p.theme.gridColor};
    background: ${(p) => p.theme.tertiaryColor};
  }
  &:hover ${OrderedList} {
    display: flex;
    opacity: 1;
    visibility: visible;
  }
`;

const DropdownMenu = ({ user }) => (
  <Popup aria-haspopup='true'>
    <Anchor href='/'>Manage</Anchor>
    <OrderedList>
      {user && (user.role === 'admin' || user.role === 'instructor') && (
        <>
          <MenuItem>
            <Anchor href='/portfolios/new'>Create Portfolio</Anchor>
          </MenuItem>
          <MenuItem>
            <Anchor
              href='/instructor/[id]/dashboard'
              as={`/instructor/${user._id}/dashboard`}
            >
              Dashboard
            </Anchor>
          </MenuItem>
        </>
      )}
    </OrderedList>
  </Popup>
);

export default DropdownMenu;
