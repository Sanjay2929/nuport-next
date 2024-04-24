"use client"; // Indicating client-side code
import React, { useEffect, useState } from "react"; // Importing React and useEffect, useState hooks
import { fastDecisionFaq } from "../common/Helper"; // Importing fastDecisionFaq from Helper
import Image from "next/image"; // Importing Image component from Next.js
import BookDemo from "../common/BookDemo"; // Importing BookDemo component

// FasterDecision component definition
const FasterDecision = () => {
  const [expandedIndex, setExpandedIndex] = useState(0); // State to track expanded accordion item index

  // Function to toggle accordion items
  const toggleAccordion = (index) => {
    setExpandedIndex((prevIndex) => {
      // If the clicked FAQ is already expanded, close it
      if (prevIndex === index) {
        setExpandedIndex(0);
      }
      // Otherwise, open the clicked FAQ and close all others
      return index;
    });
  };

  return (
    <div className="bg-darkBlue lg:py-[160px] sm:py-24 py-[60px] ">
      <div className="container xl:max-w-[1285px] mx-auto 2xl:px-0 px-5">
        {/* Section title */}
        <p
          className="tracking-[2.5px] font-bold font-plus text-xs md:text-sm lg:text-base text-orangeDark uppercase"
          data-aos="fade-up"
        >
          Make faster decisions
        </p>
        {/* Main heading */}
        <h2
          className=" text-[32px] !leading-[110%] md:max-w-[500px] lg:max-w-[731px] sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-plus font-extrabold pt-3 text-white lg:pb-16 pb-12"
          data-aos="fade-up"
        >
          <span className="text-garyMedium">Increase</span> throughput &
          visibility
        </h2>
        {/* Main content */}
        <div
          className="flex justify-between items-center flex-col lg:flex-row"
          data-aos="fade-right"
        >
          <div className="lg:w-1/2 max-w-[800px]">
            {/* Mapping over fastDecisionFaq to render individual accordion items */}
            {fastDecisionFaq.map((obj, index) => {
              return (
                <div
                  key={index}
                  className={`p-[1px] rounded-xl sm:mb-5 mb-2.5 ${
                    expandedIndex === index ? "fast_decision_faq" : ""
                  }`}
                >
                  {/* Accordion item container */}
                  <div
                    className={`md:p-5 p-4 relative overflow-hidden rounded-xl  ${
                      expandedIndex === index ? "bg-lightTeal" : "bg-darkBlue"
                    }`}
                  >
                    {expandedIndex === index && (
                      <div className="bg-tealBlue w-[553px] h-[429px] bottom-full left-1/2 blur-[70px] opacity-70 absolute rounded-full"></div>
                    )}
                    {/* Accordion button */}
                    <button
                      type="button"
                      className={`flex items-center gap-2 sm:gap-4 !leading-[140%] w-full text-left font-semibold text-base md:text-xl text-white ${
                        expandedIndex === index ? "" : ""
                      }`}
                      onClick={() => toggleAccordion(index)}
                      aria-expanded={expandedIndex === index}
                      aria-controls={`faqs-text-${index}`}
                    >
                      <span
                        className={`duration-300 ${
                          expandedIndex === index ? "" : "mix-blend-luminosity"
                        }`}
                      >
                        {obj.icon}
                      </span>
                      {obj.title}
                    </button>
                    {/* Accordion content */}
                    <div
                      id={`faqs-text-${index}`}
                      role="region"
                      aria-labelledby={`faqs-title-${index}`}
                      className={`grid text-sm text-slate-600  overflow-hidden transition-all duration-300 ease-in-out ${
                        expandedIndex === index
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="font-medium pt-3 md:pt-4 lg:pt-[18px] text-sm md:text-base lg:text-lg !leading-[140%] text-lightGray ps-[30px] sm:ps-[43px] xl:pe-[45px]">
                          {obj.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
            <div className="pt-5">
              {/* Rendering BookDemo component */}
              <BookDemo />
            </div>
          </div>
          <div
            className="2xl:w-[40%] w-full max-w-[521px] lg:w-1/2 2xl:ps-0 lg:ps-10 xl:ps-14 lg:pt-0 pt-12"
            data-aos="fade-left"
          >
            {/* Mapping over fastDecisionFaq to render images */}
            {fastDecisionFaq.map((value, index) => {
              return (
                <Image
                  key={index}
                  className={`duration-300 ${
                    expandedIndex == index ? "w-full" : "w-0"
                  }`}
                  width={521}
                  height={502}
                  src={value.image}
                  alt="dashboard"
                  loading="eager"
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FasterDecision; // Exporting FasterDecision component
