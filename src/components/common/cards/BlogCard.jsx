import React from "react";

const BlogCard = ({ image, date, title, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <p className="text-sm text-gray-500">{date}</p>
        <h3 className="text-lg font-semibold text-gray-800 mt-2">
          {title}
        </h3>
        <p className="text-gray-600 mt-2 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default BlogCard;
