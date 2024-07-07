import dynamic from 'next/dynamic';
import SeoHead from "../components/SeoHead";

const ReactMarkdown = dynamic(() => import('react-markdown'), { ssr: false });

const ConnectPage = () => {

  return (
    <>
      <SeoHead title='Audiolit Landing Page' />
      <iframe src="https://jack2684.github.io/alpinely.ai/" title="Audiolit" width="100%" height="100%" />
    </>
  );
};

export default ConnectPage;