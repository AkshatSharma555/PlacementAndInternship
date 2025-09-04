import React from 'react';

const StatCard = ({ count, label }) => {
  return (
    <div className="bg-white p-5 rounded-xl shadow-md text-center">
      <div className="text-4xl font-bold text-gray-800">{count}</div>
      <div className="text-gray-500 mt-1">{label}</div>
    </div>
  );
};

export default StatCard;