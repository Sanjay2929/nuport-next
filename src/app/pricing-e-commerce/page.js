import Hero from "@/components/common/Hero";
import ChooseRightPlan from "@/components/pricing-e-commerce/ChooseRightPlan";
import React from "react";

const page = () => {
  return (
    <div>
      {" "}
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
      <ChooseRightPlan />
    </div>
  );
};

export default page;
