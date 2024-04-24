import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Disclosure } from "@headlessui/react";
import { AccrordianArrow, ArrowRight, Cross, NuportLogo } from "../Icons";
import { mobileNavbar } from "../Helper";
import Platform from "./Platform";

const MobileNav = ({ setShowNavbar, scrollRemove }) => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  // Function to toggle accordion items
  const toggleAccordion = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-[600px] min-h-screen bg-white overflow-y-scroll">
      {/* Mobile Navbar Header */}
      <div className="px-5 bg-darkBlue pt-[52px] pb-3.5 flex justify-between items-center">
        {/* Nuport Logo */}
        <Link href="/">
          <NuportLogo />
        </Link>
        {/* Close button */}
        <div
          onClick={() => {
            setShowNavbar(false), scrollRemove();
          }}
          className="cursor-pointer"
        >
          <Cross />
        </div>
      </div>
      {/* Mobile Navbar Content */}
      <div className="px-5 overflow-y-auto h-[calc(100vh-76px)] ">
        {mobileNavbar.map((obj, index) => (
          <div key={index} className="">
            {/* Accordion item container */}
            <div
              className={` border-b ${
                expandedIndex === index
                  ? "border-transparent"
                  : "border-mischka"
              }`}
            >
              {/* Accordion button */}
              <button
                type="button"
                className={`flex items-center justify-between py-4 w-full text-left font-medium text-[20px] leading-[150%] duration-300 text-shark font-inter ${
                  expandedIndex === index ? "text-tealBlue" : ""
                }`}
                onClick={() => toggleAccordion(index)}
                aria-expanded={expandedIndex === index}
                aria-controls={`faqs-text-${index}`}
              >
                {/* Title of the accordion item */}
                {obj.title}
                {/* Chevron icon for indicating accordion state */}
                <span
                  className={`duration-300 ${
                    expandedIndex === index ? "rotate-180" : ""
                  }`}
                >
                  <AccrordianArrow
                    expandedIndex={expandedIndex}
                    index={index}
                  />
                </span>
              </button>
              {/* Accordion content */}
              <div
                id={`faqs-text-${index}`}
                role="region"
                aria-labelledby={`faqs-title-${index}`}
                className={`grid text-sm text-slate-600 overflow-hidden transition-all duration-300 ease-in-out ${
                  expandedIndex === index
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                {" "}
                <div
                  className="overflow-hidden"
                  onClick={() => {
                    setShowNavbar(false), scrollRemove();
                  }}
                >
                  {obj.sublinks}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MobileNav;
