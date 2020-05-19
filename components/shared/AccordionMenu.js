import styled from 'styled-components';
import Checkbox from './CustomCheckbox';
import { FieldArray } from 'formik';

const Menu = styled.div`
  width: 40rem;
  margin: 2rem auto;
  font-family: 'Open Sans', sans-serif;
  box-shadow: 0px 0px 25px #00000070;
  clear: both;
  display: table;
  margin-bottom: 10rem;
`;

const Items = styled.ul`
  display: none;
  list-style: none;
  background: #23313f;
  padding: 0px;
  height: auto;
  color: #fff;
  transition-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
  transition: all 200ms;
  clear: both;
  float: left;
  width: 100%;
  overflow: hidden;
`;

const List = styled.div`
  font-size: 1.4rem;
  border-bottom: 1px solid #324252;
  position: relative;
  width: 100%;
  height: 50px;
  vertical-align: sub;
  background: #3e5165;
  clear: both;
  &:after {
    content: '\f107';
    font-family: 'Font Awesome 5 Free';
    font-weight: 900;
    position: absolute;
    right: 17px;
    top: 17px;
    padding: 0px 5px;
    color: #fff;
  }
  &:before {
    content: '\f07b';
    font-family: 'Font Awesome 5 Free';
    font-weight: 900;
    position: absolute;
    left: 17px;
    top: 17px;
    padding: 0px 5px;
    color: #fff;
  }
  span {
    cursor: pointer;
    color: #fff;
    padding: 17px 0px 17px 45px;
    display: block;
    height: 100%;
    transition: all 300ms ease;
    &:hover {
      background-color: #324252;
      color: #09fbd2;
    }
  }
  &.active {
    &:after {
      content: '\f106';
      font-family: 'Font Awesome 5 Free';
      font-weight: 900;
      position: absolute;
      right: 17px;
      top: 17px;
      padding: 0px 5px;
      color: #fff;
    }
    &:before {
      content: '\f07c';
      font-family: 'Font Awesome 5 Free';
      font-weight: 900;
      position: absolute;
      left: 17px;
      top: 17px;
      padding: 0px 5px;
      color: #fff;
    }
    > span {
      color: #46efa4;
      text-transform: uppercase;
      font-weight: bold;
    }
    > ${Items} {
      display: block;
    }
  }
`;

const ListItems = styled.li`
  padding: 0px;
  border-bottom: 1px solid #324252;
  list-style: none;
  &:last-child {
    border-color: transparent;
    padding-bottom: 0px;
  }
`;

const AccordionMenu = ({ title, name, stack, s_Formik_Arr }) => {
  const accordion = (e) => {
    e.stopPropagation();
    if (e.target.parentElement.classList.contains('active')) {
      e.target.parentElement.classList.remove('active');
    } else {
      e.target.parentElement.classList.add('active');
    }
  };

  return (
    <Menu>
      <List>
        <span id='multi-check' onClick={accordion}>
          {title}
        </span>
        <Items>
          <FieldArray
            name={name}
            render={(arrayHelpers) =>
              stack &&
              stack.map((s, i) => (
                <ListItems key={i}>
                  <Checkbox
                    handleChecked={(e) => {
                      if (e.target.checked) arrayHelpers.push(s._id);
                      else arrayHelpers.remove(s_Formik_Arr.indexOf(s._id));
                    }}
                    s_Id={s._id}
                    s_Name={s.name}
                  />
                </ListItems>
              ))
            }
          />
        </Items>
      </List>
    </Menu>
  );
};
export default AccordionMenu;
