import React from "react";
import { solutionNav } from "../Helper"; // Importing solution navigation data
import Link from "next/link";

const Solution = () => {
  return (
    <div className="xl:p-4 py-4 bg-white rounded-2xl w-full">
      {/* Mapping through each item in solutionNav array */}
      {solutionNav.map((value, index) => {
        return (
          <Link
            href={value.url} // Linking to the URL specified in each item
            key={index} // Using index as key for mapping
            className="p-4 flex gap-5 items-center hover:bg-extraLightGray rounded-lg"
          >
            {/* Icon for the solution item */}
            <span>{value.icon}</span>
            <div>
              {/* Title of the solution item */}
              <p className="font-semibold text-lg text-shark pb-1">
                {value.title}
              </p>
              {/* Description or paragraph of the solution item */}
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

export default Solution;
