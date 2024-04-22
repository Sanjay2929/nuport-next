import DiscoverSolutions from "@/components/product/DiscoverSolutions";
import AutomatedInventory from "@/components/product/AutomatedInventory";
import DiscoverFaq from "@/components/product/DiscoverFaq";
import SuccessFullStart from "@/components/homepage/SuccessFullStart";
import ProductHero from "@/components/product/ProductHero";
import TrustedByKnown from "@/components/product/TrustedByKnown";
import { dynamicOrder, empowerings, maximizingYourEfficiency, trustedKnownPartners } from "@/components/common/Helper";
import AutomativeResponsive from "@/components/product/AutomativeResponsive";
import Dynamic from "@/components/e-commerce/Dynamic";
import DynamicResponsive from "@/components/e-commerce/DynamicResponsive";

export default function Home() {
  return (
    <>
      <ProductHero
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
      <TrustedByKnown
        laptopimg="/assets/images/productpage/trusted-by-known/mac-book-pro.webp"
        trustedpartners={trustedKnownPartners}
      />
      <DiscoverSolutions
        heading={
          <>
            Empowering effortless
            <span className="text-garyMedium"> e-commerce growth </span>
          </>
        }
        solutionCards={empowerings}
      />
      <div className=" lg:block hidden">
        {" "}
        <Dynamic />
      </div>
      <div className=" lg:hidden bg-darkBlue">
        {" "}
        <DynamicResponsive mapFunction={dynamicOrder} />
      </div>
      <DiscoverFaq />
      <SuccessFullStart />
    </>
  );
}
