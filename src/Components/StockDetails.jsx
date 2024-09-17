// Import necessary Chart.js components
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
    <div className="page-container p-6 min-h-screen">
      <div className="max-w-[62%] mr-auto">
        {/* First Row (Similar to MainContent) */}
        <div className="rounded-lg border border-gray-300 bg-white shadow-lg mb-6 p-4">
          <div className="grid text-center grid-cols-4">
            <div className="flex flex-col items-center">
              <p className="font-bold text-xl mb-1">{row.stock1}</p>
              <div className="flex items-center space-x-2">
                <p className="text-sm">${row.price1}</p>
                <p className={`text-${row.change1 > 0 ? 'green' : 'red'}-500 text-xs`}>
                  {row.change1 > 0 ? '+' : ''}{row.change1}%
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <p className="font-bold text-xl mb-1">{row.stock2}</p>
              <div className="flex items-center space-x-2">
                <p className="text-sm">${row.price2}</p>
                <p className={`text-${row.change2 > 0 ? 'green' : 'red'}-500 text-xs`}>
                  {row.change2 > 0 ? '+' : ''}{row.change2}%
                </p>
              </div>
            </div>
            <div className="font-bold text-xl">{row.algo}</div>
            <div className="font-bold text-xl">{row.residue}</div>
          </div>
        </div>

        {/* Separate Row for BUY@, SHORT@, Target%, RR@ */}
        <div className="rounded-lg border border-gray-300 bg-white shadow-lg mb-6 p-4">
          <div className="grid text-center grid-cols-4">
            <div className="font-bold text-xl">BUY @ ${row.buyPrice}</div>
            <div className="font-bold text-xl">SHORT @ ${row.shortPrice}</div>
            <div className="font-bold text-xl">Target % {row.targetPercentage}%</div>
            <div className="font-bold text-xl">RR {row.rrRatio}</div>
          </div>
        </div>

        {/* Graph Section */}
        <div className="bg-white p-4 shadow rounded-lg mb-6">
          <h3 className="text-lg font-bold mb-4 text-center">Price Changes in Last 24 Hours</h3>
          <div style={{ height: '400px' }}>
            <Line
              data={graphData}
              options={{
                maintainAspectRatio: true,
                responsive: true,
              }}
            />
          </div>
        </div>

        {/* Formula Row */}
        <div className="bg-white p-4 shadow rounded-lg mb-6">
          <h3 className="text-lg font-bold mb-4 text-center">Trading Formula</h3>
          <div className="grid grid-cols-4 text-center items-center">
            <div className="col-span-4">
              <p className="font-bold text-xl">PEPSI = 2 COKE + 5 + RESIDUAL</p>
            </div>
          </div>
        </div>

        {/* Past Trades Table */}
        <div className="bg-white p-4 shadow rounded-lg">
          <h3 className="text-lg font-bold mb-4 text-center">Past Trades (Last 30 Days)</h3>
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
  );
}

export default StockDetails;
