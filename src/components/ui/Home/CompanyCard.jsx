import React from 'react';
import HomeCard from '../../common/cards/HomeCard';
import { homeCards } from '../../../utils/constant';

function CompanyCard() {
    return (
        <div className="mt-[-50px] flex flex-wrap items-center justify-center md:justify-between w-[90%] mx-auto gap-2">
            {homeCards.map((card) => (
                <HomeCard key={card.description} title={card.count} subtitle={card.description} />
            ))}
        </div>
    );
}

export default CompanyCard;
