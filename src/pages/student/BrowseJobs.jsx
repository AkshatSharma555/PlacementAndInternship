import React from 'react';
import { useNavigate } from 'react-router-dom';
import FilterBar from '../../components/student/common/FilterBar';
import JobCard from '../../components/student/JobCard';
import Pagination from '../../components/student/common/Pagination';
import { allOpportunities } from '../../data/dummyData'; // Central data import

const BrowseJobs = () => {
  const navigate = useNavigate();
  const jobsData = allOpportunities.filter(op => op.type === 'Job');

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-800">Browse Jobs</h1>
        <button 
          onClick={() => navigate('/student/applications?type=job')}
          className="bg-[#00A99D] text-white font-semibold py-2 px-5 rounded-lg hover:bg-opacity-90"
        >
          My Applications
        </button>
      </div>
      <FilterBar />
      <div>
        <p className="text-gray-600 mb-4">Showing {jobsData.length} opportunities</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobsData.map((job) => <JobCard key={job.id} job={job} />)}
        </div>
      </div>
      <Pagination />
    </div>
  );
};
export default BrowseJobs;