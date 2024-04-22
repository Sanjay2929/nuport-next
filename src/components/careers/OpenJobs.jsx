"use client";
import { Listbox, Transition } from "@headlessui/react";
import { useState } from "react";
import { DropdownArrowBlack } from "../common/Icons";

const people = [
  { id: 1, name: "All Locations" },
  { id: 2, name: "Dubai" },
  { id: 3, name: "India" },
  { id: 4, name: "United States"},
  { id: 5, name: "Canada" },
];
const OpenJobs = () => {
  const [selectedPerson, setSelectedPerson] = useState(people[0]);
  return (
    <div className="xl:max-w-[1324px] container px-5 py-16 sm:py-20 md:py-24 lg:py-32 xl:py-40 mx-auto">
      <p className="tracking-[2.5px] font-bold font-plus text-xs md:text-sm lg:text-base text-orangeDark uppercase text-center">
        all open job
      </p>
      <h2 className=" text-[32px] !leading-[110%] text-center sm:text-4xl md:text-5xl lg:text-[52px] xl:text-7xl font-plus font-extrabold pt-3 text-darkBlue ">
        Open <span className="text-garyMedium">positions</span>
      </h2>
      <p className="text-center text-riverBed text-xl font-normal pt-7 pb-10">
        We’re currently looking for help in the following areas:
      </p>
      <div>
        <Listbox
          value={selectedPerson}
          onChange={setSelectedPerson}
          as="div"
          className="relative border border-mischka rounded-xl inline-block w-[303px] px-5 py-4"
        >
          <Listbox.Button className="flex justify-between items-center w-full">
            {selectedPerson.name} <DropdownArrowBlack />
          </Listbox.Button>
          <Transition
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Listbox.Options className="absolute top-full left-0  w-full flex flex-col gap-1 bg-offWhite border border-mischka py-2 rounded-xl duration-300">
              {people.map((person) => (
                <Listbox.Option
                  className="cursor-pointer py-1 px-5 w-full hover:bg-tealBlue hover:bg-opacity-15"
                  key={person.id}
                  value={person}
                >
                  {person.name}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </Listbox>
      </div>
    </div>
  );
};

export default OpenJobs;
