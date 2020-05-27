import Button from './ShimmerButton';

const handleEvent = (children) => (e) => {
  const footer = document.querySelector('.slide-footer');
  if (e.target.classList.contains('nlead--btn')) {
    const nl_list = document.querySelectorAll('.nlead--btn');
    const lead_btn = document.querySelector('.post--btn');
    for (let i = 0; i < nl_list.length; i++) {
      if (nl_list[i].innerText === 'Close X' && nl_list[i] != e.target)
        nl_list[i].innerText = 'Reply';
    }
    if (
      e.target.innerText === 'Close X' &&
      footer.classList.contains('active')
    ) {
      footer.classList.remove('active');
      e.target.innerText = 'Reply';
    } else if (
      e.target.innerText === 'Reply' &&
      lead_btn.innerText === 'Close X' &&
      footer.classList.contains('active')
    ) {
      e.target.innerText = 'Close X';
      lead_btn.innerText = 'Add a Post';
    } else {
      footer.classList.add('active');
      e.target.innerText = 'Close X';
    }
  } else if (footer.classList.contains('active')) {
    footer.classList.remove('active');
    e.target.innerText = children;
  } else {
    footer.classList.add('active');
    e.target.innerText = 'Close X';
  }
};

const PostButton = ({ nl = false, ext_class = '', children, ...props }) => (
  <Button
    className={nl ? `${ext_class}` : `post--btn ${ext_class}`}
    {...props}
    onClick={handleEvent(children)}
  >
    {children}
  </Button>
);
export default PostButton;
