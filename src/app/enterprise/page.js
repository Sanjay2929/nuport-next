import { trustedKnownPartners } from "@/components/common/Helper";
import SuccessFullStart from "@/components/homepage/SuccessFullStart";
import DiscoverFaq from "@/components/product/DiscoverFaq";
import ProductHero from "@/components/product/ProductHero";
import TrustedByKnown from "@/components/product/TrustedByKnown";
import React from "react";

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
        laptopimg="/assets/images/productpage/trusted-by-known/mac-book-pro.webp"
        trustedpartners={trustedKnownPartners}
      />
      <DiscoverFaq />
      <SuccessFullStart />
    </>
  );
};

export default page;
