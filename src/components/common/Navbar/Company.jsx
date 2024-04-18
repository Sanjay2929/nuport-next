import React from "react";
import { CompanyNav } from "../Helper";
import Link from "next/link";

const Company = () => {
  return (
    <div className="xl:p-5 py-4 bg-white rounded-2xl w-full flex flex-col gap-6">
      {/* PRINT NAV-BAR LINKS  */}
      {CompanyNav.map((value, index) => {
        return (
          <div key={index}>
            <p className="uppercase font-bold text-base tracking-[1.8px] text-gray pb-4">
              {value.heading}
            </p>
            <div className="flex items-center justify-between flex-wrap">
              {value.linkTabs.map((subValue, index) => {
                return (
                  <Link
                    href={subValue.url}
                    key={index}
                    className="p-4 xl:w-[calc(50%-6px)] w-full flex gap-5 items-center hover:bg-extraLightGray rounded-lg"
                  >
                    <span>{subValue.icon}</span>
                    <div>
                      <p className="font-semibold text-lg text-shark pb-1">
                        {subValue.title}
                      </p>
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
