"use client";
import { useState } from "react";
import {
  BilingIcon,
  Customers,
  IndustrialSupplies,
  IntegrationPlus,
  Location,
} from "../common/Icons";
import Billing from "./Billing";
import CustomerService from "./CustomerService";
import DeliveryPlaning from "./DeliveryPlaning";
import Integration from "./Integration";
import OrderManagment from "./OrderManagment";

const UseCaseSolution = () => {
  // State to track active tab
  const [activeTab, setActiveTab] = useState(0);

  // Data for each use case solution
  const useCaseSolution = [
    {
      title: "Order Management",
      content: <OrderManagment />,
      icons: <Location activeTab={activeTab} />,
    },
    {
      title: "Delivery & Route Planning",
      content: <DeliveryPlaning />,
      icons: <IndustrialSupplies activeTab={activeTab} />,
    },
    {
      title: "Billing",
      content: <Billing />,
      icons: <BilingIcon activeTab={activeTab} />,
    },
    {
      title: "Customer Service",
      content: <CustomerService />,
      icons: <Customers activeTab={activeTab} />,
    },
    {
      title: "Integrations",
      content: <Integration />,
      icons: <IntegrationPlus activeTab={activeTab} />,
    },
  ];

  return (
    // Container with dark blue background
    <div className="bg-darkBlue mt-[-1px]">
      {/* Container with maximum width and padding */}
      <div className="xl:max-w-[1324px] container px-5 pb-16 sm:pb-20 md:pb-24 lg:pb-32 xl:pb-40 mx-auto">
        {/* Overflow container for tabs */}
        <div className="xl:overflow-hidden overflow-scroll">
          {/* Flex container for tabs */}
          <div className="flex gap-2 md:min-w-[1240px] min-w-[1050px]">
            {/* Mapping through use case solutions */}
            {useCaseSolution.map((tab, index) => (
              <div
                key={index}
                onClick={() => setActiveTab(index)} // Set active tab on click
                className={`bg-lightTeal group transition-all duration-300 ease-in-out flex gap-3 items-center md:rounded-[16px_16px_0px_0px] rounded-2xl border-darkGray md:py-4 py-3 sm:px-5 px-4 border md:w-[250px] h-[48px] sm:h-auto w-full whitespace-nowrap md:whitespace-normal ${
                  activeTab === index ? "bg-tealBlue" : "bg-lightTeal"
                }`}
              >
                <span>{tab.icons}</span>
                {/* Title of the tab */}
                <p className="font-plus font-semibold text-white text-base lg:text-lg xl:text-xl !leading-[140%] md:max-w-[158px]">
                  {tab.title}
                </p>
              </div>
            ))}
          </div>
        </div>
        {/* Render content based on active tab */}
        {useCaseSolution[activeTab].content}
      </div>
    </div>
  );
};

export default UseCaseSolution;
