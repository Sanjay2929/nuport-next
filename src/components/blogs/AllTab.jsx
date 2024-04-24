"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { blogTabHeading } from "../common/Helper";
import LatestBlog from "./LatestBlog";
import Revolution from "./Revolution";

const AllTab = ({ blogList }) => {
  const router = useRouter();
  const param = useSearchParams();

  const [activeTab, setActiveTab] = useState("");
  const formatBlogDate = (dateString) => {
    const date = new Date(dateString);
    const options = { month: "short", day: "2-digit", year: "numeric" };
    return date.toLocaleDateString("en-US", options);
  };
  useEffect(() => {
    if (param.get("tab") === null) {
      setActiveTab("all");
    } else {
      // If tab query parameter is not present, set the default active tab to "All"
      setActiveTab(param.get("tab"));
    }
  }, [param]);
  const handleClick = (tab) => {
    const formattedTab = tab.toLowerCase().replace(/\s+/g, "-");
    // Construct the URL with the query parameter
    const urlWithQueryParam = `/blogs?tab=${encodeURIComponent(formattedTab)}`;

    // Redirect to the constructed URL
    router.push(urlWithQueryParam);
  };
  console.log(param.get("tab"), "hello");
  return (
    <div className="container 2xl:max-w-[1285px] px-5 2xl:px-0 mx-auto">
      <div className="flex items-center gap-10 py-5 overflow-scroll scrollbar_hidden">
        {blogTabHeading.map((tab, index) => {
          const formattedTab = tab.toLowerCase().replace(/\s+/g, "-");
          return (
            <button
              key={index}
              onClick={() => handleClick(tab)}
              className={`font-plus transition-all ease-in-out duration-300 font-medium text-base relative after:absolute after:h-[2px] after:bg-tealBlue after:start-0 hover:text-tealBlue after:bottom-[-20px] text-nowrap ${
                formattedTab == activeTab
                  ? "text-tealBlue  after:w-full"
                  : "text-offWhite"
              }`}
            >
              {tab}
            </button>
          );
        })}
      </div>
      <div className="w-[200vw] bg-darkGray h-[1px]  mb-7 translate-x-[-26%]"></div>

      <LatestBlog blogList={blogList} />
      <div className="flex flex-wrap items-start">
        {blogList.map((value, index) => (
          <div
            className={`lg:w-6/12 w-full sm:max-w-full max-w-[400px] sm:mx-0 mx-auto ${
              index % 2 === 0 ? "lg:pe-3" : "lg:ps-3"
            }`}
            key={index}
          >
            <Revolution
              date={formatBlogDate(value.created_at)} // Format the date here
              content={value.title}
              btn="Nuport"
              img={value.feature_image}
            />
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center text-offWhite font-semibold font-plus text-base mt-4 mb-[160px]">
        <div className="flex items-center justify-center text-offWhite font-semibold font-plus text-base mt-4">
          <button
            className={`bg-tealBlue border border-tealBlue transition-all ease-in-out duration-300 py-[15px] px-5 rounded-full text-center common_btn group`}
          >
            Show More
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllTab;
