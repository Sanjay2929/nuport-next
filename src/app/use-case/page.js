import SimpleHero from "@/components/common/SimpleHero";
import OurSolutions from "@/components/use-case/OurSolutions";
import UseCaseSolution from "@/components/use-case/UseCaseSolution";
import React from "react";

const Page = () => {
  return (
    <>
      <SimpleHero
        topBtn="Your business solution"
        heading={
          <>
            Solutions
            <span className=" text-garyMedium"> by use case</span>
          </>
        }
        description="However you want to use Nuport for your manufacturing, distribution or warehousing business, we are here for you."
      />
      <UseCaseSolution />
      <OurSolutions />
    </>
  );
};

export default Page;
