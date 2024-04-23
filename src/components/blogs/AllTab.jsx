"use client";
import React, { useState } from "react";
import { blogTabHeading, tabCard } from "../common/Helper";
import Saas from "./Saas";
import Revolution from "./Revolution";

const AllTab = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [showMore, setShowMore] = useState(false);
  const [displayedCards, setDisplayedCards] = useState(4);

  // Filter cards based on active tab
  const filteredCards =
    activeTab === "All"
      ? tabCard
      : tabCard.filter((card) => card.btn === activeTab);

  // Function to handle "Show More" button click
  const showMoreHandler = () => {
    setShowMore(!showMore);
    setDisplayedCards(showMore ? 4 : filteredCards.length);
  };

  return (
    <div className="container 2xl:max-w-[1285px] px-5 2xl:px-0 mx-auto">
      <div className="flex items-center gap-10 py-5 overflow-scroll scrollbar_hidden">
        {blogTabHeading.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(tab)}
            className={`font-plus transition-all ease-in-out duration-300 font-medium text-base relative after:absolute after:contents-[''] after:h-[2px] after:bg-tealBlue after:start-0 after:bottom-[-20px] text-nowrap ${
              tab === activeTab
                ? "text-tealBlue  after:w-full"
                : "text-offWhite"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="w-[200vw] bg-darkGray h-[1px]  mb-7 translate-x-[-26%]"></div>

      <Saas />
      <div className="flex flex-wrap items-start">
        {filteredCards.slice(0, displayedCards).map((value, index) => (
          <div
            className={`lg:w-6/12 w-full ${
              index % 2 === 0 ? "lg:pe-3" : "lg:ps-3"
            }`}
            key={index}
          >
            <Revolution
              date={value.date}
              content={value.description}
              btn={value.btn}
              img={value.img}
            />
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center text-offWhite font-semibold font-plus text-base mt-4 mb-[160px]">
        {filteredCards.length > 4 && (
          <div className="flex items-center justify-center text-offWhite font-semibold font-plus text-base mt-4">
            <button
              className={`bg-tealBlue border border-tealBlue transition-all ease-in-out duration-300 py-[15px] px-5 rounded-full text-center common_btn group`}
              onClick={showMoreHandler}
            >
              {showMore ? "Show Less" : "Show More"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllTab;
