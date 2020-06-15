import styled from 'styled-components';
import { Bg_right, Bg_top, Bg_inner, Bg } from '../styles/Cuboid';
import { useField } from 'formik';
import { toast } from 'react-toastify';

const Input = styled.input.attrs((props) => ({
  placeholder: props.helperText ? props.helperText : props.placeholder,
  disabled: props.loading === 'true' ? true : false,
}))`
  width: 100%;
  padding: 1.4rem 1.6rem;
  border: 0;
  background: transparent;
  color: #fff;
  font-family: 'Open Sans', sans-serif;
  letter-spacing: 0.05rem;
  font-size: 1.6rem;
  &:hover,
  &:focus {
    outline: none;
    border: 0;
  }
  position: relative;
  /*"z-index" <- So that the input comes up top */
  z-index: 2;
  &:focus ~ ${Bg_right} > ${Bg_inner}, &:focus ~ ${Bg_top} > ${Bg_inner} {
    /* Cover the top and right face of the cuboid when focused */
    /* Increase the top thickness of "Bg_inner" to cover the face*/
    top: 100%;
    background: ${(p) => p.theme.bg_gradient};
  }
  &::placeholder {
    color: ${(p) => (p.helperText ? p.theme.error_text : '#fff')};
  }
`;

const Control = styled.div`
  /*margin: top | right & left | bottom  */
  margin: 0 0 3rem;
  position: relative;
  > ${Bg_top},> ${Bg_right},> ${Bg} {
    /* Gradient outline color for the input boxes */
    background: ${(p) =>
      p.helperText ? p.theme.error_gradient : p.theme.bg_gradient};
    /* Light gradient glow transition when hovering over */
    transition: background 0.2s ease-in-out;
  }
  > ${Bg_top},> ${Bg_right} {
    > ${Bg_inner} {
      /* top: 100%; smooth transition (top and right side of the Cuboid) */
      transition: all 0.2s ease-in-out;
    }
  }
  &:hover,
  &:focus {
    > ${Bg_top},> ${Bg_right},> ${Bg} {
      /* Light gradient glow */
      background: ${(p) =>
        p.theme.id === 'light'
          ? 'rgba(0, 188, 212, 1)'
          : 'rgba(255, 193, 7, 1)'};
    }
  }
`;

const Span = styled.span`
  position: absolute;
  z-index: 2;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  i {
    font-size: 2.5rem;
    color: #fff;
  }
`;

const InputField = ({
  password = '',
  loading,
  type,
  placeholder,
  ...props
}) => {
  const [field, meta] = useField(props);
  const errorText = meta.error && meta.touched ? meta.error : '';

  if (errorText.includes('Password must Contain at least 8'))
    toast.warning(errorText, {
      position: toast.POSITION.BOTTOM_LEFT,
      toastId: 13,
      autoClose: false,
    });
  else if (errorText.includes('Username must be at least 3'))
    toast.warning(errorText, {
      position: toast.POSITION.BOTTOM_LEFT,
      toastId: 11,
      autoClose: false,
    });

  const handleToggle = (password) => {
    const toggleIcon = document.querySelector(`.${password}`);
    const passwordInput = document.querySelector(`#${password}`);
    if (toggleIcon.classList.contains('fa-eye')) {
      // Reveal the password
      passwordInput.type = 'text';
      toggleIcon.className = `fas fa-eye-slash ${
        password === 'regular_password' ? password : 'confirm_password'
      }`;
    } else {
      // Hide the password
      passwordInput.type = 'password';
      toggleIcon.className = `fas fa-eye ${
        password === 'regular_password' ? password : 'confirm_password'
      }`;
    }
  };

  return (
    <Control helperText={errorText}>
      <Input
        {...field}
        id={password}
        placeholder={placeholder}
        type={type}
        loading={loading}
        helperText={errorText}
        password={password}
      />
      {password && (
        <Span onClick={() => handleToggle(password)}>
          <i className={`fas fa-eye ${password}`} />
        </Span>
      )}
      <Bg_top>
        <Bg_inner />
      </Bg_top>
      <Bg_right>
        <Bg_inner />
      </Bg_right>
      <Bg>
        <Bg_inner />
      </Bg>
    </Control>
  );
};
export default InputField;
