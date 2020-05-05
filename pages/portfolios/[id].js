import { useRouter } from 'next/router';

const PortfolioDetail = () => {
  const { id } = useRouter().query;
  return <h1>I'm detail page with ID: {id}</h1>;
};
export default PortfolioDetail;
