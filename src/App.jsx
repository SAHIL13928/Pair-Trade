import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './Components/Sidebar';
import Header from './Components/Header';
import MainContent from './Components/MainContent';
import StockDetails from './Components/StockDetails'; // Import the new page

function App() {
  return (
    <Router>
      <div className="flex h-screen bg-gray-100">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Header />
          <Routes>
            <Route path="/" element={<MainContent />} />
            <Route path="/stocks/:stock1/:stock2" element={<StockDetails />} /> {/* Updated route */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
