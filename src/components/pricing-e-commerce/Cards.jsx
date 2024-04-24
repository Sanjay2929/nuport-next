import { eCommerce } from "../common/Helper";
import { PricingRightClick } from "../common/Icons";

const Cards = () => {
  return (
    <div className="bg-darkBlue">
      <div className="xl:max-w-[1324px] px-5 mx-auto container">
        <div className="pb-40">
          <div className="flex justify-center gap-6 flex-wrap ">
            {eCommerce.map((value, index) => (
              <div
                key={index}
                className="p-[1.5px] sm:w-[calc(50%-12px)] xl:w-[calc(33.3%-16px)] bg-darkBlue hover:bg-[linear-gradient(180deg,_#288EA5_0%,_rgba(40,_142,_165,_0)_73.92%)]  rounded-[20px] transition-all ease-in-out duration-300 group max-w-[412px] sm:max-w-[unset] w-full mx-auto"
              >
                <div className="lg:h-[652px] h-[582px] bg-darkBlue group-hover:border-transparent rounded-[20px] border border-darkGray md:p-7 p-4 relative overflow-hidden ">
                  <div className="w-[50%] max-h-[200px] h-full blur-[190px] bg-transparent group-hover:bg-moonstone transition-all ease-in-out duration-300  absolute end-0 top-0 rounded-full"></div>
                  <div className="flex justify-between">
                    <div className="w-[95px] h-[80px] relative z-10">
                      {value.icon}
                    </div>
                    <button className={`bg-white px-3 h-[34px] text-shark rounded-lg font-plus font-semibold text-sm leading-[140%] ${index === 1 ? "block":"hidden"}`}>Most Popular</button>
                  </div>
                  <p className="lg:pt-9 pt-6 text-white font-plus font-semibold lg:text-2xl text-xl leading-[140%] relative z-10">
                    {value.title}
                  </p>
                  <p className="pt-2 text-lightGray font-plus font-medium lg:text-lg text-base leading-[140%] relative z-10">
                    {value.description}
                  </p>
                  <p className="lg:pt-11 pt-7 text-white font-plus lg:text-3xl text-2xl font-bold leading-[124%] md:ps-2 relative z-10">
                    {value.months}{" "}
                    <span className="font-medium lg:text-2xl text-xl">
                      /month
                    </span>
                  </p>
                  <button className="lg:mt-7 mt-5 mb-3 bg-darkGray w-full flex justify-center items-center h-[52px] rounded-[100px] text-white font-plus font-bold text-base leading-[140%] 
                  group-hover:bg-tealBlue transition-all duration-300 ease-in-out relative z-10">
                    {value.contact}
                  </button>
                  {value.features.map((subvalue, index) => {
                    return (
                      <div key={index} className="flex pt-4 relative z-10">
                        <span>
                          <PricingRightClick />
                        </span>
                        <p className="text-white ps-2 font-plus font-medium lg:text-lg text-base leading-[140%]">
                          {subvalue}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
