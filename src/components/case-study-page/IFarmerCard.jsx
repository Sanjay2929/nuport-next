import Image from "next/image";
import { StoryArrow } from "../common/Icons";
import Link from "next/link";

const IFarmerCard = ({ logo, title, description, path }) => {
  return (
    <div className="bg-darkGray rounded-[20px] p-[1.5px] hover:bg-[linear-gradient(215.83deg,_#288EA5_0.54%,_rgba(40,_142,_165,_0)_69.44%)] overflow-hidden group transition-all ease-in-out duration-300 h-full">
      <div className="p-8 bg-darkBlue rounded-[20px] relative h-full">
        <div className="w-20 h-20 blur-[70px] bg-transparent group-hover:bg-moonstone transition-all ease-in-out duration-300  absolute end-0 top-0 rounded-full"></div>
        {/* <span>{logo}</span> */}
        <Image src={logo} alt="logo" height={40} width={90} />
        <p className=" text-white font-plus font-bold text-6xl tracking-[-2%] sm:mt-[132px] mt-10 mb-4">
          {title}
        </p>
        <p className="font-plus font-medium text-lg text-lightGray mb-[30px]">
          {description}
        </p>
        <div className=" flex items-start justify-start">
          <Link
            href={path}
            className="transition-all ease-in-out duration-300 font-plus  font-semibold text-base group-hover:text-moonstone text-lightGray flex items-center gap-[13px] group-hover:gap-4"
          >
            Read story <StoryArrow />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default IFarmerCard;
