import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <div className="flex items-center justify-center bg-gray-100 p-4 shadow">
      <div className="relative mr-auto w-full max-w-3xl">  {/* Increased width for a longer search bar */}
        <input 
          type="text" 
          className="w-full p-4 pl-24 rounded-full border border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-black"
          placeholder="Search..." 
        />
        <button className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-blue-600 rounded-full px-6  py-3 flex items-center justify-center">
          <FontAwesomeIcon icon={faSearch} className="text-white h-5 w-5" />
        </button>
      </div>
    </div>
  );
}

export default Header;
