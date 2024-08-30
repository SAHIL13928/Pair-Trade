import React from 'react';
import { FaTachometerAlt, FaTrophy, FaUser } from 'react-icons/fa'; // Example icons, add more as needed

function Sidebar() {
  return (
    <div className="w-64 bg-gray-100 p-6 h-screen"> {/* Use gray background and full height */}
      <h2 className="text-2xl font-bold mb-6">PAIRTRADING.IN</h2>
      <nav className="space-y-4">
        <a 
          href="#" 
          className="flex items-center text-gray-700 hover:bg-white hover:rounded-md p-3 transition-colors duration-200 group"
        >
          <FaTachometerAlt className="mr-3 group-hover:text-blue-500 transition-colors duration-200" /> {/* Icon turns blue */}
          <span className="group-hover:text-gray-700 transition-colors duration-200">My Profile</span> {/* Text stays gray */}
        </a>
        <a 
          href="#" 
          className="flex items-center text-gray-700 hover:bg-white hover:rounded-md p-3 transition-colors duration-200 group"
        >
          <FaTrophy className="mr-3 group-hover:text-blue-500 transition-colors duration-200" /> {/* Icon turns blue */}
          <span className="group-hover:text-gray-700 transition-colors duration-200">Dashboard</span> {/* Text stays gray */}
        </a>
        <a 
          href="#" 
          className="flex items-center text-gray-700 hover:bg-white hover:rounded-md p-3 transition-colors duration-200 group"
        >
          <FaUser className="mr-3 group-hover:text-blue-500 transition-colors duration-200" /> {/* Icon turns blue */}
          <span className="group-hover:text-gray-700 transition-colors duration-200">FAQs</span> {/* Text stays gray */}
        </a>
        {/* Add more links as needed */}
      </nav>
    </div>
  );
}

export default Sidebar;
