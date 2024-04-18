import React from "react";
import { integrateNav } from "../Helper";
import Link from "next/link";
const Integrations = () => {
  return (
    <div className="xl:p-4 py-4 bg-white rounded-2xl w-full">
      {integrateNav.map((value, index) => {
        return (
          <Link
            href={value.url}
            key={index}
            className="p-4 flex gap-5 items-center hover:bg-extraLightGray rounded-lg"
          >
            <span>{value.icon}</span>
            <div>
              <p className="font-semibold text-lg text-shark pb-1">
                {value.title}
              </p>
              <p className="font-normal text-base text-riverBed">
                {value.paragraph}
              </p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Integrations;
