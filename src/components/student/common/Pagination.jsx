import React from 'react';

const Pagination = () => {
  return (
    <div className="flex justify-center items-center gap-2 mt-8">
      <button className="px-3 py-1 border rounded-md hover:bg-gray-100">«</button>
      <button className="px-3 py-1 border rounded-md bg-[#00A99D] text-white">1</button>
      <button className="px-3 py-1 border rounded-md hover:bg-gray-100">2</button>
      <button className="px-3 py-1 border rounded-md hover:bg-gray-100">3</button>
      <button className="px-3 py-1 border rounded-md hover:bg-gray-100">»</button>
    </div>
  );
};

export default Pagination;