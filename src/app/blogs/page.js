import AllTab from "@/components/blogs/AllTab";
import ProductHero from "@/components/product/ProductHero";
import React from "react";

const page = () => {
  return (
    <div className="bg-darkBlue overflow-hidden">
      <ProductHero
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
