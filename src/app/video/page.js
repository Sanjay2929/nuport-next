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
import Video from "@/components/video-page/Video";

const page = () => {
  return (
    <>
      <div className="bg-darkBlue">
        <ProductHero
          heading={
            <>
              <span className=" text-offWhite">Nuport </span> videos
            </>
          }
          description="Explore our library of informative videos showcasing e-commerce and enterprise solutions. Get insights, and success stories in action."
          topbtn="Get to know us through video resources"
        />
        <Video />
      </div>
    </>
  );
};

export default page;
