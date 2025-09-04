import React from 'react';
import { useNavigate } from 'react-router-dom';
import FilterBar from '../../components/student/common/FilterBar';
import JobCard from '../../components/student/JobCard';
import Pagination from '../../components/student/common/Pagination';
import { allOpportunities } from '../../data/dummyData'; // Central data import

const BrowseInternships = () => {
  const navigate = useNavigate();
  const internshipsData = allOpportunities.filter(op => op.type === 'Internship');

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-800">Browse Internships</h1>
        <button 
          onClick={() => navigate('/student/applications?type=internship')}
          className="bg-[#00A99D] text-white font-semibold py-2 px-5 rounded-lg hover:bg-opacity-90"
        >
          My Applications
        </button>
      </div>
      <FilterBar />
      <div>
        <p className="text-gray-600 mb-4">Showing {internshipsData.length} opportunities</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {internshipsData.map((internship) => <JobCard key={internship.id} job={internship} />)}
        </div>
      </div>
      <Pagination />
    </div>
  );
};
export default BrowseInternships;