import styled from 'styled-components';

const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  width: 20px;
  height: 20px;
  order: 1;
  z-index: 2;
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  visibility: hidden;
`;

const Label = styled.label`
  padding: 12px 25px;
  display: block;
  text-align: left;
  cursor: pointer;
  position: relative;
  z-index: 2;
  transition: color 200ms ease-in;
  overflow: hidden;

  &:before {
    content: '';
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #5562eb;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%) scale3d(1, 1, 1);
    transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
    opacity: 0;
    z-index: -1;
  }

  &:after {
    content: '';
    width: 20px;
    height: 20px;
    border: 2px solid #d1d7dc;
    background-color: #fff;
    background-image: url("data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5.414 11L4 12.414l5.414 5.414L20.828 6.414 19.414 5l-10 10z' fill='%23fff' fill-rule='nonzero'/%3E%3C/svg%3E ");
    background-repeat: no-repeat;
    background-position: -2px -1px;
    border-radius: 50%;
    z-index: 2;
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    transition: all 200ms ease-in;
  }
`;
const Group = styled.div`
  background-color: #3e5165;
  color: #fff;
  display: block;
  margin: 10px 0;
  position: relative;
  width: 100%;
  transition: background-color 0.3s ease;
  > ${Checkbox}:checked ~ ${Label} {
    color: #fff;
    &:before {
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

const CustomCheckbox = ({ handleChecked, s_Id, s_Name }) => (
  <Group>
    <Checkbox id={s_Id} onChange={handleChecked} name={s_Name} />
    <Label htmlFor={s_Id}>{s_Name}</Label>
  </Group>
);
export default CustomCheckbox;
