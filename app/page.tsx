import BrandList from "@/components/BrandList";
import FeatureProducts from "@/components/FeatureProducts";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/Hero";
import Subscribe from "@/components/Subscribe";
import { config } from "@/config/env.config";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Home | ${config.logo}`,
};

const Home = async () => {
  return (
    <main>
      <div className="min-h-screen flex flex-col">
        <Header />
        <HeroSection />
      </div>
      <BrandList />
      <FeatureProducts />
      <Subscribe />
      <Footer />
    </main>
  );
};

export default Home;
