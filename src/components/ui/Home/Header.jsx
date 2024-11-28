import React, { useState } from 'react';
import { navItems } from '../../../utils/constant';
import Button from '../../common/buttons/Button';
import LanguageToggle from '../../common/buttons/Toggle';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false); // State for menu toggle

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="flex justify-between items-center w-[90%] mx-auto bg-transparent">
            {/* Logo Section */}
            <div>
                <h2 className="text-white font-semibold text-xl">INDOTRAVI</h2>
            </div>

            {/* Navigation Menu */}
            <div
                className={`${isMenuOpen ? 'top-0' : 'top-[-100%]'
                    } md:static absolute md:min-h-fit min-h-[60vh] left-0 w-full md:w-auto flex items-center justify-center rounded md:bg-transparent bg-white transition-all duration-500 ease-in-out`}
            >
                <div className="bg-white-80 backdrop-blur-[750px] rounded-full px-6 py-3">
                    <ul className="flex md:flex-row flex-col items-center md:gap-[4vw] gap-4">
                        {navItems.map((item) => (
                            <li key={item.label}>
                                <a
                                    className="hover:text-gray-500"
                                    href={`#${item.label}`}
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Close Button for Mobile */}
                <Button
                    onClick={toggleMenu}
                    className="block md:hidden absolute top-5 right-5"
                >
                    <img
                        src="/icons/close.svg"
                        alt="Close Menu"
                        className="w-6 h-6"
                    />
                </Button>
            </div>

            {/* Login and Language Toggle */}
            <div className="flex items-center gap-2"> {/* Reduced gap between login and menu icon */}
                {/* Language Toggle for all screen sizes */}
                <div className="mr-4"> {/* Added some margin for better spacing */}
                    <LanguageToggle />
                </div>

                <Button
                    onClick={() => console.log('Login Clicked')}
                    className="bg-white rounded-full bg-blue-500 px-6 py-2 hover:bg-blue-600 transition-colors"
                >
                    Login
                </Button>

                {/* Menu Icon for Mobile */}
                <button
                    onClick={toggleMenu}
                    className="block md:hidden p-0 bg-transparent" // Removed background for mobile menu button
                >
                    <img
                        src="/icons/menu.svg"
                        alt="Open Menu"
                        className="w-6 h-6"
                    />
                </button>
            </div>
        </nav>
    );
}

export default Header;
