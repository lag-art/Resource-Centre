import React from 'react';
import logo from '../images/logo.jpg'; // Ensure this path is correct
import TikTokIcon from '../images/Tiktok.jpeg'; // Replace with correct path
import InstagramIcon from '../images/Instagram.jpeg'; // Replace with correct path
import PinterestIcon from '../images/pintrest.jpeg'; // Replace with correct path

const Footer = () => {
  return (
    <footer className="bg-green-950 text-white py-4">
      <div id="contact" className="container mx-auto px-4">
        {/* Grid layout for footer */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Logo Section */}
          <div className="text-center md:text-left">
            <img
              src={logo}
              alt="Trendy Nails Spot Logo"
              className="w-16 h-16 mx-auto md:mx-0 object-cover rounded-full shadow-lg"
            />
            <h1 className="text-yellow-400 text-xl font-bold mt-2">
              Trendy Nails Spot
            </h1>
            <p className="mt-1 text-sm">
              © {new Date().getFullYear()} Trendy Nails Spot. All Rights Reserved.
            </p>
          </div>

          {/* Contact Info Section */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-bold mb-2 text-yellow-400">Contact Us</h3>
            <p>8TH Floor, HH Towers, Moi Avenue</p>
            <p>Around Afya Centre</p>
            <p>Nairobi, Kenya</p>
            <p>📞 0792979705 / 0796801811</p>
          </div>

          {/* Business Hours Section */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-bold mb-2 text-yellow-400">Business Hours</h3>
            <p>Monday-Saturday: 8:00 am - 8:00 pm</p>
            <p>Sunday: 10:00 am - 7:00 pm</p>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="mt-6 text-center">
          <h3 className="text-lg font-bold mb-2 text-yellow-400">Follow Us</h3>
          <div className="flex justify-center space-x-4">
            <a
              href="https://www.tiktok.com/@trendynailsspot"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80"
            >
              <img src={TikTokIcon} alt="TikTok" className="w-6 h-6" />
            </a>
            <a
              href="https://www.instagram.com/trendy_nailsspot/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80"
            >
              <img src={InstagramIcon} alt="Instagram" className="w-6 h-6" />
            </a>
            <a
              href="https://www.pinterest.com/search/pins/?q=trendy%20nails"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80"
            >
              <img src={PinterestIcon} alt="Pinterest" className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
