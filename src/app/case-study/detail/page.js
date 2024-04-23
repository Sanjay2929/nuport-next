import Hero from "@/components/case-study-page/detail/Hero";
import Introduction from "@/components/case-study-page/detail/Introduction";
import Profile from "@/components/case-study-page/detail/Profile";
import React from "react";

const page = () => {
  return (
    <>
      <Hero />
      <Profile />
      <div className="bg-darkBlue pt-[73px] pb-[143px]">
        <Introduction />
      </div>
    </>
  );
};

export default page;
