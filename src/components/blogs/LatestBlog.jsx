import Image from "next/image";
import Link from "next/link";
import React from "react";
import { WhiteArrow } from "../common/Icons";

// Assuming your array of objects is named 'blogList'
// and it contains the data you provided earlier
const formatBlogDate = (dateString) => {
  const date = new Date(dateString);
  const options = { month: "short", day: "2-digit", year: "numeric" };
  return date.toLocaleDateString("en-US", options);
};
const LatestBlog = ({ blogList }) => {
  if (!blogList || blogList.length === 0) {
    return null; // Render nothing if there are no blog posts
  }

  // Find the object with the latest 'created_at' date
  const latestPost = blogList.reduce((latest, post) => {
    return post.created_at > latest.created_at ? post : latest;
  }, blogList[0]);

  // Check if latestPost is defined
  if (!latestPost) {
    return null; // Render nothing if latestPost is undefined
  }

  // Extract data from the latest post object
  const { title, created_at, feature_image, url } = latestPost;

  console.log(latestPost, "latestPost");
  return (
    <div className="mb-6">
      <div className="w-full rounded-xl bg-tealBlue flex flex-wrap overflow-hidden">
        <div className="lg:w-7/12 w-full md:p-10 p-5">
          <div className="flex items-center justify-between mb-8">
            <span className="bg-transparent border-offWhite border rounded-lg font-plus text-offWhite md:text-base text-sm font-semibold py-2 px-[26px]">
              Nuport
            </span>
            <p className="font-plus text-offWhite md:text-base text-sm font-semibold">
              {formatBlogDate(created_at)}
            </p>
          </div>
          <p className="lg:text-[40px] md:text-[35px] text-[28px] text-offWhite font-bold tracking-[-2px] max-w-[535px] md:mb-[66px] mb-8">
            {title}
          </p>
          <div className="flex items-center justify-start">
            <Link
              href={url}
              className="font-plus text-offWhite md:text-base text-sm font-semibold flex items-center gap-1 transition-all ease-in-out duration-300 hover:gap-2"
            >
              Read more <WhiteArrow />
            </Link>
          </div>
        </div>
        <div className="lg:w-5/12 w-full">
          <Image
            src={feature_image}
            className="lg:rounded-e-xl rounded-b-xl lg:rounded-b-none lg:max-w-[559px] w-full h-full lg:max-h-[100%] max-h-[435px] object-cover"
            width={559}
            height={429}
            alt="Latest Blog Image"
          />
        </div>
      </div>
    </div>
  );
};

export default LatestBlog;
