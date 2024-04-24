"use client";
import { useState } from "react";
import Fmcg from "./Fmcg";
import IndustrialSupply from "./IndustrialSupply";
import ECommerce from "./ECommerce";
import LastMileDelivery from "./LastMileDelivery";
import {
  Ecommerce,
  IndustrialSupplies,
  LastDelivery,
  Location,
} from "../common/Icons";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0); // State to track active tab

  // Array containing tab information
  const solution = [
    {
      title: "FMCG",
      content: <Fmcg />,
      icons: <Location activeTab={activeTab} />, // Icon component for FMCG tab
    },
    {
      title: "Industrial Supply",
      content: <IndustrialSupply />,
      icons: <IndustrialSupplies activeTab={activeTab} />, // Icon component for Industrial Supply tab
    },
    {
      title: "E-Commerce",
      content: <ECommerce />,
      icons: <Ecommerce activeTab={activeTab} />, // Icon component for E-Commerce tab
    },
    {
      title: "Last Mile Delivery",
      content: <LastMileDelivery />,
      icons: <LastDelivery activeTab={activeTab} />, // Icon component for Last Mile Delivery tab
    },
  ];

  return (
    <div className="bg-darkBlue mt-[-1px]">
      <div className="xl:max-w-[1324px] container px-5 pb-16 sm:pb-20 md:pb-24 lg:pb-32 xl:pb-40 mx-auto">
        <div className="xl:overflow-hidden overflow-scroll">
          <div className="flex gap-2  md:min-w-[1240px] min-w-[900px]">
            {/* Render tabs */}
            {solution.map((tab, index) => (
              <div
                key={index}
                onClick={() => setActiveTab(index)} // Set active tab on click
                className={`bg-lightTeal group transition-all duration-300 ease-in-out flex gap-3 items-center md:rounded-[16px_16px_0px_0px] rounded-2xl border-darkGray md:py-7 sm:py-5 py-3 md:px-6 sm:px-5 px-4 border md:w-full h-[48px] sm:h-auto w-[218px] ${
                  activeTab === index ? "bg-tealBlue" : "bg-lightTeal"
                }`}
              >
                <span>{tab.icons}</span>
                <p className="font-plus font-semibold text-white text-base lg:text-lg xl:text-xl !leading-[140%]">
                  {tab.title}
                </p>
              </div>
            ))}
          </div>
        </div>
        {/* Render content based on active tab */}
        {solution[activeTab].content}
      </div>
    </div>
  );
};

export default Tabs;
