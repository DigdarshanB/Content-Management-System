// src/Components/Navbar.jsx
import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-900 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-white text-2xl font-semibold">
          Digdarshan
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-8">
          <a href="#" className="text-gray-300 hover:text-white transition duration-200 ease-in-out">
            Home
          </a>
          <a href="#" className="text-gray-300 hover:text-white transition duration-200 ease-in-out">
            About
          </a>
          <a href="#" className="text-gray-300 hover:text-white transition duration-200 ease-in-out">
            Products
          </a>
        </div>

        {/* Login/Register */}
        <div className="space-x-4">
          <a href="#" className="text-gray-300 hover:text-white transition duration-200 ease-in-out">
            Login
          </a>
          <a href="#" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-200 ease-in-out">
            Register
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
