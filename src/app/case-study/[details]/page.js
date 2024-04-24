import Hero from "@/components/case-study-page/detail/Hero";
import Introduction from "@/components/case-study-page/detail/Introduction";
import MoreCase from "@/components/case-study-page/detail/MoreCase";
import Profile from "@/components/case-study-page/detail/Profile";
import React from "react";

const page = () => {
  return (
    <>
      {/* Hero section */}
      <Hero />

      {/* Profile section */}
      <Profile />

      {/* Introduction section */}
      <div className="bg-darkBlue pt-[73px] md:pb-[143px] pb-20">
        <Introduction />
        <MoreCase />
      </div>
    </>
  );
};

export default page;
