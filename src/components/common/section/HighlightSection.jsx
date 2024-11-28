// HighlightSection.js
import React from "react";

// HighlightSection component made reusable with props
const HighlightSection = ({ heading, subheading, description }) => {
  return (
    <section className=" w-[90%] mx-auto rounded flex flex-col lg:flex-row items-start lg:items-center px-6 py-8 sm:py-12 sm:px-16  gap-8">
      {/* Heading on the right for larger screens */}
      <div className="lg:w-1/2">
        <h2 className="text-sm text-gray-500 font-semibold mb-2 sm:mb-4">
          {subheading}
        </h2>
        <h1 className="text-3xl sm:text-5xl font-bold text-black">
          {heading}
        </h1>
      </div>
      {/* Description on the left for larger screens */}
      <div className="lg:w-1/2">
        <p className="text-gray-600 text-lg sm:text-xl">
          {description}
        </p>
      </div>
    </section>
  );
};

export default HighlightSection;
