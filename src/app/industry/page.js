import SimpleHero from "@/components/common/SimpleHero";
import BusinessSolution from "@/components/industry/BusinessSolution";

const page = () => {
  return (
    <>
      {/* SimpleHero section */}
      <SimpleHero
        topBtn="Your business solution"
        heading={
          <>
            Solutions
            <span className=" text-garyMedium"> by industry</span>
          </>
        }
        description="If your organization deals with distribution and supply chain management, we are here for you."
      />
      
      {/* BusinessSolution section */}
      <BusinessSolution />
    </>
  );
};

export default page;
