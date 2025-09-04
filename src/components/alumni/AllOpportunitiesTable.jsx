import React from 'react';

// Reusable icons
const ViewIcon = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>;
const EditIcon = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>;
const DeleteIcon = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>;

const AllOpportunitiesTable = () => {
  // Sample data for the table
  const allOpportunitiesData = [
    { title: 'Senior Software Engineer', company: 'Google', type: 'Full-time', applications: 25, status: 'Open', postedOn: '10 Aug 2025' },
    { title: 'Product Manager', company: 'Microsoft', type: 'Full-time', applications: 42, status: 'Open', postedOn: '08 Aug 2025' },
    { title: 'UX/UI Designer', company: 'Adobe', type: 'Internship', applications: 18, status: 'Closed', postedOn: '05 Aug 2025' },
    { title: 'Data Scientist', company: 'Amazon', type: 'Full-time', applications: 35, status: 'Open', postedOn: '02 Aug 2025' },
  ];
  
  const statusStyles = {
    Open: "bg-green-100 text-green-800",
    Closed: "bg-red-100 text-red-800",
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h3 className="text-xl font-bold text-gray-800 mb-4">All Opportunities Posted by Alumni</h3>
      
      {/* Filters */}
      <div className="flex items-center gap-4 mb-4">
        <input type="text" placeholder="Search by Job title, Company or skills" className="flex-1 p-2 border border-gray-300 rounded-md" />
        <select className="p-2 border border-gray-300 rounded-md"><option>Type: All</option></select>
        <select className="p-2 border border-gray-300 rounded-md"><option>Sort by: Date</option></select>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-gray-50 text-gray-600 uppercase text-sm">
            <tr>
              <th className="p-3">Job Title</th>
              <th className="p-3">Company</th>
              <th className="p-3">Type</th>
              <th className="p-3">Applications</th>
              <th className="p-3">Status</th>
              <th className="p-3">Posted On</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {allOpportunitiesData.map((item, index) => (
              <tr key={index}>
                <td className="p-3 font-semibold">{item.title}</td>
                <td className="p-3">{item.company}</td>
                <td className="p-3">{item.type}</td>
                <td className="p-3 text-center">{item.applications}</td>
                <td className="p-3">
                  <span className={`px-3 py-1 text-xs font-semibold rounded-full ${statusStyles[item.status]}`}>
                    {item.status}
                  </span>
                </td>
                <td className="p-3">{item.postedOn}</td>
                <td className="p-3">
                  <div className="flex items-center gap-3 text-gray-500">
                    <button className="hover:text-blue-600"><ViewIcon /></button>
                    <button className="hover:text-green-600"><EditIcon /></button>
                    <button className="hover:text-red-600"><DeleteIcon /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllOpportunitiesTable;