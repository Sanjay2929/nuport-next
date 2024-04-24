"use client"
import React, { useEffect, useState, useRef } from "react";
import { Menu, Transition } from "@headlessui/react";
import Link from "next/link";
import BookDemo from "../BookDemo";
import CountryDropdown from "../CountryDropdown";
import { navDropdownLink } from "../Helper";
import { DropdownArrow, MenuBar, NuportLogo } from "../Icons";
import MobileNav from "./MobileNav";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false); // State to control the visibility of the mobile navbar
  const [openDropdown, setOpenDropdown] = useState(null); // State to track which dropdown is open
  const pathname = usePathname(); // Current URL pathname
  const dropdownRef = useRef(null); // Reference to the dropdown element

  useEffect(() => {
    // Reset openDropdown state to null when the page URL changes
    setOpenDropdown(null);
  }, [pathname]);

  useEffect(() => {
    // Close dropdown when clicking outside of it
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Function to toggle the visibility of the mobile navbar
  const navScrollHidden = () => {
    document.body.classList.toggle("overflow-hidden");
  };

  // Function to remove overflow-hidden class from the body
  const scrollRemove = () => {
    document.body.classList.remove("overflow-hidden");
  };

  return (
    <div className="border-b border-darkGray bg-darkBlue relative z-[100]">
      {/* Desktop Navbar */}
      <div className="container mx-auto 2xl:max-w-[1640px] xl:pt-6 pt-[58px] xl:pb-[26px] pb-[14px] px-5 flex justify-between items-center">
        {/* Nuport Logo */}
        <Link href="/">
          <NuportLogo />
        </Link>
        <div className="xl:flex hidden items-center 2xl:gap-[84px] gap-10">
          <div className="flex items-center 2xl:gap-5 gap-3 lg:gap-4">
            {/* Navbar Links */}
            {navDropdownLink.map((value, index) => (
              <div key={index} ref={dropdownRef}>
                <Menu
                  as="div"
                  className="relative inline-block text-left"
                  onClose={() => setOpenDropdown(null)} // Close dropdown when clicked outside
                >
                  <Menu.Button
                    onClick={() =>
                      setOpenDropdown(openDropdown === index ? null : index)
                    }
                    className="focus:outline-none"
                  >
                    <span
                      className={`text-offWhite font-medium text-base flex items-center gap-[7px] hover:text-tealBlue duration-300 group ${
                        openDropdown === index ? "text-tealBlue" : ""
                      }`}
                    >
                      {value.title}{" "}
                      <span
                        className={`transition-transform duration-300 ${
                          openDropdown === index ? "rotate-180" : "rotate-0"
                        }`}
                      >
                        {/* Dropdown Arrow */}
                        <DropdownArrow
                          openDropdown={openDropdown}
                          index={index}
                        />
                      </span>
                    </span>
                  </Menu.Button>
                  {/* Dropdown Menu */}
                  <Transition
                    show={openDropdown === index} // Show dropdown content when openDropdown matches index
                    enter="transition duration-100 ease-out"
                    enterFrom="transform scale-95 opacity-0"
                    enterTo="transform scale-100 opacity-100"
                    leave="transition duration-75 ease-out"
                    leaveFrom="transform scale-100 opacity-100"
                    leaveTo="transform scale-95 opacity-0"
                  >
                    <Menu.Items
                      ref={dropdownRef}
                      className={`absolute left-1/2 -translate-x-1/2 mt-6 origin-top-right rounded-2xl overflow-hidden bg-white ${value.dropdownWidth}`}
                    >
                      {value.sublinks}
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            ))}
          </div>
          <div className="flex gap-[26px] items-center">
            {/* Country Dropdown */}
            <CountryDropdown />
            {/* Sign Up Button */}
            <button className="px-5 pt-3.5 pb-4 rounded-full border-offWhite border text-offWhite text-base font-semibold hover:text-tealBlue hover:border-tealBlue duration-300">
              Sign up
            </button>
            {/* Book Demo Button */}
            <BookDemo />
          </div>
        </div>
        {/* Mobile Navbar Toggle Button */}
        <div
          className="block cursor-pointer xl:hidden"
          onClick={() => {
            setShowNavbar(!showNavbar);
            navScrollHidden();
          }}
        >
          <MenuBar />
        </div>
      </div>
      {/* Mobile Navbar */}
      <div
        className={`xl:hidden block fixed top-0 w-full max-w-[500px] duration-300 mobile_navbar  z-50 ${
          showNavbar ? "left-0" : "left-[-600px]"
        }`}
      >
        {/* Render Mobile Navbar component */}
        <MobileNav setShowNavbar={setShowNavbar} scrollRemove={scrollRemove} />
      </div>
      {/* Background Layer for Mobile Navbar */}
      <div
        onClick={() => {
          setShowNavbar(false);
          scrollRemove();
        }}
        className={`w-full min-h-screen fixed top-0 left-0 bg-darkBlue bg-opacity-70 z-40 ${
          showNavbar ? "block xl:hidden" : "hidden"
        }`}
      ></div>
    </div>
  );
};

export default Navbar;
