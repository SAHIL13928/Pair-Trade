import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faHistory, faQuestionCircle, faBook } from '@fortawesome/free-solid-svg-icons';

function Sidebar() {
  const [hoveredItem, setHoveredItem] = useState(null);

  const menuItems = [
    { name: 'Dashboard', icon: faChartLine },
    { name: 'Active Pairs', icon: faHistory },
    { name: "Past Trades", icon: faQuestionCircle },
    { name: 'All Pairs', icon: faBook },
  ];

  return (
    <div className="w-1/6 bg-gray-100 p-4 flex flex-col h-full">
      <div className="mb-4 py-6 font-bold text-[24px]">PairTrader.com</div>

      {/* Non-FAQ menu items */}
      <div className="flex-grow">
        {menuItems.map((item, index) => (
          <div
            key={index}
            onMouseEnter={() => setHoveredItem(index)}
            onMouseLeave={() => setHoveredItem(null)}
            className={`p-2 text-lg rounded-xl flex items-center ${
              hoveredItem === index ? 'bg-white' : ''
            }`}
          >
            <FontAwesomeIcon
              icon={item.icon}
              className={`mr-3 transition-colors duration-300 ${
                hoveredItem === index ? 'text-blue-500' : ''
              }`}
            />
            {item.name}
          </div>
        ))}
      </div>

      {/* FAQs button */}
      <div
        onMouseEnter={() => setHoveredItem(menuItems.length)}
        onMouseLeave={() => setHoveredItem(null)}
        className={`p-2 text-lg rounded-xl flex items-center ${
          hoveredItem === menuItems.length ? 'bg-white' : ''
        }`}
      >
        <FontAwesomeIcon
          icon={faChartLine} // Or another icon for FAQ
          className={`mr-3 transition-colors duration-300 ${
            hoveredItem === menuItems.length ? 'text-blue-500' : ''
          }`}
        />
        FAQs
      </div>
    </div>
  );
}

export default Sidebar;
