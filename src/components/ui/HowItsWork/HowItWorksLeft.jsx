import React from "react";
import SearchComponent from '../../common/section/SearchComponent';

const HowItWorksLeft = () => {
  return (
    <div className="relative w-full h-screen lg:h-auto rounded-lg overflow-hidden shadow-md group">
      {/* Background Image */}
      <img
        src="images/Howit.jpg" 
        alt="Tourist Destination"
        className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
      />

      {/* Bottom Description */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-transparent to-transparent text-white p-6 opacity-90 group-hover:opacity-100 transition-opacity duration-500">
        <SearchComponent />
        <p className="text-sm sm:text-base">
          Embark on a journey to find your dream destination, where adventure
          and relaxation await, creating unforgettable memories along the way.
        </p>
      </div>
    </div>
  );
};

export default HowItWorksLeft;
