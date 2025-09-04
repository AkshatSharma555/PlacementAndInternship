import React from 'react';
import JobCard from './JobCard'; // JobCard component ko import karein

const Opportunities = () => {
  // Real project mein yeh data API se aayega. Abhi ke liye hardcoded hai.
  const jobsData = [
    {
      logoText: 'TCS',
      title: 'Software Engineer',
      company: 'Tata Consultancy Services',
      location: 'Mumbai, Maharashtra',
      deadline: '15th Aug 2025',
      type: 'Full-time',
      tags: ['React', 'Node.js', 'mongoDB'],
    },
    {
      logoText: 'TCS',
      title: 'Data Science Intern',
      company: 'Tata Consultancy Services',
      location: 'Bangalore, Karnataka',
      deadline: '20th Aug 2025',
      type: 'Internship',
      tags: ['ML', 'Python', 'SQL'],
    },
    {
      logoText: 'TCS',
      title: 'Software Engineer',
      company: 'Tata Consultancy Services',
      location: 'Mumbai, Maharashtra',
      deadline: '15th Aug 2025',
      type: 'Full-time',
      tags: ['React', 'Node.js', 'mongoDB'],
    },
    {
      logoText: 'TCS',
      title: 'Data Science Intern',
      company: 'Tata Consultancy Services',
      location: 'Bangalore, Karnataka',
      deadline: '20th Aug 2025',
      type: 'Internship',
      tags: ['ML', 'Python', 'SQL'],
    },
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
          Latest Opportunities
        </h2>
        
        {/* Responsive Grid Layout for Job Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {jobsData.map((job, index) => (
            <JobCard key={index} job={job} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Opportunities;