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
      <div className="bg-darkBlue pt-[73px] pb-[143px]">
        <Introduction />
        <MoreCase />
      </div>
    </>
  );
};

export default page;
