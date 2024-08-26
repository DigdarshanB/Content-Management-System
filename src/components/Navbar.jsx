import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate(); // Hook to navigate programmatically

  const handleLoginClick = () => {
    navigate('/login'); // Navigate to the login page
  };

  return (
    <nav className="bg-gray-800 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-white text-2xl font-semibold">
          WildernessExp
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-4">
          <li>
            <a href="/" className="text-white hover:text-gray-300">Home</a>
          </li>
          <li>
            <a href="/about" className="text-white hover:text-gray-300">About</a>
          </li>
          <li>
            <a href="/products" className="text-white hover:text-gray-300">Products</a>
          </li>
        </ul>
        
        {/* Login/Register */}
        <div className="space-x-4">
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-200 ease-in-out"
            onClick={handleLoginClick}
          >
            Login
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
