import React, { useState } from 'react';
import PostingCard from './PostingCard';
import ApplicationTableModal from './ApplicationTableModal';

const MyPostingsWidget = () => {
  const [activeTab, setActiveTab] = useState('jobs');
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const jobPostings = [
    { title: 'Senior Frontend Developer', company: 'Google', views: 150 },
    { title: 'Product Manager', company: 'Microsoft', views: 120 },
    { title: 'Senior Backend Developer', company: 'Facebook', views: 100 },
  ];

  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h3 className="text-xl font-bold text-gray-800 mb-4">My Postings & Proposals</h3>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="bg-gray-100 p-4 rounded-lg text-center"><div className="text-2xl font-bold">8</div><div className="text-sm text-gray-500">Total Jobs Posted</div></div>
        <div className="bg-gray-100 p-4 rounded-lg text-center"><div className="text-2xl font-bold">5</div><div className="text-sm text-gray-500">Total Internships Posted</div></div>
        <div className="bg-gray-100 p-4 rounded-lg text-center"><div className="text-2xl font-bold">25</div><div className="text-sm text-gray-500">Total Applications Received</div></div>
      </div>

      {/* Tabs */}
      <div className="flex border-b mb-4">
        <button onClick={() => setActiveTab('jobs')} className={`py-2 px-4 font-semibold ${activeTab === 'jobs' ? 'border-b-2 border-teal-500 text-teal-600' : 'text-gray-500'}`}>Job Postings</button>
        <button onClick={() => setActiveTab('internships')} className={`py-2 px-4 font-semibold ${activeTab === 'internships' ? 'border-b-2 border-teal-500 text-teal-600' : 'text-gray-500'}`}>Internship Postings</button>
      </div>

      {/* Postings List */}
      <div className="space-y-3">
        {activeTab === 'jobs' && jobPostings.map((posting, index) => (
          <PostingCard key={index} posting={posting} onViewApplicants={() => setIsModalOpen(true)} />
        ))}
        {activeTab === 'internships' && <p className="text-center text-gray-500 p-4">No internship postings yet.</p>}
      </div>

      {/* Modal */}
      {isModalOpen && <ApplicationTableModal onClose={() => setIsModalOpen(false)} />}
    </div>
  );
};

export default MyPostingsWidget;