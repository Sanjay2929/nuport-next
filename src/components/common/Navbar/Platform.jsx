import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "../Icons";
import { platformNav } from "../Helper";

const Platform = () => {
  return (
    <div className="xl:px-4 pt-4">
      {/* Section Title */}
      <h3 className="font-semibold text-base text-shark">Choose Platform</h3>
      {/* Platform Links */}
      <div className="flex gap-5 py-4">
        {platformNav.map((subvalue, subIndex) => {
          return (
            <Link href={subvalue.url} key={subIndex}
               className="p-4 h-[146px] w-[185px] border group border-mischka relative hover:border-tealBlue duration-300 rounded-xl">
                <span className="flex items-center gap-1">
                  {/* Platform Name */}
                  <p>{subvalue.link}</p>{" "}
                  {/* Arrow Right Icon */}
                  <span className="pt-1">
                    <ArrowRight />
                  </span>
                </span>
                {/* Platform Image */}
                <Image
                  width={58}
                  height={50}
                  className={`absolute bottom-3.5 ${subvalue.imagePosition}`}
                  src={subvalue.img}
                  alt={subvalue.link}
                />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Platform;
