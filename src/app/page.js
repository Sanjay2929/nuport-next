"use client";
import Hero from "@/components/home-page/Hero";
import BrandServe from "@/components/home-page/BrandServe";
import Ecommerce from "@/components/home-page/Ecommerce";
import OurProduct from "@/components/home-page/OurProduct";
import TrustedBy from "@/components/home-page/TrustedBy";
import SupplyChain from "@/components/home-page/SupplyChain";
import TestimonialsVideo from "@/components/home-page/TestimonialsVideo";
import AboutUs from "@/components/home-page/AboutUs";
import OurWork from "@/components/home-page/OurWork";
import SuccessFullStart from "@/components/home-page/SuccessFullStart";
import NetworkPart from "@/components/home-page/NetworkPart";
import FasterDecision from "@/components/home-page/FasterDecision";
import IncreaseEfficiency from "@/components/home-page/IncreaseEfficiency";
import AchieveBusinessGoals from "@/components/home-page/AchieveBusinessGoals";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Faq from "@/components/home-page/Faq";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 600,
      once: true,
    });
  }, []);
  return (
    <div className="overflow-x-clip">
      <Hero />
      <TrustedBy />
      <OurProduct />
      <AboutUs />
      <OurWork />
      <Ecommerce />
      <BrandServe />
      <TestimonialsVideo />
      <SupplyChain />
      <FasterDecision />
      <IncreaseEfficiency />
      <NetworkPart />
      <AchieveBusinessGoals />
      <Faq />
      <SuccessFullStart
        description=" Reach out to us about your business operation or supply chain
                issues. Our expert team will help you overcome your challenges
                and guide your online business toward success."
      />
    </div>
  );
}
