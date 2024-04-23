"use client";
import AllTab from "@/components/blogs/AllTab";
import React, { Suspense, useEffect, useState } from "react";
import { api } from "../../../utils/fetch";
import Hero from "@/components/common/Hero";

const Page = () => {
  const [blogList, setBlogList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.posts.browse({
          page: 1,
          limit: 12,
          order: ["published_at DESC"],
        });
        setBlogList(response);
      } catch (error) {
        console.error("Error fetching blog posts:", error);
      }
    };

    fetchData();
  }, []);

  console.log(blogList, "blogList"); // Log blogList for debugging

  return (
    <div className="bg-darkBlue overflow-hidden">
      <Hero
        type="search"
        heading={
          <>
            <span className="text-offWhite">Blogs</span>
          </>
        }
        topbtn="Know us better"
      />
      <Suspense fallback={<div>Loading...</div>}>
        <AllTab blogList={blogList} />
      </Suspense>
    </div>
  );
};

export default Page;
