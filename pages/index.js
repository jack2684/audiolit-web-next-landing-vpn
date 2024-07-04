import Feature from "../components/Feature";
import Hero from "../components/Hero";
import Layout from "../components/Layout/Layout";
import SeoHead from "../components/SeoHead";
import Pricing from "../components/Pricing";

export default function Home() {
  return (
    <>
      <SeoHead title='Audiolit Landing Page' />
      <Layout>
        <Hero />
        <Feature />
        <Pricing />
      </Layout>
    </>
  );
}
