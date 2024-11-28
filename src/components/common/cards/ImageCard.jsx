import React from "react";

const ImageCard = ({ image, head, description }) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-md h-full transition-transform duration-300 ease-in-out hover:shadow-lg hover:scale-105">
      <img
        src={image}
        alt={head}
        className="w-full h-[300px] object-cover"
      />
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-transparent to-transparent p-4">
        <h3 className="text-lg font-semibold text-white">{head}</h3>
        <p className="text-sm text-gray-200">{description}</p>
      </div>
    </div>
  );
};

export default ImageCard;
