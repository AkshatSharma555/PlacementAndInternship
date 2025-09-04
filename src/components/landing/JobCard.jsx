import React from 'react';

const JobCard = ({ job }) => {
  // Yeh function tab call hoga jab button par click kiya jayega
  const handleApplyClick = () => {
    // Simple alert message dikhana
    alert("Please log in as a student to apply for this opportunity.");
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col transition-transform hover:scale-105 duration-300">
      
      <div className="flex items-start gap-4 mb-4">
        <div className="flex-shrink-0 w-12 h-12 bg-[#00A99D] text-white text-lg font-bold flex items-center justify-center rounded-lg">
          {job.logoText}
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-800">{job.title}</h3>
          <p className="text-gray-500">{job.company}</p>
        </div>
      </div>

      <ul className="space-y-2 text-gray-600 list-disc list-inside mb-4">
        <li>{job.location}</li>
        <li>Deadline: {job.deadline}</li>
        <li>{job.type}</li>
      </ul>

      <div className="flex flex-wrap gap-2 mb-6">
        {job.tags.map((tag) => (
          <span key={tag} className="bg-orange-100 text-orange-800 text-xs font-semibold px-3 py-1 rounded-full">
            {tag}
          </span>
        ))}
      </div>

      {/* onClick event yahan button mein add kiya gaya hai */}
      <button 
        onClick={handleApplyClick} 
        className="w-full bg-[#00A99D] text-white font-bold py-3 rounded-lg mt-auto hover:bg-opacity-90 transition-colors"
      >
        Apply now
      </button>
    </div>
  );
};

export default JobCard;