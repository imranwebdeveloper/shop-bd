import Header from "@/components/Header";
import HeroSection from "@/components/Hero";
import { config } from "@/config/env.config";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Home | ${config.logo}`,
};

const Home = async () => {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <HeroSection />
    </main>
  );
};

export default Home;
