import React from "react";
import { integrateNav } from "../Helper"; // Importing data from Helper
import Link from "next/link"; // Importing Link component from Next.js

const Integrations = () => {
  return (
    <div className="xl:p-4 py-4 bg-white rounded-2xl w-full">
      {/* Looping over each integration item */}
      {integrateNav.map((value, index) => {
        return (
          <Link
            href={value.url}
            key={index}
            className="p-4 flex gap-5 items-center hover:bg-extraLightGray rounded-lg"
          >
            {/* Icon */}
            <span>{value.icon}</span>
            <div>
              {/* Title */}
              <p className="font-semibold text-lg text-shark pb-1">
                {value.title}
              </p>
              {/* Paragraph */}
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
