import dynamic from 'next/dynamic';
import SeoHead from "../components/SeoHead";

const ReactMarkdown = dynamic(() => import('react-markdown'), { ssr: false });

const PrivacyPage = () => {

  return (
    <>
      <SeoHead title='Audiolit Landing Page' />
      <iframe src="https://jack2684.github.io/alpinely.ai/privacy.html" title="Audiolit" width="100%" height="2048px" />
    </>
  );
};

export default PrivacyPage;