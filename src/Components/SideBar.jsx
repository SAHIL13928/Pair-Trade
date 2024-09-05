import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faHistory, faQuestionCircle, faBook } from '@fortawesome/free-solid-svg-icons';

function Sidebar() {
  const [hoveredItem, setHoveredItem] = useState(null);

  const menuItems = [
    { name: 'Present Trades', icon: faChartLine },
    { name: 'Past Trades', icon: faHistory },
    { name: "FAQ's", icon: faQuestionCircle },
    { name: 'Learn P.T.', icon: faBook },
    { name: 'Present Trades', icon: faChartLine },
    { name: 'Past Trades', icon: faHistory },
    { name: "FAQ's", icon: faQuestionCircle },
    { name: 'Learn P.T.', icon: faBook },
    { name: 'Present Trades', icon: faChartLine },
    { name: 'Past Trades', icon: faHistory },
    { name: "FAQ's", icon: faQuestionCircle },
    { name: 'Learn P.T.', icon: faBook },
  ];

  return (
    <div className="w-1/6 bg-gray-100 p-4">
      <div className="mb-4 py-6 font-bold text-[24px]">PairTrader.com</div>
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
  );
}

export default Sidebar;
