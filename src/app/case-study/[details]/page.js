import Hero from "@/components/case-study-page/detail/Hero";
import Introduction from "@/components/case-study-page/detail/Introduction";
import MoreCase from "@/components/case-study-page/detail/MoreCase";
import Profile from "@/components/case-study-page/detail/Profile";
import { casePartner } from "@/components/common/Helper";
import SuccessFullStart from "@/components/home-page/SuccessFullStart";
import TrustedByKnown from "@/components/product/TrustedByKnown";
import React from "react";

const page = () => {
  return (
    <>
      <Hero />
      <Profile />
      <div className="bg-darkBlue pt-[73px] pb-[143px]">
        <Introduction />
        <MoreCase />
      </div>
      <TrustedByKnown trustedpartners={casePartner} />
      <SuccessFullStart />
    </>
  );
};

export default page;
