import Image from "next/image";
import { orderManage } from "../common/Helper";

const Billing = () => {
  return (
    // Container with maximum width and centered alignment
    <div className="xl:max-w-[1324px] container mx-auto">
      {/* Section containing content and image */}
      <div className="pt-12 flex justify-between gap-6 md:flex-row flex-col">
        {/* Left section with text content */}
        <div className="md:w-1/2">
          {/* Title for the section */}
          <p className="font-plus font-bold text-base text-orangeDark leading-[126%] !tracking-[1.92px] uppercase">
            All industry solutions
          </p>
          {/* Subtitle for the section */}
          <p className="pt-3 font-plus font-bold lg:text-[48px] md:text-[42px] sm:text-[36px] text-[32px] leading-[120%] tracking-[0.96px] text-white">
            What’re the Billing
          </p>
          {/* Render dynamic content from the 'orderManage' array */}
          <div className="sm:pt-4">
            {orderManage.map((order, index) => (
              <div
                key={index}
                // Apply border style to each item except the last one
                className={` sm:py-7 py-6 border-darkGray ${
                  orderManage.length === index + 1 ? "md:border-b" : "border-b"
                }`}
              >
                {/* Title of the item */}
                <p className="font-plus font-bold leading-[140%] text-white lg:text-2xl sm:text-xl text-lg">
                  {order.title}
                </p>
                {/* Description of the item */}
                <p className="md:pt-4 pt-2 text-lightGray font-plus font-normal sm:text-lg text-base max-w-[630px] leading-[140%]">
                  {order.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        {/* Right section with image */}
        <div className="md:w-1/2">
          <div className="flex md:justify-end justify-center md:sticky top-10">
            {/* Image component */}
            <Image
              className="rounded-[20px] object-cover sm:h-full h-[389px]"
              src="/assets/images/use-case/order-managment.png"
              height={559}
              width={512}
              alt="order-managment"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Billing;
