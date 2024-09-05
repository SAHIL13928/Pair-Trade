import React from 'react';

function MainContent() {
  return (
    <div className="flex-1 bg-gray-100 p-6">
      {/* Grid Header */}
      <div className="grid grid-cols-4 gap-4">
      <div className="bg-gradient-to-r from-blue-600 via-blue-600 to-blue-800 p-4 rounded-[50px] shadow">
  <h3 className="text-white text-center font-bold">Stock X</h3>
</div>
<div className="bg-gradient-to-r from-blue-600 via-blue-600 to-blue-800 p-4 rounded-[50px] shadow">
  <h3 className="text-white text-center font-bold">Stock Y</h3>
</div>
<div className="bg-gradient-to-r from-blue-600 via-blue-600 to-blue-800 p-4 rounded-[50px] shadow">
  <h3 className="text-white text-center font-bold">Algo Score</h3>
</div>
<div className="bg-gradient-to-r from-blue-600 via-blue-600 to-blue-800 p-4 rounded-[50px] shadow">
  <h3 className="text-white text-center font-bold">Residue Score</h3>
</div>

       
      </div>

      {/* Data Rows */}
      <div className="grid text-center grid-cols-4 gap-4 mt-6">
        <div className="bg-white  p-4 rounded-xl shadow">
          <p>PEPSI</p>
          <p>$995  +24%</p>
        </div>
        <div className="bg-white p-4 rounded-xl shadow">
          <p>COKE</p>
          <p>$962  -51%</p>
        </div>
        <div className="bg-white p-4 rounded-xl shadow">
          <p>87.1%</p>
        </div>
        <div className="bg-white p-4 rounded-xl shadow">
          <p>56</p>
        </div>
      </div>

      <div className="grid text-center grid-cols-4 gap-4 mt-6">
        <div className="bg-white p-4 rounded-xl shadow">
          <p>YAHOO</p>
          <p>$642  +17%</p>
        </div>
        <div className="bg-white p-4 rounded-xl shadow">
          <p>GOOGLE</p>
          <p>$241  -31%</p>
        </div>
        <div className="bg-white p-4 rounded-xl shadow">
          <p>59%</p>
        </div>
        <div className="bg-white p-4 rounded-xl shadow">
          <p>78</p>
        </div>
      </div>
    </div>
  );
}

export default MainContent;
