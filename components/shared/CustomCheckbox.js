import styled from 'styled-components';

const Checkbox = styled.input`
  position: absolute;
  top: 50%;
  right: 2rem;
  width: 2rem;
  height: 2rem;
  cursor: pointer;
  z-index: 2;
  visibility: hidden;
  transform: translateY(-50%);
`;

const Label = styled.label`
  padding: 1.2rem 2.5rem;
  display: block;
  text-align: left;
  cursor: pointer;
  position: relative;
  z-index: 2;
  transition: color 200ms ease-in;
  overflow: hidden;
  user-select: none;

  &:before {
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background-color: #5562eb;
    opacity: 0;
    z-index: -1;
    transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
    transform: translate(-50%, -50%) scale3d(1, 1, 1);
  }

  &:after {
    content: '';
    position: absolute;
    right: 2rem;
    top: 50%;
    width: 2rem;
    height: 2rem;
    border: 0.2rem solid ${(p) => p.theme.primaryColor};
    background-color: #fff;
    background-image: url("data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5.414 11L4 12.414l5.414 5.414L20.828 6.414 19.414 5l-10 10z' fill='%23fff' fill-rule='nonzero'/%3E%3C/svg%3E ");
    background-repeat: no-repeat;
    background-position: -0.26rem -0.26rem;
    border-radius: 50%;
    z-index: 2;
    cursor: pointer;
    transform: translateY(-50%);
    transition: all 200ms ease-in;
  }
`;

const Group = styled.div`
  background-color: #3e5165;
  color: #fff;
  display: block;
  margin: 0.5rem 0;
  position: relative;
  width: 100%;
  transition: background-color 0.3s ease;
  > ${Checkbox}:checked ~ ${Label} {
    color: #fff;
    &:before {
      /*  The ":before" element animates by using scale3d (for hardware acceleration) by 56 times. 56 * 10 === 560 */
      transform: translate(-50%, -50%) scale3d(56, 56, 1);
      opacity: 1;
    }
    &:after {
      background-color: #54e0c7;
      border-color: #54e0c7;
    }
  }
  &:hover {
    background-color: #324252;
    color: #09fbd2;
  }
`;

const CustomCheckbox = ({ handleChecked, s_Id, s_Name, init_check }) => (
  <Group>
    <Checkbox
      id={s_Id}
      type='checkbox'
      onChange={handleChecked}
      name={s_Name}
      defaultChecked={init_check}
    />
    <Label htmlFor={s_Id}>{s_Name}</Label>
  </Group>
);
export default CustomCheckbox;
