import CareerWithUs from "@/components/careers/CareerWithUs";
import Hero from "@/components/careers/Hero";
import OpenJobs from "@/components/careers/OpenJobs";
import OurTeam from "@/components/careers/OurTeam";
import React from "react";

const page = () => {
  return (
    <>
      <Hero />
      <CareerWithUs />
      <OurTeam />
      <OpenJobs />
    </>
  );
};

export default page;
