
import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <div className="text-2xl font-bold">
          MyLogo
        </div>

        {/* Navigation Links */}
        <div className="flex gap-8">
          <Link
            to="/Home"
            className="hover:text-yellow-300 font-medium transition duration-300"
          >
            Home
          </Link>

          <Link
            to="/About"
            className="hover:text-yellow-300 font-medium transition duration-300"
          >
            About
          </Link>

          <Link
            to="/Contact"
            className="hover:text-yellow-300 font-medium transition duration-300"
          >
            Contact
          </Link>

          <Link
            to="/Help"
            className="hover:text-yellow-300 font-medium transition duration-300"
          >
            Help
          </Link>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;