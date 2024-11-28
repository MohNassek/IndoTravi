import React from "react";
import HowItWorksLeft from "./HowItWorksLeft";
import HowItWorksRight from "./HowItworksRight";

const HowItWorks = () => {
  return (
    <section className="w-[85%] mx-auto flex flex-col lg:flex-row items-stretch gap-6">
      {/* Left Section */}
      <div className="flex-1 lg:flex-[1.6] flex items-stretch">
        <HowItWorksLeft />
      </div>

      {/* Right Section */}
      <div className="flex-1 lg:flex-[1.4] flex items-stretch">
        <HowItWorksRight />
      </div>
    </section>
  );
};

export default HowItWorks;
