import React from "react";

const TourCard = ({ image, days, rating, date, title, price }) => {
  return (
    <div className="relative w-72 h-96 rounded-xl shadow-lg overflow-hidden bg-gray-100 transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
      {/* Image */}
      <img src={image} alt={title} className="w-full h-full object-cover" />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/20"></div>

      {/* Days Tag */}
      <div className="absolute top-4 left-4 bg-gray-800 text-white text-sm py-1 px-3 rounded-full">
        {days}
      </div>

      {/* Rating Tag */}
      <div className="absolute top-4 right-4 bg-gray-800 text-yellow-400 text-sm flex items-center py-1 px-3 rounded-full">
        <span>⭐ {rating}</span>
      </div>

      {/* Content Section */}
      <div className="absolute bottom-4 left-4 right-4 bg-white/80 backdrop-blur-md text-gray-800 p-3 rounded-lg">
        <div className="text-sm text-gray-400">{date}</div>
        <div className="font-semibold text-lg">{title}</div>
        <div className="text-lg font-bold text-orange-500">{price}</div>
      </div>
    </div>
  );
};

export default TourCard;
