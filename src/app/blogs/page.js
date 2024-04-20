import AllTab from "@/components/blogs/AllTab";
import Hero from "@/components/blogs/Hero";
import React from "react";

const page = () => {
  return (
    <div className="bg-darkBlue overflow-hidden">
      <Hero />
      <AllTab />
    </div>
  );
};

export default page;
