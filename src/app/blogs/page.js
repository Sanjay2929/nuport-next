import AllTab from "@/components/blogs/AllTab";
import Hero from "@/components/common/Hero";
import React from "react";

const page = () => {
  return (
    <div className="bg-darkBlue overflow-hidden">
      <Hero
        type="search"
        heading={
          <>
            <span className=" text-offWhite">Blogs</span>
          </>
        }
        topbtn="Know us better"
      />
      <AllTab />
    </div>
  );
};

export default page;
