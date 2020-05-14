import { useRouter } from 'next/router';
import { useEffect } from 'react';

const Redirect = (props) => {
  const router = useRouter();
  useEffect(() => {
    router.push({ pathname: props.to });
  }, []);
  return null;
};
export default Redirect;
