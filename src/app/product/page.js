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

export default function Home() {
  return (
    <>
      <Navbar />
      <ProductHero />
      <TrustedByKnown />
      <DiscoverSolutions />
      <AutomatedInventory />
      <DiscoverFaq />
      <SuccessFullStart />
      <Footer />
      <BackToTop />
    </>
  );
}
