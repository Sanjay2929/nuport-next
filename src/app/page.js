"use client";
import Hero from "@/components/common/Hero";
import Navbar from "@/components/common/Navbar/Navbar";
import BrandServe from "@/components/homepage/BrandServe";
import Ecommerce from "@/components/homepage/Ecommerce";
import OurProduct from "@/components/homepage/OurProduct";
import TrustedBy from "@/components/homepage/TrustedBy";
import SupplyChain from "@/components/homepage/SupplyChain";
import TestimonialsVideo from "@/components/homepage/TestimonialsVideo";
import AboutUs from "@/components/homepage/AboutUs";
import OurWork from "@/components/homepage/OurWork";
import SuccessFullStart from "@/components/homepage/SuccessFullStart";
import NetworkPart from "@/components/homepage/NetworkPart";
import FasterDecision from "@/components/homepage/FasterDecision";
import IncreaseEfficiency from "@/components/homepage/IncreaseEfficiency";
import Footer from "@/components/common/Footer";
import AchieveBusinessGoals from "@/components/homepage/AchieveBusinessGoals";
import BackToTop from "@/components/common/BackToTop";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Faq from "@/components/homepage/Faq";

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
