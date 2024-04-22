import { CircleArrow } from "../common/Icons";

const Hero = () => {
  return (
    <div className="bg-darkBlue">
      <div className="md:pt-[160px] sm:py-[72px] pt-[72px] pb-10 md:pb-[120px] container 2xl:max-w-[1285px] px-5 2xl:px-0 mx-auto flex flex-col items-center">
        <div className="ps-5 pe-2 flex gap-2.5 items-center py-1.5 md:text-base text-xs yellow_gradient rounded-full border border-orangeDark text-white">
          Your business solution <CircleArrow />
        </div>
        <h1 className="font-extrabold lg:text-[72px] sm:pb-7 pb-5 sm:text-5xl text-[32px] text-white text-center max-w-[1141px] mx-auto !leading-[110%] sm:pt-4 pt-3">
          Solutions <span className="text-garyMedium">by use case</span>
        </h1>
        <p className="text-lightGray font-normal md:text-xl sm:text-lg text-base text-center max-w-[747px]">
          However you want to use Nuport for your manufacturing, distribution or
          warehousing business, we are here for you.
        </p>
      </div>
    </div>
  );
};

export default Hero;
