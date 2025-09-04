import React from 'react';

const JobCard = ({ job }) => {
  return (
    <div className="bg-white p-5 rounded-xl shadow-md border border-gray-200">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center font-bold text-teal-600 flex-shrink-0">{job.logo}</div>
        <div>
          <h4 className="font-bold text-gray-800">{job.title}</h4>
          <p className="text-sm text-gray-500">{job.company} - {job.location}</p>
        </div>
      </div>
      <p className="text-sm text-gray-500 my-3">Deadline: {job.deadline} • Posted {job.postedAgo}</p>
      <div className="my-3 flex flex-wrap gap-2">
        {job.tags.map(tag => (
          <span key={tag} className="text-xs capitalize bg-gray-200 text-gray-700 px-2.5 py-1 rounded-full">{tag}</span>
        ))}
      </div>
      <div className="mt-4 flex gap-3">
        <button className="flex-1 bg-[#00A99D] text-white py-2 rounded-lg text-sm font-semibold hover:bg-opacity-90">Apply</button>
        <button className="flex-1 bg-gray-100 text-gray-700 py-2 rounded-lg text-sm font-semibold hover:bg-gray-200">Save</button>
      </div>
    </div>
  );
};

export default JobCard;