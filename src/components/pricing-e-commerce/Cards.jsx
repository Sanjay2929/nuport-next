import { eCommerce } from "../common/Helper";
import { PricingRightClick } from "../common/Icons";

const Cards = () => {
  return (
    <div className="bg-darkBlue">
      <div className="xl:max-w-[1324px] px-5 mx-auto container">
        <div className="pb-40">
          <div className="flex gap-6 justify-center items-center flex-wrap">
            {eCommerce.map((value, index) => (
              <div
                key={index}
                className="p-[1.5px] bg-darkBlue hover:bg-[linear-gradient(180deg,_#288EA5_0%,_rgba(40,_142,_165,_0)_73.92%)]  rounded-[20px] transition-all ease-in-out duration-300 group"
              >
                <div className="w-[412px] h-[652px]  bg-darkBlue rounded-[20px] border border-darkGray p-7 relative overflow-hidden">
                  <div className="w-full max-h-[300px] h-full blur-[190px] bg-transparent group-hover:bg-moonstone transition-all ease-in-out duration-300  absolute end-0 top-0 rounded-full"></div>
                  <div className="w-[95px] h-[80px] relative z-10">
                    {value.icon}
                  </div>
                  <p className="pt-9 text-white font-plus font-semibold text-2xl leading-[140%] relative z-10">
                    {value.title}
                  </p>
                  <p className="pt-2 text-lightGray font-plus font-medium text-lg leading-[140%] relative z-10">
                    {value.description}
                  </p>
                  <p className="pt-11 text-white font-plus text-3xl font-bold leading-[124%] ps-2 relative z-10">
                    {value.months}{" "}
                    <span className="font-medium text-2xl">/month</span>
                  </p>
                  <button className="mt-7 mb-3 bg-darkGray w-full flex justify-center items-center h-[52px] rounded-[100px] text-white font-plus font-bold text-base leading-[140%] group-hover:bg-tealBlue transition-all duration-300 ease-in-out relative z-10">
                    {value.contact}
                  </button>
                  {value.features.map((subvalue, index) => {
                    return (
                      <div key={index} className="flex pt-4 relative z-10">
                        <span>
                          <PricingRightClick />
                        </span>
                        <p className="text-white ps-2 font-plus font-medium text-lg leading-[140%]">
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
