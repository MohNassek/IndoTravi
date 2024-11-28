import React from "react";
import { steps } from "../../../utils/constant";

const HowItWorksRight = () => {
  return (
    <div className="lg:w-full max-w-[600px] mx-auto">
      <h3 className="text-gray-500 text-sm font-semibold mb-2">How it works</h3>
      <h2 className="text-3xl sm:text-4xl font-bold text-black mb-6">
        One click for you
      </h2>
      <div className="space-y-6">
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex items-start gap-4 bg-gray-50 p-4 rounded-lg shadow-sm transition-transform transform hover:scale-105 hover:bg-blue-50 hover:shadow-md"
          >
            {/* Render the icon inside a span */}
            <span className="text-3xl text-blue-500">
              {typeof step.icon === "string" ? (
                step.icon.startsWith("/") ? (
                  <img src={step.icon} alt={step.title} className="w-10 h-10" />
                ) : (
                  step.icon
                )
              ) : (
                step.icon // Render as React component
              )}
            </span>

            {/* Title and description */}
            <div>
              <h4 className="text-xl font-semibold text-gray-800">{step.title}</h4>
              <p className="text-gray-600 text-sm">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorksRight;
