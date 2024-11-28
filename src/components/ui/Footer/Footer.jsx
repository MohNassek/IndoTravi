import React from "react";
import { FaInstagram, FaFacebook, FaYoutube } from 'react-icons/fa';
import Button from "../../common/buttons/Button";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About Section */}
        <div>
          <h3 className="font-semibold text-lg mb-4">About</h3>
          <ul className="space-y-2 text-gray-400">
            <li>About Us</li>
            <li>Blog</li>
            <li>Careers</li>
            <li>Jobs</li>
            <li>In Press</li>
            <li>Gallery</li>
          </ul>
        </div>

        {/* Support Section */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Support</h3>
          <ul className="space-y-2 text-gray-400">
            <li>Contact Us</li>
            <li>Online Chat</li>
            <li>WhatsApp</li>
            <li>Telegram</li>
            <li>Ticketing</li>
            <li>Call Center</li>
          </ul>
        </div>

        {/* FAQ Section */}
        <div>
          <h3 className="font-semibold text-lg mb-4">FAQ</h3>
          <ul className="space-y-2 text-gray-400">
            <li>Account</li>
            <li>Booking</li>
            <li>Payments</li>
            <li>Returns</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Newsletter</h3>
          <p className="text-gray-400 mb-4">
            Don't miss out on the exciting world of travel – subscribe now and
            embark on a journey of discovery with us.
          </p>
          <div className="flex items-center bg-gray-800 rounded-full overflow-hidden relative mb-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-gray-800 text-white px-4 py-2 focus:outline-none flex-grow"
            />
            <div className="absolute right-0">
              <Button
                onClick={() => console.log("Email Subscribed")}
                className="-mr-3 bg-white text-grey px-6 py-2 text-sm rounded-full shadow hover:bg-blue-600 transition-colors"
              >
                Subscribe
              </Button>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="flex justify-center space-x-4">
            <a href="#" className="text-gray-500 hover:text-white">
              <FaInstagram className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-500 hover:text-white">
              <FaFacebook className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-500 hover:text-white">
              <FaYoutube className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-800 mt-10 pt-6 text-gray-500 text-center">
        <p>&copy; 2023 Indotravi, All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
