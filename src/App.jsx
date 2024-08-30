import React from 'react';
import Sidebar from './Components/Sidebar';
import Header from './Components/Header';
import MainContent from './Components/MainContent';

function App() {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <MainContent />
      </div>
    </div>
  );
}

export default App;
