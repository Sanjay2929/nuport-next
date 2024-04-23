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
  const [activeTab, setActiveTab] = useState(0); // State to track active tab

  const solution = [
    {
      title: "Field Sales Force",
      content: <FieldSalesForce />,
      icons: <FieldSales activeTab={activeTab} />,
    },
    {
      title: "Distribution Managers",
      content: <DistributionManager />,
      icons: <Distribution activeTab={activeTab} />,
    },
    {
      title: "Warehouse Managers",
      content: <WarehouseManager />,
      icons: <Warehouse activeTab={activeTab} />,
    },
    {
      title: "Delivery Partner",
      content: <DeliveryPartner />,
      icons: <LastDelivery activeTab={activeTab} />,
    },
  ];
  return (
    <div className="bg-darkBlue mt-[-1px]">
      <div className="xl:max-w-[1324px] container px-5 pb-16 sm:pb-20 md:pb-24 lg:pb-32 xl:pb-40 mx-auto">
        <div className="xl:overflow-hidden overflow-scroll">
          <div className="flex gap-2  md:min-w-[1240px] min-w-[900px]">
            {solution.map((tab, index) => (
              <div
                key={index}
                onClick={() => setActiveTab(index)} // Set active tab on click
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
