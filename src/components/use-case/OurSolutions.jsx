import Image from "next/image";
import { ourSolution } from "../common/Helper";

const OurSolutions = () => {
  return (
    <div className="bg-white mt-[-1px] relative">
      <div className="xl:max-w-[1324px] container px-5 py-16 sm:py-20 md:py-24 lg:py-32 xl:py-40 mx-auto">
        <p className="md:text-center text-orangeDark uppercase font-plus font-bold md:text-base sm:text-sm text-xs leading-[126%] tracking-[1.92px]">
          get the solution
        </p>
        <h1 className="font-extrabold lg:text-[72px] sm:text-5xl text-[32px] text-shark md:text-center max-w-[1141px] mx-auto !leading-[110%] pt-3">
          Our <span className="text-garyMedium">solutions</span>
        </h1>
        <div className="xl:pt-[84px] lg:pt-16 md:pt-12 sm:pt-6  flex md:flex-row flex-col-reverse xl:gap-[133px] lg:gap-20 sm:gap-10 gap-6">
          <div >
            <Image
              className="sticky top-10 lg:w-[521px] w-[400px] md:block hidden"
              src="/assets/images/use-case/our-solution.png"
              height={502}
              width={521}
              alt="our solution"
            />
            <Image
              className="md:hidden block"
              src="/assets/images/use-case/search-result.png"
              height={535}
              width={522}
              alt="search result"
            />
          </div>
          <div className="md:w-[48%]">
            <div className="py-1 max-w-[630px]">
              {ourSolution.map((our, index) => (
                <div key={index} className={`sm:py-[22px] py-6 border-mischka ${ourSolution.length === index + 1 ? "md:border-b" : "border-b"}`}>
                  <p className="font-plus font-bold lg:text-[30px] md:text-2xl sm:text-xl text-lg leading-[126%] text-shark">{our.title}</p>
                  <p className="pt-4 font-plus font-normal md:text-lg sm:text-base text-sm max-w-[630px] leading-[140%] text-riverBed">{our.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurSolutions;
