import React, { useState } from "react";
import { Link } from "react-scroll";
import menuIcon from "../images/menu.png"; // Menu icon
import trendyLogo from "../images/logo.jpg"; // Trendy Nails Spot Logo

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="fixed w-full bg-green-900 shadow-md z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center cursor-pointer">
        {/* Logo */}
        <div className="flex items-center">
          <img src={trendyLogo} alt="Trendy Nails Spot" className="h-10 w-10 mr-2 rounded-full" />
          <h1 className="text-xl font-bold text-yellow-400">Trendy Nails Spot</h1>
        </div>

        {/* Menu Icon for Small Screens */}
        <button
          className="lg:hidden p-2 focus:outline-none text-gray-100"
          onClick={toggleMenu}
        >
          <img src={menuIcon} alt="Menu" className="h-8 w-8 " />
        </button>

        {/* Desktop Links */}
        <nav className="hidden lg:flex space-x-6">
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="hover:border-b-2 border-yellow-400 text-white transition"
          >
            Home
          </Link>
          <Link
            to="service"
            smooth={true}
            duration={500}
            className="hover:border-b-2 border-yellow-400 text-white transition"
          >
            Services
          </Link>
          <Link
            to="gallery"
            smooth={true}
            duration={500}
            className="hover:border-b-2 border-yellow-400 text-white transition"
          >
            Gallery
          </Link>
          <Link
            to="booking"
            smooth={true}
            duration={500}
            className="hover:border-b-2 border-yellow-400 text-white transition"
          >
            Booking
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="hover:border-b-2 border-yellow-400 text-white transition"
          >
            Contact
          </Link>
        </nav>
      </div>

      {/* Mobile Toggle Menu */}
      {menuOpen && (
        <div
          className="fixed right-0 top-0 w-3/4 h-full bg-transparent z-50 transition-transform transform translate-x-0 duration-500 ease-out"
        >
          <div className="flex justify-end p-4">
            <button
              className="text-gray-100 text-2xl font-bold cursor-pointer"
              onClick={closeMenu}
            >
              &times;
            </button>
          </div>
          <nav className="flex flex-col items-end space-y-4 mt-8 pr-4">
            <Link
              to="home"
              smooth={true}
              duration={500}
              onClick={closeMenu}
              className="w-32 text-center cursor-pointer text-black bg-yellow-400 py-2 rounded-md shadow-lg transition hover:bg-yellow-500"
            >
              Home
            </Link>
            <Link
              to="service"
              smooth={true}
              duration={500}
              onClick={closeMenu}
              className="w-32 text-center cursor-pointer text-black bg-yellow-400 py-2 rounded-md shadow-lg transition hover:bg-yellow-500"
            >
              Services
            </Link>
            <Link
              to="gallery"
              smooth={true}
              duration={500}
              onClick={closeMenu}
              className="w-32 text-center cursor-pointer text-black bg-yellow-400 py-2 rounded-md shadow-lg transition hover:bg-yellow-500"
            >
              Gallery
            </Link>
            <Link
              to="booking"
              smooth={true}
              duration={500}
              onClick={closeMenu}
              className="w-32 text-center cursor-pointer text-black bg-yellow-400 py-2 rounded-md shadow-lg transition hover:bg-yellow-500"
            >
              Booking
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              onClick={closeMenu}
              className="w-32 text-center cursor-pointer text-black bg-yellow-400 py-2 rounded-md shadow-lg transition hover:bg-yellow-500"
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
