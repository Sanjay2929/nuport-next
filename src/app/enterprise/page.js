import {
  enterprisePartners,
  enterpriseSolutions,
  maximizingYourEfficiency,
} from "@/components/common/Helper";
import SuccessFullStart from "@/components/homepage/SuccessFullStart";
import AutomatedInventory from "@/components/product/AutomatedInventory";
import AutomativeResponsive from "@/components/product/AutomativeResponsive";
import DiscoverFaq from "@/components/product/DiscoverFaq";
import DiscoverSolutions from "@/components/product/DiscoverSolutions";
import ProductHero from "@/components/product/ProductHero";
import TrustedByKnown from "@/components/product/TrustedByKnown";
import WorkProcess from "@/components/product/WorkProcess";

const page = () => {
  return (
    <>
      <ProductHero
        heading={
          <>
            <span className=" text-offWhite">
              Increase visibility and throughput with
            </span>{" "}
            cloud supply chain
          </>
        }
        description="Nuport automates delivery planning, stock transfers, warehouse optimization, SKU tracing, geolocation-based orders, and fleet monitoring."
        topbtn="Elevate your supply chain experience"
      />
      <TrustedByKnown
        laptopimg="/assets/images/enterprise/mac_book.webp"
        trustedpartners={enterprisePartners}
      />
      <DiscoverSolutions
        heading={
          <>
            Empowering effortless
            <span className="text-garyMedium"> e-commerce growth </span>
          </>
        }
        solutionCards={enterpriseSolutions}
      />
      <div className=" lg:block hidden">
        {" "}
        <AutomatedInventory />
      </div>
      <div className=" lg:hidden bg-darkBlue">
        {" "}
        <AutomativeResponsive mapFunction={maximizingYourEfficiency} />
      </div>
      <WorkProcess />
      <DiscoverFaq />
      <SuccessFullStart />
    </>
  );
};

export default page;
