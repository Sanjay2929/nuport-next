import Image from "next/image";
import { orderManage } from "../common/Helper";

const Integration = () => {
  return (
    // Container with maximum width and centered alignment
    <div className="xl:max-w-[1324px] container mx-auto">
      {/* Flex container with justified content and gap between items */}
      <div className="pt-12 flex justify-between gap-6 md:flex-row flex-col">
        {/* Left side of the layout */}
        <div className="md:w-1/2">
          {/* Title for industry solutions */}
          <p className="font-plus font-bold text-base text-orangeDark leading-[126%] !tracking-[1.92px] uppercase">
            All industry solutions
          </p>
          {/* Subtitle for Integrations */}
          <p className="pt-3 font-plus font-bold lg:text-[48px] md:text-[42px] sm:text-[36px] text-[32px] leading-[120%] tracking-[0.96px] text-white">
            What’re the Integrations
          </p>
          {/* Container for order management information */}
          <div className="sm:pt-4">
            {/* Mapping through orderManage data */}
            {orderManage.map((order, index) => (
              <div
                key={index}
                className={` sm:py-7 py-6 border-darkGray ${
                  // Applying border bottom based on length of orderManage data
                  orderManage.length === index + 1 ? "md:border-b" : "border-b"
                }`}
              >
                {/* Title of the order management */}
                <p className="font-plus font-bold leading-[140%] text-white lg:text-2xl sm:text-xl text-lg">
                  {order.title}
                </p>
                {/* Description of the order management */}
                <p className="md:pt-4 pt-2 text-lightGray font-plus font-normal sm:text-lg text-base max-w-[630px] leading-[140%]">
                  {order.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        {/* Right side of the layout */}
        <div className="md:w-1/2">
          {/* Container for the image */}
          <div className="flex md:justify-end justify-center md:sticky top-10">
            {/* Next.js Image component */}
            <Image
              className="rounded-[20px] object-cover sm:h-full h-[389px]"
              src="/assets/images/use-case/order-managment.png"
              height={559}
              width={512}
              alt="order managment"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Integration;
