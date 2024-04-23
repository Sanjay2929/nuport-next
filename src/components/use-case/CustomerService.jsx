import Image from "next/image";
import { orderManage } from "../common/Helper";

const CustomerService = () => {
  return (
    <div className="xl:max-w-[1324px] container mx-auto">
      <div className="pt-12 flex justify-between gap-6 md:flex-row flex-col">
        <div className="md:w-1/2">
          <p className="font-plus font-bold text-base text-orangeDark leading-[126%] !tracking-[1.92px] uppercase">
            All industry solutions
          </p>
          <p className="pt-3 font-plus font-bold lg:text-[48px] md:text-[42px] sm:text-[36px] text-[32px] leading-[120%] tracking-[0.96px] text-white">
            What’re the Customer Service
          </p>
          <div className="sm:pt-4">
            {orderManage.map((order, index) => (
              <div
                key={index}
                className={` sm:py-7 py-6 border-darkGray ${
                  orderManage.length === index + 1 ? "md:border-b" : "border-b"
                }`}
              >
                <p className="font-plus font-bold leading-[140%] text-white lg:text-2xl sm:text-xl text-lg">
                  {order.title}
                </p>
                <p className="md:pt-4 pt-2 text-lightGray font-plus font-normal sm:text-lg text-base max-w-[630px] leading-[140%]">
                  {order.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="md:w-1/2">
          <div className="flex md:justify-end justify-center md:sticky top-10">
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

export default CustomerService;
