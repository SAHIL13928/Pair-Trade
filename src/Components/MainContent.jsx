import React, { useState, useEffect } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  BarChart, Bar, ResponsiveContainer, Dot, LabelList, ReferenceLine
} from 'recharts';

// Sample data
const samplePairData = {
  stockX: 'COKE',
  stockY: 'PEPSI',
  marketSectorX: 'Beverages',
  marketSectorY: 'Beverages',
  priceX: 150,
  priceY: 155,
  changeX: 2.5,
  changeY: -1.0,
  ratioScore: 1.2,
  residueScore: 0.5,
  history: [
    { date: '2024-08-01', priceX: 145, priceY: 150 },
    { date: '2024-08-02', priceX: 147, priceY: 152 },
    { date: '2024-08-03', priceX: 150, priceY: 155 },
    { date: '2024-08-04', priceX: 148, priceY: 153 },
    { date: '2024-08-05', priceX: 150, priceY: 155 },
  ]
};

function FinanceDashboard() {
  const [pairData, setPairData] = useState(samplePairData);

  // Fetch or update pair data
  useEffect(() => {
    // Mock API call
    // fetch('/api/pair-trading')
    //   .then(response => response.json())
    //   .then(data => setPairData(data))
    //   .catch(error => console.error('Error fetching data:', error));
    // For now, using sample data
    setPairData(samplePairData);
  }, []);

  

  return (
    <main className="p-6 flex-1 bg-gradient-to-b from-blue-800 via-blue-300 to-white">
      <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Pair Trading Dashboard</h2>
        
        {/* Pair Overview */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">{pairData.stockX} vs {pairData.stockY}</h3>
          <p className="text-gray-700">Sector: {pairData.marketSectorX} </p>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="bg-red-500 text-white p-4 rounded-lg shadow-sm text-center">
              <h4 className="text-lg font-semibold">{pairData.stockX}</h4>
              <p>Price: ${pairData.priceX}</p>
              <p>Change: {pairData.changeX}%</p>
            </div>
            <div className="bg-green-500 text-white p-4 rounded-lg shadow-sm text-center">
              <h4 className="text-lg font-semibold">{pairData.stockY}</h4>
              <p>Price: ${pairData.priceY}</p>
              <p>Change: {pairData.changeY}%</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-4">
            {/* Ratio Score Box */}
            <div className="bg-gray-200 p-6 rounded-lg shadow-md flex">
              <div className="w-1/4 text-left">
                <h4 className="text-xl font-semibold">Ratio Score</h4>
                <p className="text-3xl font-bold">{pairData.ratioScore}</p>
              </div>
              <div className="w-px bg-black mx-4"></div>  {/* Vertical line */}
              <div className="w-3/4 text-right pl-4">
                <p className="text-sm text-gray-700">
                  The Ratio Score represents the relative valuation between the two stocks. A higher score suggests that Stock X is more expensive relative to Stock Y.
                </p>
              </div>
            </div>
            {/* Residue Score Box */}
            <div className="bg-gray-200 p-6 rounded-lg shadow-md flex">
              
              <div className="w-1/4 text-left">
              
                <h4 className="text-l font-semibold">Residue Score</h4>
                <p className="text-3xl font-bold">{pairData.residueScore}</p>
              </div>
              <div className="w-px bg-black mx-4"></div>  {/* Vertical line */}
              <div className="w-3/4 text-right pl-4">
                <p className="text-sm text-gray-700">
                  The Residue Score indicates the divergence between the stock pair's price ratio and its historical average. A positive score may suggest a buying opportunity.
                </p>
              </div>
            </div>
          </div>
         
        </div>

        {/* Historical Prices */}
        <h3 className="text-xl font-semibold mb-4">Historical Prices</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={pairData.history}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis domain={['auto', 'auto']} />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="priceX"
              stroke="#8884d8"
              name={pairData.stockX}
              strokeWidth={3}
              dot={<Dot fill="#8884d8" />}
            >
              <LabelList dataKey="priceX" position="top" />
            </Line>
            <Line
              type="monotone"
              dataKey="priceY"
              stroke="#82ca9d"
              name={pairData.stockY}
              strokeWidth={3}
              dot={<Dot fill="#82ca9d" />}
            >
              <LabelList dataKey="priceY" position="top" />
            </Line>
            <ReferenceLine
              y={Math.min(...pairData.history.map(item => item.priceX))}
              stroke="red"
              strokeDasharray="3 3"
              label="Min Price X"
            />
            <ReferenceLine
              y={Math.max(...pairData.history.map(item => item.priceY))}
              stroke="blue"
              strokeDasharray="3 3"
              label="Max Price Y"
            />
          </LineChart>
        </ResponsiveContainer>

        {/* Percentage Change */}
        <h3 className="text-xl font-semibold mb-4">Percentage Change Comparison</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={[{ stock: pairData.stockX, change: pairData.changeX }, { stock: pairData.stockY, change: pairData.changeY }]}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="stock" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="change" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </main>
  );
}

export default FinanceDashboard;
