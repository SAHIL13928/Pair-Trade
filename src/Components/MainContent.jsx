import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

function MainContent() {
  const [timeline, setTimeline] = useState('1h');

  // Sample data for stocks
  const stockRows = [
    { stock1: 'PEPSI', price1: 995, change1: 24, stock2: 'COKE', price2: 962, change2: -51, algo: '87.1%', residue: 56 },
    { stock1: 'YAHOO', price1: 642, change1: 17, stock2: 'GOOGLE', price2: 241, change2: -31, algo: '59%', residue: 78 },
    { stock1: 'AMAZON', price1: 3400, change1: 12, stock2: 'APPLE', price2: 175, change2: -8, algo: '72.5%', residue: 45 },
    { stock1: 'TESLA', price1: 650, change1: 20, stock2: 'MICROSOFT', price2: 290, change2: -5, algo: '65.3%', residue: 45 }
  ];

  return (
    <div className="flex-1 bg-gray-100 p-6 relative">
      <div className="max-w-[62%] mr-auto">
        {/* Timeline Buttons */}
        <div className="flex justify-end mb-3">
          <div className="flex border border-blue-800 rounded-full overflow-hidden">
            <button 
              className={`py-1 px-3 ${timeline === '1h' ? 'bg-gray-200 text-blue-600' : 'text-blue-600'}`}
              onClick={() => setTimeline('1h')}
            >
              1h
            </button>
            <button 
              className={`py-1 px-2 ${timeline === '2h' ? 'bg-gray-200 text-blue-600' : 'text-blue-600'}`}
              onClick={() => setTimeline('2h')}
            >
              2h
            </button>
            <button 
              className={`py-1 px-3 ${timeline === '10h' ? 'bg-gray-200 text-blue-600' : 'text-blue-600'}`}
              onClick={() => setTimeline('10h')}
            >
              10h
            </button>
            <button 
              className={`py-1 px-3 ${timeline === '1Day' ? 'bg-gray-200 text-blue-600' : 'text-blue-600'}`}
              onClick={() => setTimeline('1Day')}
            >
              1D
            </button>
          </div>
        </div>

        {/* Header Row */}
        <div className="bg-gradient-to-r from-blue-600 via-blue-600 to-blue-800 p-4 shadow rounded-2xl">
          <div className="grid grid-cols-4 text-center items-center">
            <h3 className="text-white font-bold text-xl">Stock X</h3>
            <h3 className="text-white font-bold text-xl">Stock Y</h3>
            <div className="relative">
              <h3 className="text-white font-bold text-xl">Algo Score</h3>
              <button className="absolute right-0 top-1/2 transform -translate-y-1/2 p-3">
                <FontAwesomeIcon icon={faInfoCircle} className="text-white text-lg" />
              </button>
            </div>
            <div className="relative">
              <h3 className="text-white font-bold text-xl">Residue Score</h3>
              <button className="absolute right-0 top-1/2 transform -translate-y-1/2 p-3">
                <FontAwesomeIcon icon={faInfoCircle} className="text-white text-lg" />
              </button>
            </div>
          </div>
        </div>

       {/* Data Rows */}
<div className="rounded-lg bg-white">
  {stockRows.map((row, index) => (
    <Link 
      key={index} 
      to={`/stocks/${row.stock1.toLowerCase()}/${row.stock2.toLowerCase()}`}
      state={{ row }} // Pass the entire row data via state
      className="block transition-all duration-200 cursor-pointer hover:bg-gray-200 hover:shadow-lg hover:scale-105"
    >
      {/* Add a white border between rows */}
      <div className="grid grid-cols-4 text-center border-b border-white">
        {/* Stock 1 */}
        <div 
          className={`flex flex-col rounded-xl items-center p-4 ${row.change1 > 0 ? 'bg-green-500' : 'bg-red-500'}`}
        >
          <p className="font text-2xl text-white">{row.stock1}</p>
          <div className="flex items-center space-x-2">
            <p className="text-sm text-white">${row.price1}</p>
            <p className={`text-xs text-white`}>
              {row.change1 > 0 ? '+' : ''}{row.change1}%
            </p>
          </div>
        </div>

        {/* Stock 2 */}
        <div 
          className={`flex flex-col rounded-xl items-center p-4 ${row.change2 > 0 ? 'bg-green-500' : 'bg-red-500'}`}
        >
          <p className="font text-2xl text-white">{row.stock2}</p>
          <div className="flex items-center space-x-2">
            <p className="text-sm text-white">${row.price2}</p>
            <p className={`text-xs text-white`}>
              {row.change2 > 0 ? '+' : ''}{row.change2}%
            </p>
          </div>
        </div>

        {/* Algo Score */}
        <div className="font text-2xl p-6">{row.algo}</div>

        {/* Residue Score */}
        <div className="font text-2xl p-6">{row.residue}</div>
      </div>
    </Link>
  ))}
</div>

      </div>
    </div>
  );
}

export default MainContent;
