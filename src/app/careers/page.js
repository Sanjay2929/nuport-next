import CareerWithUs from "@/components/careers/CareerWithUs";
import OpenJobs from "@/components/careers/OpenJobs";
import OurTeam from "@/components/careers/OurTeam";
import React from "react";
import SimpleHero from "@/components/common/SimpleHero";

const page = () => {
  return (
    <>
      {/* Hero section */}
      <SimpleHero
        topBtn="Build with us"
        heading="Careers"
        description="Become a critical part of our team."
      />
      
      {/* CareerWithUs component */}
      <CareerWithUs />
      
      {/* OurTeam component */}
      <OurTeam />
      
      {/* OpenJobs component */}
      <OpenJobs />
    </>
  );
};

export default page;
