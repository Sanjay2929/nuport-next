import Image from "next/image";
import React from "react";

const Revolution = ({ date, content, btn, img }) => {
  return (
    <div className=" border-2 hover:border-tealBlue border-darkGray rounded-xl bg-lightTeal mb-[24px] overflow-hidden min-h-[287px] flex transition-all ease-in-out duration-300 ">
      <div className="flex flex-wrap">
        <div className=" sm:w-7/12 w-full sm:py-[26px] sm:px-[19px] p-5 flex flex-col justify-between items-start">
          <div className=" mb-5">
            <p className=" font-plus font-semibold text-sm text-gray mb-[15px]">
              {date}
            </p>
            <p className=" font-plus font-semibold text-xl text-offWhite">
              {content}
            </p>
          </div>
          <span className=" rounded-lg py-2 px-3 bg-darkGray text-offWhite font-plus font-semibold text-sm">
            {btn}
          </span>
        </div>
        <div className=" sm:w-5/12 w-full">
          <Image
            src={img}
            className=" lg:rounded-e-xl rounded-b-xl lg:rounded-b-none lg:max-w-[559px] w-full h-full flex sm:max-h-[100%] max-h-[225px] object-cover object-top"
            width={559}
            height={449}
            alt="saas man"
          />
        </div>
      </div>
    </div>
  );
};

export default Revolution;
