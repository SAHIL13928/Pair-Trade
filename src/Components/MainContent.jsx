import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

function MainContent() {
  const [showPopup, setShowPopup] = useState({ algo: false, residue: false });
  const [timeline, setTimeline] = useState('1h');

  return (
    <div className="flex-1 bg-gray-100 p-6 relative">
      {/* Timeline Buttons */}
      <div className="absolute top-1 right-12 flex border border-blue-800 rounded-full overflow-hidden">
        <button 
          className={`py-1 px-3 bg-white border-blue-800 ${timeline === '1h' ? 'bg-gray-200' : 'bg-blue-600 text-blue-600'}`}
          onClick={() => setTimeline('1h')}
        >
          1h
        </button>
        <button 
          className={`py-1 px-3 bg-white border-blue-800 ${timeline === '2h' ? 'bg-gray-200' : 'bg-blue-600 text-blue-600'}`}
          onClick={() => setTimeline('2h')}
        >
          2h
        </button>
        <button 
          className={`py-1 px-3 bg-white border-blue-800 ${timeline === '10h' ? 'bg-gray-200' : 'bg-blue-600 text-blue-600'}`}
          onClick={() => setTimeline('10h')}
        >
          10h
        </button>
        <button 
          className={`py-1 px-3 bg-white border-blue-800 ${timeline === '24h' ? 'bg-gray-200' : 'bg-blue-600 text-blue-600'}`}
          onClick={() => setTimeline('24h')}
        >
          24h
        </button>
      </div>

      <div className="flex-1 bg-gray-100 p-6">
        {/* Grid Header */}
        <div className="grid grid-cols-4 gap-4">
          <div className="bg-gradient-to-r from-blue-600 via-blue-600 to-blue-800 p-4 rounded-[50px] shadow relative">
            <h3 className="text-white text-center font-bold">Stock X</h3>
          </div>
          <div className="bg-gradient-to-r from-blue-600 via-blue-600 to-blue-800 p-4 rounded-[50px] shadow relative">
            <h3 className="text-white text-center font-bold">Stock Y</h3>
          </div>
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
          <div className="bg-gradient-to-r from-blue-600 via-blue-600 to-blue-800 p-4 rounded-[50px] shadow relative">
            <h3 className="text-white text-center font-bold">Residue Score</h3>
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

         {/* Merged Row 1 */}
         <div className="bg-white p-4 rounded-xl shadow mt-6 col-span-4">
          <div className="grid text-center grid-cols-4 gap-5">
            <div className="flex flex-col items-center">
              <p className="font-bold">PEPSI</p>
              <div className="flex items-baseline">
                <p className="mr-4">$995</p>
                <p className="text-green-500">+24%</p>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <p className="font-bold">COKE</p>
              <div className="flex items-baseline">
                <p className="mr-4">$962</p>
                <p className="text-red-500">-51%</p>
              </div>
            </div>
            <div>
              <p className="font-bold">87.1%</p>
            </div>
            <div>
              <p className="font-bold">56</p>
            </div>
          </div>
        </div>

        {/* Merged Row 2 */}
        <div className="bg-white p-4 rounded-xl shadow mt-6 col-span-4">
          <div className="grid text-center grid-cols-4 gap-4">
            <div className="flex flex-col items-center">
              <p className="font-bold">YAHOO</p>
              <div className="flex items-baseline">
                <p className="mr-4">$642</p>
                <p className="text-green-500">+17%</p>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <p className="font-bold">GOOGLE</p>
              <div className="flex items-baseline">
                <p className="mr-4">$241</p>
                <p className="text-red-500">-31%</p>
              </div>
            </div>
            <div>
              <p className="font-bold">59%</p>
            </div>
            <div>
              <p className="font-bold">78</p>
            </div>
          </div>
        </div>

        {/* Merged Row 3 */}
        <div className="bg-white p-4 rounded-xl shadow mt-6 col-span-4">
          <div className="grid text-center grid-cols-4 gap-4">
            <div className="flex flex-col items-center">
              <p className="font-bold">AMAZON</p>
              <div className="flex items-baseline">
                <p className="mr-4">$3,400</p>
                <p className="text-green-500">+12%</p>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <p className="font-bold">APPLE</p>
              <div className="flex items-baseline">
                <p className="mr-4">$175</p>
                <p className="text-red-500">-8%</p>
              </div>
            </div>
            <div>
              <p className="font-bold">72.5%</p>
            </div>
            <div>
              <p className="font-bold">45</p>
            </div>
          </div>
        </div>
         {/* Merged Row 4 */}
         <div className="bg-white p-4 rounded-xl shadow mt-6 col-span-4">
          <div className="grid text-center grid-cols-4 gap-4">
            <div className="flex flex-col items-center">
              <p className="font-bold">TESLA</p>
              <div className="flex items-baseline">
                <p className="mr-4">$650</p>
                <p className="text-green-500">+20%</p>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <p className="font-bold">MICROSOFT</p>
              <div className="flex items-baseline">
                <p className="mr-4">$290</p>
                <p className="text-red-500">-5%</p>
              </div>
            </div>
            <div>
              <p className="font-bold">65.3%</p>
            </div>
            <div>
              <p className="font-bold">45</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainContent;
