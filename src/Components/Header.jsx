import React from 'react';
import { FaSearch } from 'react-icons/fa'; // Import the search icon

function Header() {
  return (
    <header className="flex justify-center items-center p-6 bg-gray-100 shadow">
      <div className="relative flex items-center w-full max-w-xl"> 
        <input 
          type="text" 
          placeholder="Search..." 
          className="w-full p-3 pr-20 rounded-full bg-white outline-none ring-2 ring-blue-700" // Added focus ring
        />
        <div className="absolute right-0 mr-2 p-2 px-4 rounded-full bg-blue-700 flex items-center justify-center"> 
          <FaSearch className="text-white" />
        </div>
      </div>
    </header>
  );
}

export default Header;
