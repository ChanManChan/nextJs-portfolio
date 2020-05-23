import withParent from '@/hoc/withParent';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
import kv_pairs from '@/variables/messages';

const Home = () => {
  const disposeId = React.useRef(null);
  const router = useRouter();
  const { message } = router.query;

  React.useEffect(() => {
    disposeId.current = setTimeout(() => {
      router.replace('/', '/', { shallow: true });
    }, 2000);
    return () => {
      clearTimeout(disposeId.current);
    };
  }, [message]);

  if (message)
    toast[kv_pairs[message].status](kv_pairs[message].value, {
      position: toast.POSITION.BOTTOM_LEFT,
    });

  return <div>Testing</div>;
};

export default withParent(Home, 'Home');
