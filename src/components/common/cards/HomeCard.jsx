// CardComponent.jsx
import React from "react";

const CardComponent = ({ title, subtitle }) => {
  return (
    <div className="flex items-center justify-center w-64 h-32 bg-white shadow-md rounded-lg">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
        <p className="text-sm text-gray-500">{subtitle}</p>
      </div>
    </div>
  );
};

export default CardComponent;
