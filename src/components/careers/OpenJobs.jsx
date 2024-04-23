"use client";
import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import {
  DeadlineClock,
  DropdownArrowBlack,
  Laptop,
  OfficeBuilding,
  VacancyPeople,
} from "../common/Icons";
import { openJobs } from "../common/Helper";
import Image from "next/image";

const people = [
  {
    label: "Locations",
    options: [
      { id: 1, name: "All Locations" },
      { id: 2, name: "Dubai" },
      { id: 3, name: "India" },
      { id: 4, name: "United States" },
      { id: 5, name: "Canada" },
    ],
  },
  {
    label: "Departments",
    options: [
      { id: 1, name: "All Departments" },
      { id: 2, name: "Marketing" },
      { id: 3, name: "Product" },
      { id: 4, name: "UX Designer" },
      { id: 5, name: "Developer" },
    ],
  },
];

const OpenJobs = () => {
  const [selectedLocation, setSelectedLocation] = useState(
    people[0].options[0]
  );
  const [selectedDepartment, setSelectedDepartment] = useState(
    people[1].options[0]
  );
  const [isLocationDropdownOpen, setLocationDropdownOpen] = useState(false);
  const [isDepartmentDropdownOpen, setDepartmentDropdownOpen] = useState(false);

  const toggleLocationDropdown = () => {
    setLocationDropdownOpen(!isLocationDropdownOpen);
    setDepartmentDropdownOpen(false);
  };

  const toggleDepartmentDropdown = () => {
    setDepartmentDropdownOpen(!isDepartmentDropdownOpen);
    setLocationDropdownOpen(false);
  };

  return (
    <div className="xl:max-w-[1324px] container px-5 py-16 sm:py-20 md:py-24 lg:py-32 xl:py-40 mx-auto">
      <p className="tracking-[2.5px] font-bold font-plus text-xs md:text-sm lg:text-base text-orangeDark uppercase text-center">
        all open job
      </p>
      <h2 className="text-[32px] !leading-[110%] text-center sm:text-4xl md:text-5xl lg:text-[52px] xl:text-7xl font-plus font-extrabold pt-3 text-darkBlue ">
        Open <span className="text-garyMedium">positions</span>
      </h2>
      <p className="text-center text-riverBed md:text-xl text-base font-normal md:pt-7 pt-5 md:pb-10 pb-7">
        We’re currently looking for help in the following areas:
      </p>
      <div className="flex items-center flex-row max-[500px]:flex-col max-w-[630px] mx-auto md:gap-6 gap-4 md:pb-[56px] pb-4">
        {people.map((category, index) => (
          <Listbox
            key={index}
            value={index === 0 ? selectedLocation : selectedDepartment}
            onChange={index === 0 ? setSelectedLocation : setSelectedDepartment}
          >
            <div className="relative mt-1 w-full">
              <Listbox.Button
                className="relative w-full cursor-default rounded-lg bg-white py-4 pl-5 pr-10 text-left border border-mischka font-medium"
                onClick={
                  index === 0
                    ? toggleLocationDropdown
                    : toggleDepartmentDropdown
                }
              >
                <span className="block text-riverBed md:text-xl sm:text-lg text-base">
                  {index === 0
                    ? selectedLocation.name
                    : selectedDepartment.name}
                </span>
                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                  <DropdownArrowBlack />
                </span>
              </Listbox.Button>
              <Transition
                as={Fragment}
                show={
                  index === 0
                    ? isLocationDropdownOpen
                    : isDepartmentDropdownOpen
                }
                enter="transition ease-out duration-100"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                  {category.options.map((option, optionIdx) => (
                    <Listbox.Option
                      key={optionIdx}
                      className={({ active }) =>
                        `relative cursor-default select-none py-2 px-4 ${
                          active
                            ? "bg-tealBlue bg-opacity-15 text-tealBlue"
                            : "text-gray-900"
                        }`
                      }
                      value={option}
                      onClick={() => {
                        index === 0
                          ? setLocationDropdownOpen(false)
                          : setDepartmentDropdownOpen(false);
                      }}
                    >
                      {({ selected }) => (
                        <>
                          <span
                            className={`block truncate ${
                              selected ? "font-medium" : "font-normal"
                            }`}
                          >
                            {option.name}
                          </span>
                          {selected && (
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-tealBlue"></span>
                          )}
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </Listbox>
        ))}
      </div>
      <div className="max-w-[1065px] mx-auto">
        {openJobs.length === 0 ? (
          <div className="max-w-[399px] mx-auto flex flex-col items-center md:pt-0 pt-14">
            <Image
              className="sm:w-[170px] w-[158px]"
              width={170}
              height={144}
              src="/assets/images/careers/warehouse.webp"
              alt="warehouse"
            />
            <h3 className="text-center font-bold md:text-2xl sm:text-xl text-base pb-2.5 pt-8">
              No job openings right now!
            </h3>
            <p className="text-center text-sm font-normal md:text-lg text-riverBed pb-[46px]">
              Keep an eye on this space for updates or follow our linkedIn
              profile to keep updated.
            </p>
            <button className="book_demo_btn bg-tealBlue flex items-center gap-2 px-7 lg:pt-2.5 py-3 lg:pb-3.5 rounded-full lg:text-base text-sm font-semibold text-white border-tealBlue  border duration-300">
              Visit LinkedIn Profile
            </button>
          </div>
        ) : (
          openJobs.map((value, index) => (
            <div
              key={index}
              className="flex items-center justify-between sm:py-7 py-6 border-b border-mischka"
            >
              <div className="">
                <span
                  className={`px-2.5 py-[5px] rounded-md font-medium sm:text-sm text-xs text-offWhite inline-block  ${
                    value.department == "Marketing" && "bg-blue"
                  } ${value.department == "Product" && "bg-teal"} ${
                    value.department == "UX Designer" && "bg-orange"
                  } ${value.department == "Developer" && "bg-green"}`}
                >
                  {value.department}
                </span>
                <h2 className="font-bold md:text-[30px] sm:text-2xl text-xl text-shark pt-3 sm:pb-5 pb-3">
                  {value.post}
                </h2>
                <div className="flex items-center gap-2 pb-2 font-medium text-sm">
                  <OfficeBuilding /> <p className="text-graynormal">Office:</p>{" "}
                  <p className="text-shark">{value.location}</p>
                </div>
                <div className="flex items-center gap-2 pb-2 font-medium text-sm">
                  <Laptop /> <p className="text-graynormal">Job Type:</p>{" "}
                  <p className="text-shark">{value.jobType}</p>
                </div>
                <div className="flex items-center gap-2 pb-2 font-medium text-sm">
                  <VacancyPeople /> <p className="text-graynormal">Vacancy:</p>{" "}
                  <p className="text-shark">{value.vacancy}</p>
                </div>
                <div className="flex items-center gap-2 font-medium text-sm">
                  <DeadlineClock /> <p className="text-graynormal">Deadline:</p>{" "}
                  <p className="text-shark">{value.deadline}</p>
                </div>
              </div>
              <button className="book_demo_btn max-[500px]:hidden bg-tealBlue flex items-center gap-2 px-7 lg:pt-2.5 py-3 lg:pb-3.5 rounded-full lg:text-base text-sm font-semibold text-white border-tealBlue  border duration-300">
                Apply Now
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default OpenJobs;
