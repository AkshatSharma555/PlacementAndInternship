import React from 'react';

const ApplicationTableModal = ({ onClose }) => {
  // Sample data for applicants
  const applicants = [
    { name: 'Rohan Mehta', year: 'Final Year', branch: 'IT', phone: '9876543210', email: 'rohan@example.com', date: '2025-08-05' },
    { name: 'Priya Sharma', year: 'Third Year', branch: 'CSE', phone: '9876543211', email: 'priya@example.com', date: '2025-08-04' },
    { name: 'Aarav Patil', year: 'Second Year', branch: 'ECE', phone: '9876543212', email: 'aarav@example.com', date: '2025-08-03' },
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-xl shadow-2xl p-6 w-full max-w-4xl">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-gray-800">Job Applications</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-800">&times;</button>
        </div>
        
        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-gray-100 text-gray-600">
              <tr>
                <th className="p-3">Name</th>
                <th className="p-3">Year</th>
                <th className="p-3">Branch</th>
                <th className="p-3">Phone</th>
                <th className="p-3">Email</th>
                <th className="p-3">Date Applied</th>
                <th className="p-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {applicants.map((applicant, index) => (
                <tr key={index} className="border-b">
                  <td className="p-3">{applicant.name}</td>
                  <td className="p-3">{applicant.year}</td>
                  <td className="p-3">{applicant.branch}</td>
                  <td className="p-3">{applicant.phone}</td>
                  <td className="p-3">{applicant.email}</td>
                  <td className="p-3">{applicant.date}</td>
                  <td className="p-3">
                    <button className="bg-orange-400 text-white px-4 py-1 text-sm rounded-md hover:bg-orange-500">View</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ApplicationTableModal;