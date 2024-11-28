import React, { useState } from "react";
import { searchItems } from "../../../utils/constant";
import Button from "../buttons/Button";

function SearchComponents() {
  const [activeDropdown, setActiveDropdown] = useState(null); // State to track which dropdown is active

  // Toggles the dropdown for a given label
  const toggleDropdown = (label) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  // Resets the dropdowns when the search button is clicked
  const handleSearch = () => {
    setActiveDropdown(null);
    // Add your search logic here if needed
  };

  return (
    <nav className="flex justify-center items-center w-[80%] mx-auto bg-transparent ">
      <div
        className={`w-full md:w-auto flex flex-col md:flex-row md:rounded-full items-center justify-center bg-transparent transition-all duration-500 ease-in-out`}
      >
        {/* Apply backdrop-blur only for tablet/desktop */}
        <div className="backdrop-blur-[550px] bg-white bg-opacity-50 md:rounded-full px-6 py-3 shadow-md w-[80%] md:w-auto">
          {/* Main Search Navigation */}
          <ul className="flex flex-col md:flex-row items-center gap-6 md:gap-[4vw]"> {/* Increased gap for mobile */}
            {searchItems.map((item) => (
              <li key={item.label} className="relative">
                {/* Dropdown Trigger */}
                <button
                  className="hover:text-gray-500 text-sm flex items-center space-x-2"
                  onClick={() => toggleDropdown(item.label)}
                >
                  <span>{item.label}</span>
                  <span className="text-gray-500">&#x25BC;</span>
                </button>

                {/* Dropdown Menu */}
                {activeDropdown === item.label && (
                  <div
                    className={`absolute z-10 top-12 left-0  border rounded-md shadow-lg p-3 w-56 
                      ${item.label === "Date" || item.label === "Budget" || item.label === "Guest" ? "md:left-0 left-1/2 transform md:transform-none -translate-x-1/2" : ""
                      }`}
                  >
                    {item.label === "Date" && (
                      <input
                        type="date"
                        className="block w-full px-2 py-1 border rounded-md text-sm text-black focus:ring-blue-300 focus:border-blue-300"
                      />
                    )}
                    {item.label === "Budget" && (
                      <select
                        className="block w-full px-2 py-1 border rounded-md text-sm text-black focus:ring-blue-300 focus:border-blue-300"
                      >
                        <option value="">Select</option>
                        <option value="low">$</option>
                        <option value="medium">$$</option>
                        <option value="high">$$$</option>
                      </select>
                    )}
                    {item.label === "Guest" && (
                      <div className="flex flex-col items-start gap-2">
                        {/* Label above input on mobile */}
                        <label className="block text-sm font-medium">Guests</label>
                        <input
                          type="number"
                          min="1"
                          placeholder="Guests"
                          className="block w-full px-2 py-1 border rounded-md text-sm text-black focus:ring-blue-300 focus:border-blue-300" // Set font color to black
                        />
                      </div>
                    )}
                  </div>
                )}
              </li>
            ))}

            {/* Search Button */}
            <li>
              <Button
                text="Search"
                onClick={handleSearch}
                className="bg-white w-full md:w-auto px-6 py-2 text-sm bg-blue-500 rounded-full shadow hover:bg-blue-600 transition-colors mt-4 md:mt-0"  // Added margin-top for mobile gap
              >
                Search
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default SearchComponents;
