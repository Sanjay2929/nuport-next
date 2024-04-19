import Hero from "@/components/common/Hero";
import Navbar from "@/components/common/Navbar/Navbar";
import TrustedBy from "@/components/homepage/TrustedBy";
import DiscoverSolutions from "@/components/product/DiscoverSolutions";
import AutomatedInventory from "@/components/product/AutomatedInventory";
import DiscoverFaq from "@/components/product/DiscoverFaq";
import SuccessFullStart from "@/components/homepage/SuccessFullStart";
import Footer from "@/components/common/Footer";
import BackToTop from "@/components/common/BackToTop";
import ProductHero from "@/components/product/ProductHero";
import TrustedByKnown from "@/components/product/TrustedByKnown";
import { empowerings, trustedKnownPartners } from "@/components/common/Helper";

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
      <AutomatedInventory />
      <DiscoverFaq />
      <SuccessFullStart />
    </>
  );
}
