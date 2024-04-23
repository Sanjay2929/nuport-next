import Hero from "@/components/case-study-page/Hero";
import Introduction from "@/components/case-study-page/Introduction";
import Profile from "@/components/case-study-page/Profile";
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
