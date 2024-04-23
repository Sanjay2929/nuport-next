import Image from "next/image";
import Link from "next/link";
import React from "react";
import { WhiteArrow } from "../common/Icons";

const LatestBlog = () => {
  return (
    <div className="mb-6">
      <div className=" w-full rounded-xl bg-tealBlue flex flex-wrap overflow-hidden">
        <div className=" lg:w-7/12 w-full md:p-10 p-5">
          <div className=" flex items-center justify-between mb-8">
            <span className=" bg-transparent border-offWhite border rounded-lg font-plus text-offWhite md:text-base text-sm font-semibold py-2 px-[26px]">
              Nuport
            </span>
            <p className="font-plus text-offWhite md:text-base text-sm font-semibold">
              September 22, 2023
            </p>
          </div>
          <p className="lg:text-[40px] md:text-[35px] text-[29px] text-offWhite font-bold tracking-[-2px] max-w-[535px] md:mb-[66px] mb-8">
            The Dhaka- based Saas Startup Trading the $8 billion e-commerce
            industry in Bangladesh
          </p>
          <div className=" flex items-center justify-start">
            <Link
              href="/"
              className="font-plus text-offWhite md:text-base text-sm font-semibold flex items-center gap-1 transition-all ease-in-out duration-300 hover:gap-2"
            >
              Read more <WhiteArrow />
            </Link>
          </div>
        </div>
        <div className=" lg:w-5/12 w-full">
          <Image
            src="/assets/images/blog-page/saas-mana.png"
            className=" lg:rounded-e-xl rounded-b-xl lg:rounded-b-none lg:max-w-[559px] w-full h-full lg:max-h-[100%] max-h-[435px] object-cover"
            width={559}
            height={429}
            alt="saas man"
          />
        </div>
      </div>
    </div>
  );
};

export default LatestBlog;
