import React, { useState } from "react";

const LanguageToggle = () => {
  const [isEnglish, setIsEnglish] = useState(true);

  const handleToggle = () => {
    setIsEnglish((prev) => !prev);
  };

  return (
    <div
      className="relative flex items-center w-16 h-8 p-1 bg-gray-300 rounded-full cursor-pointer"
      onClick={handleToggle}
    >
      {/* Toggle Ball */}
      <div
        className={`absolute w-6 h-6 bg-white rounded-full shadow-md transition-transform ${
          isEnglish ? "translate-x-8" : "translate-x-0"
        }`}
      ></div>

      {/* Text: De */}
      <span
        className={`absolute left-2 text-sm font-medium ${
          isEnglish ? "text-gray-400" : "text-black"
        }`}
      >
        De
      </span>

      {/* Text: En */}
      <span
        className={`absolute right-2 text-sm font-medium ${
          isEnglish ? "text-black" : "text-gray-400"
        }`}
      >
        En
      </span>
    </div>
  );
};

export default LanguageToggle;
