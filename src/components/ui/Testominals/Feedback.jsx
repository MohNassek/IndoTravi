import React, { useState } from "react";
import Testimonial from "../../common/section/Testimonals";
import { testimonials} from '../../../utils/constant';


const Feedback = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="w-[90%] mx-auto grid grid-cols-12 items-center gap-4">
      
      <div className="mx-auto col-span-12 md:col-span-3 flex flex-col items-center md:items-start justify-center gap-2">
        <img
          src={testimonials[currentIndex].image}
          alt={testimonials[currentIndex].name}
          className="w-32 h-32 rounded-full object-cover shadow-lg"
        />
        <div className="flex space-x-2 mx-auto">
          <button
            onClick={handlePrev}
            className="text-gray-700 hover:text-black px-3 py-1"
          >
            ←
          </button>
          <button
            onClick={handleNext}
            className="text-gray-700 hover:text-black px-3 py-1"
          >
            →
          </button>
        </div>
      </div>

      
      <div className="col-span-12 md:col-span-9">
        <Testimonial
          name={testimonials[currentIndex].name}
          title={testimonials[currentIndex].title}
          feedback={testimonials[currentIndex].feedback}
        />
      </div>
    </div>
  );
};

export default Feedback;
