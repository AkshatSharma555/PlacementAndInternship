import React from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import ApplicationFilterBar from '../../components/student/common/ApplicationFilterBar';
import ApplicationRow from '../../components/student/ApplicationRow';
import Pagination from '../../components/student/common/Pagination';
import { allOpportunities } from '../../data/dummyData'; // Central data import

const MyApplications = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  
  const typeFilter = searchParams.get('type'); // URL se 'type' nikalna
  
  // Applied opportunities ko filter karna
  const appliedOpportunities = allOpportunities.filter(op => op.applied);

  // URL ke 'type' ke hisaab se further filter karna
  const filteredApplications = appliedOpportunities.filter(app => {
    if (!typeFilter) return true; // Agar koi filter nahi hai (sidebar se), to sab dikhao
    return app.type.toLowerCase() === typeFilter; // job ya internship ke hisaab se filter
  });

  const tableHeaders = ["Role", "Company", "Type", "Status", "Applied On", "Last Update", "Actions"];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-800">My Applications</h1>
        <button 
          onClick={() => navigate(-1)} // Peeche wale page par jaane ke liye
          className="bg-gray-200 text-gray-700 font-semibold py-2 px-5 rounded-lg hover:bg-gray-300"
        >
          BACK
        </button>
      </div>
      <ApplicationFilterBar />
      <div>
        <div className="grid grid-cols-7 gap-4 px-4 pb-2 border-b border-gray-300 text-sm font-semibold text-gray-500">
          {tableHeaders.map(header => <div key={header} className="col-span-1">{header}</div>)}
        </div>
        <div className="mt-4">
          {filteredApplications.length > 0 ? (
            filteredApplications.map((app) => (
              <ApplicationRow key={app.id} application={app} />
            ))
          ) : (
            <div className="text-center py-12 text-gray-500">No applications found for this filter.</div>
          )}
        </div>
      </div>
      <Pagination />
    </div>
  );
};

export default MyApplications;