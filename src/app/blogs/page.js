"use client"
import AllTab from "@/components/blogs/AllTab";
import ProductHero from "@/components/product/ProductHero";
import React, { useEffect, useState } from "react";
import { api } from "../../../utils/fetch";

const Page = () => {
  const [blogList, setBlogList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.posts.browse({
          page: 2,
          limit: 5,
          order: ["published_at DESC"],
        });
        setBlogList(response);
      } catch (error) {
        console.error("Error fetching blog posts:", error);
      }
    };

    fetchData();
  }, []);

  console.log(blogList ,"blogList"); // Log blogList for debugging

  return (
    <div className="bg-darkBlue overflow-hidden">
      <ProductHero
        type="search"
        heading={
          <>
            <span className="text-offWhite">Blogs</span>
          </>
        }
        topbtn="Know us better"
      />
      <AllTab />
    </div>
  );
};

export default Page;
