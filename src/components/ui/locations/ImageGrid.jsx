import React from "react";
import HighlightSection from "../../common/section/HighlightSection"; 
import ImageCard from "../../common/cards/ImageCard"; 
import {destinations} from '../../../utils/constant'
import {highlightContentLocation} from '../../../utils/constant';

const ImageGrid = () => {
  return (
    <div className="w-[90%] mx-auto py-8">
      
      <HighlightSection
        heading={highlightContentLocation.heading}
        subheading={highlightContentLocation.subheading}
        description={highlightContentLocation.description}
      />

     
      <div className="lg:grid lg:grid-cols-12 lg:gap-6 grid grid-cols-1 gap-6">
        <div className="lg:col-span-4">
          <ImageCard
            image={destinations[0].image}
            head={destinations[0].head}
            description={destinations[0].description}
          />
        </div>
        <div className="lg:col-span-8">
          <ImageCard
            image={destinations[1].image}
            head={destinations[1].head}
            description={destinations[1].description}
          />
        </div>
      </div>

    
      <div className="mt-6" />  
      <div className="lg:grid lg:grid-cols-12 lg:gap-6 grid grid-cols-1 gap-6">
        <div className="lg:col-span-8">
          <ImageCard
            image={destinations[2].image}
            head={destinations[2].head}
            description={destinations[2].description}
          />
        </div>
        <div className="lg:col-span-4">
          <ImageCard
            image={destinations[3].image}
            head={destinations[3].head}
            description={destinations[3].description}
          />
        </div>
      </div>
    </div>
  );
};

export default ImageGrid;
