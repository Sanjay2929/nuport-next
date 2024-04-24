import React from "react";
import { pricingNav } from "../Helper"; // Importing pricing navigation data
import Link from "next/link";

const Pricing = () => {
  return (
    <div className="xl:p-4 py-4 bg-white rounded-2xl w-full">
      {/* Mapping through each item in pricingNav array */}
      {pricingNav.map((value, index) => {
        return (
          <Link
            href={value.url} // Linking to the URL specified in each item
            key={index} // Using index as key for mapping
            className="p-4 flex gap-5 items-center hover:bg-extraLightGray rounded-lg"
          >
            {/* Icon for the pricing item */}
            <span>{value.icon}</span>
            <div>
              {/* Title of the pricing item */}
              <p className="font-semibold text-lg text-shark pb-1">
                {value.title}
              </p>
              {/* Description or paragraph of the pricing item */}
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

export default Pricing;
