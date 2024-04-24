"use client"
import { useEffect, useState } from "react";
import { BacktoTopArrow } from "./Icons";

const BackToTop = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  // Function to scroll to the top of the page
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  // Function to handle scroll event
  const handleScroll = () => {
    const position = window.scrollY; // Get the current scroll position
    setScrollPosition(position); // Update the state with the current scroll position
  };

  useEffect(() => {
    // Add scroll event listener when component mounts
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Remove scroll event listener when component unmounts to prevent memory leaks
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Dependency array to run the effect only once when the component mounts

  return (
    // Back to top button with conditional rendering based on scroll position
    <div
      className={`fixed bg-tealBlue bottom-[3%] transition-all duration-300 ease-linear hover:opacity-80 group end-3 z-50 w-9 md:h-11 h-9 md:w-11 flex items-center justify-center cursor-pointer rounded-full  ${
        scrollPosition > 200 ? "scale-100 " : " scale-0"
      }`}
      onClick={() => scrollToTop()} // Click handler to scroll to the top
    >
      <BacktoTopArrow /> {/* Back to top arrow icon */}
    </div>
  );
};

export default BackToTop;
