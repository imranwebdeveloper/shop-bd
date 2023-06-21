"use Client";

import BrandList from "@/components/BrandList";
import FeatureProducts from "@/components/FeatureProducts";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/Hero";
import Subscribe from "@/components/Subscribe";

const Home = async () => {
  return (
    <>
      <div className="min-h-screen flex  flex-col">
        <Header />
        <HeroSection />
      </div>
      <main>
        <BrandList />
        <FeatureProducts />
        <Subscribe />
      </main>
      <Footer />
    </>
  );
};

export default Home;
