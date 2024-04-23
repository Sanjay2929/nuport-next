import Hero from "@/components/common/Hero";
import Video from "@/components/video-page/Video";

const page = () => {
  return (
    <>
      <div className="bg-darkBlue">
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
        <Video />
      </div>
    </>
  );
};

export default page;
