import {
  enterprisePartners,
  enterpriseSolutions,
  maximizingYourEfficiency,
} from "@/components/common/Helper";
import SuccessFullStart from "@/components/home-page/SuccessFullStart";
import AutomatedInventory from "@/components/product/AutomatedInventory";
import AutomativeResponsive from "@/components/product/AutomativeResponsive";
import DiscoverFaq from "@/components/product/DiscoverFaq";
import DiscoverSolutions from "@/components/product/DiscoverSolutions";
import Hero from "@/components/common/Hero";
import TrustedByKnown from "@/components/product/TrustedByKnown";
import WorkProcess from "@/components/product/WorkProcess";

const page = () => {
  return (
    <>
      {/* Hero section */}
      <Hero
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
      
      {/* TrustedByKnown section */}
      <TrustedByKnown
        laptopimg="/assets/images/enterprise/mac-book.webp"
        trustedpartners={enterprisePartners}
      />
      
      {/* DiscoverSolutions section */}
      <DiscoverSolutions
        heading={
          <>
            Empowering effortless
            <span className="text-garyMedium"> e-commerce growth </span>
          </>
        }
        solutionCards={enterpriseSolutions}
      />
      
      {/* AutomatedInventory section (visible on large screens) */}
      <div className=" lg:block hidden">
        <AutomatedInventory />
      </div>
      
      {/* AutomativeResponsive section (visible on small screens) */}
      <div className=" lg:hidden bg-darkBlue">
        <AutomativeResponsive mapFunction={maximizingYourEfficiency} />
      </div>
      
      {/* WorkProcess section */}
      <WorkProcess />
      
      {/* DiscoverFaq section */}
      <DiscoverFaq />
      
      {/* SuccessFullStart section */}
      <SuccessFullStart />
    </>
  );
};

export default page;
