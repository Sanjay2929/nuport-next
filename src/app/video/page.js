import Hero from "@/components/common/Hero";
import Video from "@/components/video-page/Video";

const page = () => {
  return (
    <>
      {/* Background section */}
      <div className="bg-darkBlue">
        {/* Hero section */}
        <Hero
          type="toggle"
          heading={
            <>
              <span className=" text-offWhite">Nuport </span> videos
            </>
          }
          description="Explore our library of informative videos showcasing e-commerce and enterprise solutions. Get insights, and success stories in action."
          topbtn="Get to know us through video resources"
        />
        
        {/* Video section */}
        <Video />
      </div>
    </>
  );
};

export default page;
