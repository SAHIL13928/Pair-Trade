import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

function MainContent() {
  const [showPopup, setShowPopup] = useState({ algo: false, residue: false });
  const [timeline, setTimeline] = useState('1h');

  return (
    <div className="flex-1 bg-gray-100 p-6 relative">
      <div className="max-w-[62%] mr-auto">
        <div className="grid grid-cols-4 gap-4">
          {/* Stock X */}
          <div className="bg-gradient-to-r from-blue-600 via-blue-600 to-blue-800 p-4 rounded-[50px] shadow relative">
            <h3 className="text-white text-center font-bold">Stock X</h3>
          </div>

          {/* Stock Y */}
          <div className="bg-gradient-to-r from-blue-600 via-blue-600 to-blue-800 p-4 rounded-[50px] shadow relative">
            <h3 className="text-white text-center font-bold">Stock Y</h3>
          </div>

          {/* Algo Score */}
          <div className="bg-gradient-to-r from-blue-600 via-blue-600 to-blue-800 p-4 rounded-[50px] shadow relative">
            <h3 className="text-white text-center font-bold">Algo Score</h3>
            <button 
              className="absolute right-2 top-1/2 transform -translate-y-1/2 rounded-full p-3"
              onClick={() => setShowPopup({ ...showPopup, algo: !showPopup.algo })}
            >
              <FontAwesomeIcon icon={faInfoCircle} className="text-white text-lg" />
            </button>
            {showPopup.algo && (
              <div className="absolute right-2 top-12 w-48 bg-white border border-blue-600 p-2 rounded shadow-lg">
                <p className="text-blue-600">Definition of Algo Score.</p>
              </div>
            )}
          </div>

          {/* Residue Score */}
          <div className="relative">
            {/* Timeline Buttons */}
            <div className="absolute -top-10 left-0 flex  border border-blue-800 rounded-full overflow-hidden mt-1">
              <button 
                className={`py-1 px-3 ${timeline === '1h' ? 'bg-gray-200' : ' text-blue-600'}`}
                onClick={() => setTimeline('1h')}
              >
                1h
              </button>
              <button 
                className={`py-1 px-2 ${timeline === '2h' ? 'bg-gray-200' : ' text-blue-600'}`}
                onClick={() => setTimeline('2h')}
              >
                2h
              </button>
              <button 
                className={`py-1 px-3 ${timeline === '10h' ? 'bg-gray-200' : ' text-blue-600'}`}
                onClick={() => setTimeline('10h')}
              >
                10h
              </button>
              <button 
                className={`py-1 px-3 ${timeline === '24h' ? 'bg-gray-200' : ' text-blue-600'}`}
                onClick={() => setTimeline('24h')}
              >
                24h
              </button>
            </div>
            <div className="bg-gradient-to-r from-blue-600 via-blue-600 to-blue-800 p-4 rounded-[50px] shadow relative">
              <h3 className="text-white text-center font-bold">Residue Scor</h3>
              <button 
                className="absolute right-2 top-1/2 transform -translate-y-1/2 rounded-full p-3"
                onClick={() => setShowPopup({ ...showPopup, residue: !showPopup.residue })}
              >
                <FontAwesomeIcon icon={faInfoCircle} className="text-white text-lg" />
              </button>
              {showPopup.residue && (
                <div className="absolute right-2 top-12 w-48 bg-white border border-blue-600 p-2 rounded shadow-lg">
                  <p className="text-blue-600">Definition of Residue Score.</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Merged Rows */}
        
        {[ 
          { stock1: 'PEPSI', price1: 995, change1: 24, stock2: 'COKE', price2: 962, change2: -51, algo: '87.1%', residue: 56 },
          { stock1: 'YAHOO', price1: 642, change1: 17, stock2: 'GOOGLE', price2: 241, change2: -31, algo: '59%', residue: 78 },
          { stock1: 'AMAZON', price1: 3400, change1: 12, stock2: 'APPLE', price2: 175, change2: -8, algo: '72.5%', residue: 45 },
          { stock1: 'TESLA', price1: 650, change1: 20, stock2: 'MICROSOFT', price2: 290, change2: -5, algo: '65.3%', residue: 45 }
        ].map((row, index) => (
          <div key={index} className="bg-white p-4 rounded-xl shadow mt-6 col-span-4">
            <div className="grid text-center grid-cols-4 gap-5">
              {/* Stock 1 */}
              <div className="flex flex-col items-center">
                <p className="font-bold">{row.stock1}</p>
                <div className="flex items-baseline">
                  <p className="mr-4">${row.price1}</p>
                  <p className={`text-${row.change1 > 0 ? 'green' : 'red'}-500`}>
                    {row.change1 > 0 ? '+' : ''}{row.change1}%
                  </p>
                </div>
              </div>
              {/* Stock 2 */}
              <div className="flex flex-col items-center">
                <p className="font-bold">{row.stock2}</p>
                <div className="flex items-baseline">
                  <p className="mr-4">${row.price2}</p>
                  <p className={`text-${row.change2 > 0 ? 'green' : 'red'}-500`}>
                    {row.change2 > 0 ? '+' : ''}{row.change2}%
                  </p>
                </div>
              </div>
              {/* Algo and Residue */}
              <div className="font-bold">{row.algo}</div>
              <div className="font-bold">{row.residue}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MainContent;
