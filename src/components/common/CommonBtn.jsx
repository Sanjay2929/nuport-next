import React from "react";
import { ArrowUpwardSimple } from "./Icons";

const CommonBtn = (props) => {
  return (
    <button className="common_btn bg-tealBlue flex items-center gap-2 py-3 pl-4 pr-3 sm:px-5 lg:pt-3.5 lg:pb-4 rounded-full lg:text-base text-sm font-semibold group text-white  group border border-tealBlue duration-300 hover:bg-orange-500">
      {props.title} <ArrowUpwardSimple />
    </button>
  );
};

export default CommonBtn;
