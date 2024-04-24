"use client";
import { useState } from "react";
import {
    Distribution,
    FieldSales,
    LastDelivery,
    Warehouse
} from "../common/Icons";
import DeliveryPartner from "./DeliveryPartner";
import DistributionManager from "./DistributionManager";
import FieldSalesForce from "./FieldSalesForce";
import WarehouseManager from "./WarehouseManager";

const RolesSolution = () => {
  // State to track active tab
  const [activeTab, setActiveTab] = useState(0);

  // Define solution data with title, content, and icons
  const solution = [
    {
      title: "Field Sales Force",
      content: <FieldSalesForce />, // Content component for Field Sales Force
      icons: <FieldSales activeTab={activeTab} />, // Icon component for Field Sales Force
    },
    {
      title: "Distribution Managers",
      content: <DistributionManager />, // Content component for Distribution Managers
      icons: <Distribution activeTab={activeTab} />, // Icon component for Distribution Managers
    },
    {
      title: "Warehouse Managers",
      content: <WarehouseManager />, // Content component for Warehouse Managers
      icons: <Warehouse activeTab={activeTab} />, // Icon component for Warehouse Managers
    },
    {
      title: "Delivery Partner",
      content: <DeliveryPartner />, // Content component for Delivery Partner
      icons: <LastDelivery activeTab={activeTab} />, // Icon component for Delivery Partner
    },
  ];

  return (
    // Container for the roles solution section
    <div className="bg-darkBlue mt-[-1px]">
      {/* Container for content */}
      <div className="xl:max-w-[1324px] container px-5 pb-16 sm:pb-20 md:pb-24 lg:pb-32 xl:pb-40 mx-auto">
        {/* Scrollable container for tabs */}
        <div className="xl:overflow-hidden overflow-scroll">
          {/* Container for tab items */}
          <div className="flex gap-2  md:min-w-[1240px] min-w-[900px]">
            {/* Map over solution data to render each tab */}
            {solution.map((tab, index) => (
              <div
                key={index}
                onClick={() => setActiveTab(index)} // Set active tab on click
                // Apply dynamic styling based on active tab
                className={`bg-lightTeal group transition-all duration-300 ease-in-out flex gap-3 items-center md:rounded-[16px_16px_0px_0px] rounded-2xl border-darkGray md:py-7 sm:py-5 py-3 md:px-6 sm:px-5 px-4 border md:w-full h-[48px] sm:h-auto w-full whitespace-nowrap md:whitespace-normal ${
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

export default RolesSolution;
