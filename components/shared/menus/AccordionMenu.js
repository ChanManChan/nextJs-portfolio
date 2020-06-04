import styled, { css } from 'styled-components';
import Checkbox from '../CustomCheckbox';
import { FieldArray } from 'formik';

const Menu = styled.div`
  max-width: 40rem;
  margin: 2rem 0;
  font-family: 'Open Sans', sans-serif;
  box-shadow: 0px 0px 2.5rem #00000070;
`;

const Items = styled.ul`
  height: 0px;
  width: 100%;
  opacity: 0;
  color: #fff;
  background: #23313f;
  list-style: none;
  transform: translateX(15%);
  transition: all 200ms cubic-bezier(0.075, 0.82, 0.165, 1);
`;

const shared = css`
  font-family: 'Font Awesome 5 Free';
  font-weight: 900;
  position: absolute;
  padding: 0px 0.5rem;
  color: #fff;
`;
const shared_after = css`
  top: 1.7rem;
  right: 1.7rem;
`;
const shared_before = css`
  top: 1.7rem;
  left: 1.7rem;
`;
const List = styled.div`
  font-size: 1.4rem;
  border-bottom: 1px solid #324252;
  position: relative;
  width: 100%;
  height: 5rem;
  background: #3e5165;
  margin-bottom: 1rem;
  transition: margin-bottom 0.2s ease;
  &:after {
    content: '\f107';
    ${shared}
    ${shared_after}
  }
  &:before {
    content: '\f07b';
    ${shared}
    ${shared_before}
  }
  span {
    cursor: pointer;
    color: #fff;
    padding: 1.7rem 0rem 1.7rem 4.5rem;
    display: block;
    height: 100%;
    user-select: none;
    transition: all 300ms ease;
    &:hover {
      background-color: #324252;
      color: #09fbd2;
    }
  }
  &.active {
    &:after {
      content: '\f106';
      ${shared}
      ${shared_after}
    }
    &:before {
      content: '\f07c';
      ${shared}
      ${shared_before}
    }
    > span {
      color: #46efa4;
      text-transform: uppercase;
      font-weight: bold;
    }
    > ${Items} {
      height: auto;
      transform: translateX(0);
      opacity: 1;
    }
    margin-bottom: 120%;
    @media (max-width: 768px) {
      margin-bottom: 150%;
    }
    @media (max-width: 376px) {
      margin-bottom: 170%;
    }
    @media (max-width: 333px) {
      margin-bottom: 200%;
    }
  }
`;

const ListItems = styled.li`
  padding: 0.2rem;
  border-bottom: 1px solid #324252;
  &:last-child {
    border-color: transparent;
    padding-bottom: 0px;
  }
`;

const AccordionMenu = ({ title, name, stack, s_Formik_Arr }) => {
  const [checkedArr, setCheckedArr] = React.useState([]);

  React.useEffect(() => {
    setCheckedArr(s_Formik_Arr);
  }, [s_Formik_Arr]);

  const accordion = (e) => {
    e.stopPropagation();
    if (e.target.parentElement.classList.contains('active')) {
      e.target.parentElement.classList.remove('active');
    } else {
      e.target.parentElement.classList.add('active');
    }
  };

  const handleToggle = (t_id) => (e) => {
    let mutated_Arr = [...checkedArr];
    if (e.target.checked) mutated_Arr.push(t_id);
    else mutated_Arr.splice(mutated_Arr.indexOf(t_id), 1);
    setCheckedArr(mutated_Arr);
  };

  return (
    <Menu>
      <List>
        <span onClick={accordion}>{title}</span>
        <Items>
          <FieldArray
            name={name}
            render={(arrayHelpers) =>
              stack &&
              stack.map((s, i) => (
                <ListItems key={i}>
                  <Checkbox
                    handleChecked={(e) => {
                      handleToggle(s._id);
                      if (e.target.checked) arrayHelpers.push(s._id);
                      else arrayHelpers.remove(s_Formik_Arr.indexOf(s._id));
                    }}
                    s_Id={s._id}
                    s_Name={s.name}
                    init_check={checkedArr.includes(s._id)}
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
