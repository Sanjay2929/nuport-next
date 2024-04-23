import SimpleHero from "@/components/common/SimpleHero";
import BusinessSolution from "@/components/industry/BusinessSolution";
const page = () => {
  return (
    <>
      <SimpleHero
        topBtn="Your business solution"
        heading={
          <>
            Solutions
            <span className=" text-garyMedium"> by industry</span>
          </>
        }
        description="If your organization deal with distribution and supply chain management, we are here for you."
      />
      <BusinessSolution />
    </>
  );
};

export default page;
