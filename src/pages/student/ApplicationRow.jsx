import React from 'react';

const ApplicationRow = ({ application }) => {

  const statusStyles = {
    "Shortlisted": "bg-green-100 text-green-800",
    "Under Review": "bg-yellow-100 text-yellow-800",
    "Interview": "bg-blue-100 text-blue-800",
    "Rejected": "bg-red-100 text-red-800",
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow-md grid grid-cols-7 gap-4 items-center mb-4">
      {/* Role */}
      <div className="col-span-1">
        <p className="font-bold text-gray-800">{application.role}</p>
        <p className="text-sm text-gray-500">{application.location}</p>
      </div>
      {/* Company */}
      <div className="col-span-1 text-gray-700">{application.company}</div>
      {/* Type */}
      <div className="col-span-1 text-gray-700">{application.type}</div>
      {/* Status */}
      <div className="col-span-1">
        <span className={`px-3 py-1 text-sm font-semibold rounded-full ${statusStyles[application.status] || 'bg-gray-100 text-gray-800'}`}>
          {application.status}
        </span>
      </div>
      {/* Applied On */}
      <div className="col-span-1 text-gray-700">{application.appliedOn}</div>
      {/* Last Update */}
      <div className="col-span-1 text-gray-700">{application.lastUpdate}</div>
      {/* Actions */}
      <div className="col-span-1 flex gap-2">
        <button className="text-sm border border-gray-300 text-gray-700 px-3 py-1.5 rounded-md hover:bg-gray-100">View Timeline</button>
        <button className="text-sm border border-gray-300 text-gray-700 px-3 py-1.5 rounded-md hover:bg-gray-100">View JD</button>
        <button className="text-sm bg-red-500 text-white px-3 py-1.5 rounded-md hover:bg-red-600">Withdraw</button>
      </div>
    </div>
  );
};

export default ApplicationRow;