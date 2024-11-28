import React from "react";
import TourCard from "..//../common/cards/tourCard";
import HighlightSection from "../../common/section/HighlightSection";
import { tourData } from '../../../utils/constant';
import { highlightContentPackage } from '../../../utils/constant';
import Button from "../../common/buttons/Button";

const Package = () => {
    return (
        <>
            <HighlightSection
                heading={highlightContentPackage.heading}
                subheading={highlightContentPackage.subheading}
                description={highlightContentPackage.description}
            />

            <div className="flex justify-center gap-10 flex-wrap p-6">
                {tourData.map((tour, index) => (
                    <TourCard
                        key={index}
                        image={tour.image}
                        days={tour.days}
                        rating={tour.rating}
                        date={tour.date}
                        title={tour.title}
                        price={tour.price}
                    />
                ))}

                {/* Centered Button Below Cards */}
                <div className="w-full flex justify-center mt-6">
                    <Button
                        onClick={() => console.log('Button clicked!')}
                        className="px-6 py-2 bg-black text-white text-sm font-medium rounded hover:bg-gray-800 transition"
                    >
                        View More
                    </Button>
                </div>
            </div>
        </>
    );
};

export default Package;
