import Button from './ShimmerButton';

//! ALREADY ACTIVATED FOOTER
const formerly_active_and_keepAlive = ({
  e,
  s_state,
  post_data,
  footer,
  children,
}) => {
  const nl_list = document.querySelectorAll('.nlead--btn');
  const lead_btn = document.querySelector('.post--btn');
  if (e.target.innerText !== 'Close X') {
    s_state && s_state(post_data);
    e.target.innerText = 'Close X';
    for (let i = 0; i < nl_list.length; i++)
      if (nl_list[i] != e.target) nl_list[i].innerText = 'Reply';
    if (e.target != lead_btn) lead_btn.innerText = 'Add a Post';
  } else {
    e.target.innerText = children;
    footer.classList.remove('active');
    s_state && s_state({});
  }
};

//! NORMAL ACTIVATION OF FOOTER
const elementary_active = ({ footer, e, s_state, post_data }) => {
  footer.classList.add('active');
  e.target.innerText = 'Close X';
  s_state && s_state(post_data);
};

//! SWITCH
const handleEvent = (children, s_state, post_data) => (e) => {
  const footer = document.querySelector('.slide-footer');
  const parameters = {
    e,
    s_state,
    post_data,
    footer,
    children,
  };
  if (e.target.classList.contains('reply--btn')) {
    if (footer.classList.contains('active')) {
      formerly_active_and_keepAlive(parameters);
    } else {
      elementary_active(parameters);
    }
  } else if (footer.classList.contains('active')) {
    footer.classList.remove('active');
    e.target.innerText = children;
    s_state && s_state({});
  } else {
    elementary_active(parameters);
  }
};

const PostButton = ({
  s_state,
  nl = false,
  ext_class = '',
  children,
  post_data,
  ...props
}) => (
  <Button
    className={nl ? `${ext_class}` : `post--btn ${ext_class}`}
    {...props}
    onClick={handleEvent(children, s_state, post_data)}
  >
    {children}
  </Button>
);
export default PostButton;
