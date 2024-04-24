import DiscoverSolutions from "@/components/product/DiscoverSolutions";
import DiscoverFaq from "@/components/product/DiscoverFaq";
import SuccessFullStart from "@/components/home-page/SuccessFullStart";
import Hero from "@/components/common/Hero";
import TrustedByKnown from "@/components/product/TrustedByKnown";
import {
  dynamicOrder,
  empowerings,
  trustedKnownPartners,
} from "@/components/common/Helper";
import Dynamic from "@/components/e-commerce/Dynamic";
import DynamicResponsive from "@/components/e-commerce/DynamicResponsive";

export default function Home() {
  return (
    <>
      {/* Hero section */}
      <Hero
        heading={
          <>
            Automate & scale{" "}
            <span className=" text-offWhite">
              your entire e-commerce business
            </span>
          </>
        }
        description="A platform that connects to every e-commerce entity, automates repetitive tasks, increases visibility, and speeds up transactions."
        topbtn="Create happy customers"
      />
      
      {/* TrustedByKnown section */}
      <TrustedByKnown
        laptopimg="/assets/images/product-page/trusted-by-known/mac-book-pro.webp"
        trustedpartners={trustedKnownPartners}
      />
      
      {/* DiscoverSolutions section */}
      <DiscoverSolutions
        heading={
          <>
            Empowering effortless
            <span className="text-garyMedium"> e-commerce growth </span>
          </>
        }
        solutionCards={empowerings}
      />
      
      {/* Dynamic section (visible on large screens) */}
      <div className=" lg:block hidden">
        <Dynamic />
      </div>
      
      {/* DynamicResponsive section (visible on small screens) */}
      <div className=" lg:hidden bg-darkBlue">
        <DynamicResponsive mapFunction={dynamicOrder} />
      </div>
      
      {/* DiscoverFaq section */}
      <DiscoverFaq />
      
      {/* SuccessFullStart section */}
      <SuccessFullStart />
    </>
  );
}
