import Button from './ShimmerButton';

const handleEvent = (children) => (e) => {
  const footer = document.querySelector('.slide-footer');
  if (footer.classList.contains('active')) {
    footer.classList.remove('active');
    e.target.innerHTML = children;
  } else {
    footer.classList.add('active');
    e.target.innerHTML = 'Close <i class="fas fa-window-close" />';
  }
};

const PostButton = ({ children, ...props }) => (
  <Button {...props} onClick={handleEvent(children)}>
    {children}
  </Button>
);
export default PostButton;
