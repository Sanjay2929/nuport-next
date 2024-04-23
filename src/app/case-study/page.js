import CareerWithUs from "@/components/careers/CareerWithUs";
import OpenJobs from "@/components/careers/OpenJobs";
import Hero from "@/components/case-study-page/Hero";
import Introduction from "@/components/case-study-page/Introduction";
import React from "react";

const page = () => {
  return (
    <>
      <Hero />
      <div className="bg-darkBlue pt-[73px] pb-[143px]">
        <Introduction />
      </div>
    </>
  );
};

export default page;
