import React from "react";
import { Calender } from "./Icons";

const BookDemo = () => {
  return (
    <button className="book_demo_btn bg-tealBlue flex items-center gap-2 px-5 lg:pt-3.5 py-3 lg:pb-4 rounded-full lg:text-base text-sm font-semibold text-white border-tealBlue  border duration-300">
      <Calender /> Book a Free Demo
    </button>
  );
};

export default BookDemo;
