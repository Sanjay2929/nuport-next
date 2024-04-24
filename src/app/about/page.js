import ByNumber from "@/components/about-page/ByNumber";
import Hero from "@/components/about-page/Hero";
import MakeSomething from "@/components/about-page/MakeSomething";
import Trusted from "@/components/about-page/Trusted";
import SuccessFullStart from "@/components/home-page/SuccessFullStart";

export default function Home() {
  return (
    <>
      {/* Hero section */}
      <div className=" bg-darkBlue">
        <Hero />
        <MakeSomething />
      </div>

      {/* Trusted section */}
      <Trusted />

      {/* ByNumber section */}
      <ByNumber />

      {/* SuccessFullStart section */}
      <SuccessFullStart description="Book a FREE call with us about your business operation or supply chain issues. Our expert team will help dissect the issue, optimize processes and set your organization up on a growth journey." />
    </>
  );
}
