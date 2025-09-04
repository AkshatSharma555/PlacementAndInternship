import React from 'react';

const ApplicationFilterBar = () => {
  const filters = ["All Types", "All Status", "All Companies", "Sort: Newest first", "Applied: Any time"];
  return (
    <div className="bg-white p-4 rounded-xl shadow-md flex items-center gap-4">
      {filters.map(filter => (
        <select key={filter} className="flex-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500">
          <option>{filter}</option>
        </select>
      ))}
      <button className="bg-[#00A99D] text-white font-semibold py-2 px-6 rounded-md hover:bg-opacity-90">Apply Filters</button>
    </div>
  );
};

export default ApplicationFilterBar;