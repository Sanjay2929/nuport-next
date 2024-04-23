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
  const [activeTab, setActiveTab] = useState(0); // State to track active tab

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
    <div className="bg-darkBlue mt-[-1px]">
      <div className="xl:max-w-[1324px] container px-5 pb-16 sm:pb-20 md:pb-24 lg:pb-32 xl:pb-40 mx-auto">
        <div className="xl:overflow-hidden overflow-scroll">
          <div className="flex gap-2  md:min-w-[1240px] min-w-[1050px]">
            {useCaseSolution.map((tab, index) => (
              <div
                key={index}
                onClick={() => setActiveTab(index)} // Set active tab on click
                className={`bg-lightTeal group transition-all duration-300 ease-in-out flex gap-3 items-center md:rounded-[16px_16px_0px_0px] rounded-2xl border-darkGray md:py-4 py-3 sm:px-5 px-4 border md:w-[250px] h-[48px] sm:h-auto w-full whitespace-nowrap md:whitespace-normal ${
                  activeTab === index ? "bg-tealBlue" : "bg-lightTeal"
                }`}
              >
                <span>{tab.icons}</span>
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
