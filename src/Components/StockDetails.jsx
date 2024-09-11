import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend } from 'chart.js';

// Register Chart components
ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend);

function StockDetails() {
  const { state } = useLocation(); 
  const { stock1, stock2 } = useParams(); 

  const stockDetails = {
    stock1: state.stock1,
    stock2: state.stock2,
    price1: state.price1,
    price2: state.price2,
    change1: state.change1,
    change2: state.change2,
  };

  // Dummy chart data, same as before
  const graphData = {
    labels: [
      '00:00', '00:15', '00:30', '00:45', '01:00', '01:15', '01:30', '01:45', '02:00',
      '02:15', '02:30', '02:45', '03:00', '03:15', '03:30', '03:45', '04:00', '04:15',
      '04:30', '04:45', '05:00', '05:15', '05:30', '05:45'
    ],
    datasets: [
      {
        label: `${stock1.toUpperCase()} Price`,
        data: [990, 995, 980, 970, 960, 950],
        borderColor: 'blue',
        fill: false,
      },
      {
        label: `${stock2.toUpperCase()} Price`,
        data: [960, 962, 950, 945, 940, 935],
        borderColor: 'green',
        fill: false,
      }
    ]
  };

  return (
    <div className="p-6">
      {/* First Row: Display passed stock details here */}
      <div className="bg-white p-4 shadow rounded-lg mb-6">
        <div className="grid grid-cols-2 gap-4">
          {/* Stock 1 */}
          <div>
            <h2 className="text-xl font-bold">{stockDetails.stock1}</h2>
            <p>Price: ${stockDetails.price1}</p>
            <p style={{ color: stockDetails.change1 >= 0 ? 'green' : 'red' }}>
              {stockDetails.change1 >= 0 ? `+${stockDetails.change1}%` : `${stockDetails.change1}%`}
            </p>
          </div>
          {/* Stock 2 */}
          <div>
            <h2 className="text-xl font-bold">{stockDetails.stock2}</h2>
            <p>Price: ${stockDetails.price2}</p>
            <p style={{ color: stockDetails.change2 >= 0 ? 'green' : 'red' }}>
              {stockDetails.change2 >= 0 ? `+${stockDetails.change2}%` : `${stockDetails.change2}%`}
            </p>
          </div>
        </div>
      </div>

      {/* Chart */}
      <div className="bg-white p-4 shadow rounded-lg mb-6">
        <h3 className="text-lg font-bold mb-4 text-center">Price Changes in Last 24 Hours</h3>
        <Line data={graphData} />
      </div>
    </div>
  );
}

export default StockDetails;
