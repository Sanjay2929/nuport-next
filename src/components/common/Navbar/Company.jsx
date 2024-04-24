import React from "react";
import { CompanyNav } from "../Helper"; // Importing data from Helper
import Link from "next/link"; // Importing Link component from Next.js

const Company = () => {
  return (
    <div className="xl:p-5 py-4 bg-white rounded-2xl w-full flex flex-col gap-6">
      {/* Looping over each section in the navigation */}
      {CompanyNav.map((value, index) => {
        return (
          <div key={index}>
            {/* Section heading */}
            <p className="uppercase font-bold text-base tracking-[1.8px] text-gray pb-4">
              {value.heading}
            </p>
            {/* Looping over each link in the section */}
            <div className="flex items-center justify-between flex-wrap">
              {value.linkTabs.map((subValue, index) => {
                return (
                  // Using Next.js Link component for navigation
                  <Link
                    href={subValue.url}
                    key={index}
                    className="p-4 xl:w-[calc(50%-6px)] w-full flex gap-5 items-center hover:bg-extraLightGray rounded-lg"
                  >
                    {/* Icon */}
                    <span>{subValue.icon}</span>
                    <div>
                      {/* Title */}
                      <p className="font-semibold text-lg text-shark pb-1">
                        {subValue.title}
                      </p>
                      {/* Paragraph */}
                      <p className="font-normal text-base text-riverBed">
                        {subValue.paragraph}
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Company;
