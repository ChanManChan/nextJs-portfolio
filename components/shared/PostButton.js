import Button from './ShimmerButton';

const handleEvent = (children) => (e) => {
  const footer = document.querySelector('.slide-footer');
  if (footer.classList.contains('active')) {
    footer.classList.remove('active');
    e.target.innerText = children;
  } else {
    footer.classList.add('active');
    e.target.innerText = 'Close X';
  }
};

const PostButton = ({ children, ...props }) => (
  <Button {...props} onClick={handleEvent(children)}>
    {children}
  </Button>
);
export default PostButton;
