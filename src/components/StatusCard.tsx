import React from 'react';

interface StatsCardProps {
  title: string;
  value: number;
  icon: string;
}

const StatsCard: React.FC<StatsCardProps> = ({ title, value, icon }) => {
  return (
    <div className="bg-white p-4 rounded-md shadow-md flex items-center justify-between">
      <div>
        <div className="text-gray-600 text-sm">{title}</div>
        <div className="text-2xl font-bold">{value.toLocaleString()}</div>
      </div>
      <div className="text-purple-800">
        <i className={icon}></i>
      </div>
    </div>
  );
};

export default StatsCard;
