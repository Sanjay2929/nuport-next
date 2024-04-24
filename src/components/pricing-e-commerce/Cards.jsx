import { eCommerce } from "../common/Helper";
import { PricingRightClick } from "../common/Icons";

const Cards = () => {
  return (
    <div className="bg-darkBlue">
      <div className="xl:max-w-[1324px] px-5 mx-auto container">
        <div className="pt-[120px] pb-40">
          <div className="flex gap-6 justify-center items-center flex-wrap">
            {eCommerce.map((value, index) => (
              <div
                key={index}
                className="w-[412px] h-[652px] group bg-darkBlue rounded-[20px] border border-darkGray p-7"
              >
                <div className="w-[95px] h-[80px]">{value.icon}</div>
                <p className="pt-9 text-white font-plus font-semibold text-2xl leading-[140%]">
                  {value.title}
                </p>
                <p className="pt-2 text-lightGray font-plus font-medium text-lg leading-[140%]">
                  {value.description}
                </p>
                <p className="pt-11 text-white font-plus text-3xl font-bold leading-[124%] ps-2">
                  {value.months}{" "}
                  <span className="font-medium text-2xl">/month</span>
                </p>
                <button className="mt-7 mb-3 bg-darkGray w-full flex justify-center items-center h-[52px] rounded-[100px] text-white font-plus font-bold text-base leading-[140%] group-hover:bg-tealBlue transition-all duration-300 ease-in-out">
                  {value.contact}
                </button>
                {value.features.map((subvalue, index) => {
                  return (
                    <div key={index} className="flex pt-4">
                      <span>
                        <PricingRightClick />
                      </span>
                      <p className="text-white ps-2 font-plus font-medium text-lg leading-[140%]">{subvalue}</p>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
