import Navbar from "@/components/common/Navbar/Navbar";
import SuccessFullStart from "@/components/home-page/SuccessFullStart";
import Footer from "@/components/common/Footer";
import BackToTop from "@/components/common/BackToTop";
import Hero from "@/components/about-page/Hero";
import MakeSomething from "@/components/about-page/MakeSomething";
import Trusted from "@/components/about-page/Trusted";
import ByNumber from "@/components/about-page/ByNumber";

export default function Home() {
  return (
    <>
      <div className=" bg-darkBlue">
        <Hero />
        <MakeSomething />
      </div>
      <Trusted />
      <ByNumber />
      <SuccessFullStart description="Book a FREE call with us about your business operation or supply chain issues. Our expert team will help dissect the issue, optimize processes and set your organization up on a growth journey." />
    </>
  );
}
