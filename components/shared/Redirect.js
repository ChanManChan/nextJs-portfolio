import { useRouter } from 'next/router';
import { useEffect } from 'react';

const Redirect = ({ to, query }) => {
  const router = useRouter();
  useEffect(() => {
    router.push({ pathname: to, query });
  }, []);
  return null;
};
export default Redirect;
