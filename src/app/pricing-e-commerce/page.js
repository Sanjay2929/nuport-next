import Hero from "@/components/common/Hero";
import SuccessFullStart from "@/components/home-page/SuccessFullStart";
import Cards from "@/components/pricing-e-commerce/Cards";
import ChooseRightPlan from "@/components/pricing-e-commerce/ChooseRightPlan";

const page = () => {
  return (
    <div>
      <Hero
        heading={
          <span className=" min-[1380px]:text-nowrap">
            <span className=" text-offWhite"> E-Commerce Suite </span>Pricing
          </span>
        }
        description="Worried about choosing the right package? Choose from multiple pricing options and get your business off the bench with the pricing plan."
        topbtn="Choose your plan"
        type="toggle"
        toggleTitle="Yearly"
      />
      <Cards />
      <ChooseRightPlan />
      <SuccessFullStart />
    </div>
  );
};

export default page;
