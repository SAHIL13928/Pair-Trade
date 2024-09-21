import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend } from 'chart.js';
import React from 'react';
import { Line } from 'react-chartjs-2';
import { useLocation } from 'react-router-dom';

// Register Chart.js components
ChartJS.register(
  CategoryScale,  // For x-axis (categories)
  LinearScale,    // For y-axis (linear scale)
  LineElement,    // For drawing lines in the chart
  PointElement,   // For drawing points in the chart
  Title,          // For chart titles
  Tooltip,        // For tooltips
  Legend          // For chart legends
);

function StockDetails() {
  const location = useLocation();
  const { row } = location.state || {}; // Access the row data passed via state

  const graphData = {
    labels: Array.from({ length: 24 }, (_, i) => `${i + 1}h`), // Example labels (24 hours)
    datasets: [
      {
        label: `${row.stock1} Price`,
        data: [995, 980, 970, 960, 945, 950, 940, 930, 920, 915, 925, 940, 930, 945, 940, 960, 970, 980, 975, 990, 995, 980, 970, 960], // Example data
        borderColor: 'blue',
        fill: false,
        tension: 0.1,
      },
      {
        label: `${row.stock2} Price`,
        data: [962, 950, 945, 930, 920, 915, 910, 905, 895, 880, 875, 870, 860, 855, 850, 845, 835, 825, 830, 840, 850, 860, 870, 875], // Example data
        borderColor: 'red',
        fill: false,
        tension: 0.1,
      },
    ],
  };

  return (
    <div className="page-container p-5 min-h-screen">
      <div className="max-w-[62%] mr-auto">
        {/* Trading Formula Section */}
        <h2 className='text-2xl font-bold text-cebter mb-4'>PEPSI-COKE Pair</h2>
        <div className=" bg-white rounded-lg border- mb-4 h-auto">
          
  {/* Content of the box */}
<div className="pt-2 pb-4 px-4">
  <div className="grid grid-cols-4 h-full">
    {/* Top-left: Regression Equation */}
    <div className="col-span-2 flex items-center justify-start">
      <p className="font-bold pl-4">Regression Equation</p>
    </div>

    {/* Middle content (spanning full width) */}
    <div className="col-span-4 text-center ">
      <p className="text-2xl pl-2">PEPSI = 2 COKE + 5 + RESIDUAL</p>
    </div>

    {/* Bottom-left: Correlation */}
    <div className="col-span-2 flex items-center justify-start">
      <p className="font-bold pl-4">Correlation:</p>
      <p className="text-sm ml-1">0.95</p>
    </div>

    {/* Bottom-right: Co-integration */}
    <div className="col-span-2 flex items-center justify-end">
      <p className="font-bold mr-1">Co-integration:</p>
      <p className="text-sm font-bold">{0.05}</p>
    </div>
  </div>
</div>

</div>






       {/* First Row (Similar to MainContent) */}
<div className="rounded-lg bg-white mb-5 p-0">
  <div className="grid text-center grid-cols-4 gap-0">
    {/* Stock 1 */}
    <div className="flex flex-col rounded-xl items-center p-4 space-y-1 text-white" 
      style={{ backgroundColor: row.change1 > 0 ? 'rgba(34,197,94,0.7)' : 'rgba(239,68,68,0.7)', margin: 0 }}>
      <p className="text-2xl mb-1">{row.stock1}</p>
      <div className="flex items-center space-x-2">
        <p className="text-sm">${row.price1}</p>
        <p className="text-xs">
          {row.change1 > 0 ? '+' : ''}{row.change1}%
        </p>
      </div>
      <p className="text-xs font-bold">{`BUY @ ${row.buyPrice}`}</p> {/* Added under Stock 1 */}
    </div>
    
    {/* Stock 2 */}
    <div className="flex flex-col rounded-xl items-center p-4 space-y-1 text-white"
      style={{ backgroundColor: row.change2 > 0 ? 'rgba(34,197,94,0.7)' : 'rgba(239,68,68,0.7)', margin: 0 }}>
      <p className="text-2xl mb-1">{row.stock2}</p>
      <div className="flex items-center space-x-2">
        <p className="text-sm">${row.price2}</p>
        <p className="text-xs">
          {row.change2 > 0 ? '+' : ''}{row.change2}%
        </p>
      </div>
      <p className="text-xs font-bold">{`SHORT @ ${row.shortPrice}`}</p> {/* Added under Stock 2 */}
    </div>
    
    {/* Algo Score */}
    <div className="flex flex-col justify-between">
      <div className="text-2xl py-4 p-4">{row.algo}</div>
      <div className="text-xs font-bold p-4">{`Target % ${row.targetPercentage}`}</div> {/* Target % in the bottom-right */}
    </div>
    
    {/* Residue Score */}
    <div className="flex flex-col justify-between">
      <div className="text-2xl py-4 p-4">{row.residue}</div>
      <div className="text-xs font-bold p-4">{`RR ${row.rrRatio}`}</div> {/* RR in the bottom-right */}
    </div>
  </div>
</div>

        {/* Graph Section */}
        <div className="bg-white p-4  rounded-lg mb-6 border-2 " style={{ height: '400px', width: '100%'  }}>
          <h3 className="text-lg font-bold pl-2">Price Changes in Last 24 Hours</h3>
          <Line
            data={graphData}
            options={{
              maintainAspectRatio: false,
              responsive: true,
            }}
          />
        </div>

       
        {/* Past Trades Table */}
        <div className="bg-white rounded-lg border-2  ">
          
            <h3 className="text-lg font-bold pl-5 py-3 ">Past Trades (Last 30 Days)</h3>
        
          <div className="p-4">
            <table className="min-w-full table-auto">
              <thead>
                <tr>
                  <th className="border-b text-left p-2">Date</th>
                  <th className="border-b text-left p-2">Stock</th>
                  <th className="border-b text-left p-2">Action</th>
                  <th className="border-b text-left p-2">Price</th>
                </tr>
              </thead>
              <tbody>
                {/* Dummy Data for Past Trades */}
                <tr>
                  <td className="border-b p-2">2024-09-10</td>
                  <td className="border-b p-2">{row.stock1}</td>
                  <td className="border-b p-2">BUY</td>
                  <td className="border-b p-2">$950</td>
                </tr>
                <tr>
                  <td className="border-b p-2">2024-09-09</td>
                  <td className="border-b p-2">{row.stock2}</td>
                  <td className="border-b p-2">SELL</td>
                  <td className="border-b p-2">$960</td>
                </tr>
                {/* Add more dummy rows as needed */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StockDetails;
