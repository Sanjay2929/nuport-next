import { Listbox, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { CountiesName } from "./Helper";
import { CounrtyDropdownArrow } from "./Icons";

const CountryDropdown = () => {
  // State to track the selected country
  const [selected, setSelected] = useState(CountiesName[0]);

  return (
    // Listbox component for country selection
    <Listbox value={selected} onChange={setSelected}>
      <div className="relative mt-1 w-[90px]">
        {/* Listbox Button */}
        <Listbox.Button className="relative group cursor-pointer flex gap-1 items-center w-full rounded-lg py-2 pl-3 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
          {/* Selected country name and flag */}
          <span className="flex items-center group-hover:text-tealBlue gap-[7px] duration-300 text-white">
            {selected.flag} {/* Display flag icon */}
            {selected.name} {/* Display country name */}
          </span>
          {/* Dropdown arrow icon */}
          <span className="pointer-events-none right-0 flex items-center">
            <CounrtyDropdownArrow />
          </span>
        </Listbox.Button>
        {/* Transition for options */}
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          {/* Listbox Options */}
          <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-black text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
            {CountiesName.map((country, index) => (
              // Listbox Option for each country
              <Listbox.Option
                key={index}
                className={({ active }) =>
                  `relative select-none p-2 text-black cursor-pointer ${
                    active ? "bg-amber-100 text-amber-900" : "text-gray-900"
                  }`
                }
                value={country}
              >
                {({ selected }) => (
                  <>
                    {/* Display country name and flag */}
                    <span
                      className={`flex items-center gap-2 truncate ${
                        selected ? "font-medium" : "font-normal"
                      }`}
                    >
                      <span className="w-7 block me-1"> {country.flag}</span>
                      {country.name}
                    </span>
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  );
};

export default CountryDropdown;
