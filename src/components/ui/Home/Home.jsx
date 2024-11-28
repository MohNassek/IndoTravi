import React from 'react';
import BackgroundImage from '../../common/image/BackgroundImage';
import Header from './Header';
import SearchComponents from '../../common/section/SearchComponent';
import CompanyCard from './CompanyCard';

function HomePage() {
    return (
        <>
            <BackgroundImage imageUrl="/images/Bg.jpg">
                <Header />

                <div className="flex flex-col items-center justify-center w-full h-full text-white text-center px-4 sm:px-6 md:px-8">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 w-[60%]">
                        Extraordinary natural and cultural charm
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6">
                        Your journey starts here. Explore the world with us.
                    </p>
                    <SearchComponents />
                </div>
            </BackgroundImage>
            <CompanyCard />

           
            
        </>
    );
}

export default HomePage;
