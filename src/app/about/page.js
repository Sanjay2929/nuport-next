import Navbar from "@/components/common/Navbar/Navbar";
import SuccessFullStart from "@/components/homepage/SuccessFullStart";
import Footer from "@/components/common/Footer";
import BackToTop from "@/components/common/BackToTop";
import Hero from "@/components/aboutpage/Hero";
import MakeSomething from "@/components/aboutpage/MakeSomething";
import Trusted from "@/components/aboutpage/Trusted";
import ByNumber from "@/components/aboutpage/ByNumber";

export default function Home() {
  return (
    <>
      <div className=" bg-darkBlue">
        <Navbar />
        <Hero />
        <MakeSomething />
      </div>
      <Trusted />
      <ByNumber />
      <SuccessFullStart description="Book a FREE call with us about your business operation or supply chain issues. Our expert team will help dissect the issue, optimize processes and set your organization up on a growth journey." />
      <Footer />
      <BackToTop />
    </>
  );
}
