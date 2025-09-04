import React from 'react';
import StatCard from '../../components/student/StatCard';
import OpportunityCard from '../../components/student/OpportunityCard';

const StudentDashboard = () => {
  const userName = "John";
  
  const opportunities = [
    { logo: 'TCS', title: 'Software Engineer', company: 'Tata Consultancy Services', tags: ['Job', 'Fresher', 'On-site'], deadline: 'Dec 15, 2024'},
    { logo: 'INF', title: 'Data Analyst Intern', company: 'Infosys', tags: ['Internship', 'Remote', '6 Months'], deadline: 'Dec 20, 2024'}
  ];
  
  const deadlines = [
    { title: 'Software Engineer — TCS', details: 'Dec 15, 2024 • Job'},
    { title: 'Frontend Developer — Wipro', details: 'Dec 18, 2024 • Job'},
    { title: 'Data Analyst Intern — Infosys', details: 'Dec 20, 2024 • Internship'},
  ];

  const events = [
    { title: 'Mock Interview Session', details: 'Dec 18, 2024 • Online'},
    { title: 'Resume Writing Workshop', details: 'Dec 22, 2024 • Offline'},
    { title: 'Industry Connect Webinar', details: 'Dec 28, 2024 • Online'},
  ];

  return (
    <div className="space-y-6">
      {/* Profile Completion Card */}
      <div className="bg-white p-6 rounded-xl shadow-md flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-gray-800">Hello, {userName}!</h2>
          <p className="text-gray-600 mt-1">Let's get you ready for opportunities.</p>
          <p className="text-sm text-gray-500 mt-4">Uploaded resume (PDF)</p>
          <p className="text-sm text-blue-600 mt-1">Add top skills</p>
          <p className="text-sm text-blue-600 mt-1">Add LinkedIn / GitHub</p>
          <div className="mt-4 flex gap-4">
            <button className="bg-gray-800 text-white px-5 py-2 rounded-lg text-sm">Upload/Update Resume</button>
            <button className="border border-gray-300 text-gray-700 px-5 py-2 rounded-lg text-sm">Edit Profile</button>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-32 h-32 rounded-full flex items-center justify-center bg-teal-50" style={{background: `conic-gradient(#00A99D 80%, #E0F2F1 80%)`}}>
            <div className="w-28 h-28 rounded-full bg-white flex items-center justify-center">
              <span className="text-3xl font-bold text-teal-600">80%</span>
            </div>
          </div>
          <p className="text-sm text-gray-600 mt-2">Next: Add top skills</p>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard count={12} label="Applications Submitted" />
        <StatCard count={4} label="Shortlisted" />
        <StatCard count={2} label="Interviews Scheduled" />
        <StatCard count={5} label="Event RSVPs" />
      </div>

      {/* Opportunities For You */}
      <div>
        <h3 className="text-xl font-semibold mb-1">Opportunities For You</h3>
        <p className="text-gray-500 mb-4">Recommended based on your profile</p>
        <div className="flex gap-6 overflow-x-auto pb-4">
          {opportunities.map((job, index) => <OpportunityCard key={index} job={job} />)}
        </div>
      </div>

      {/* Deadlines & Events */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Deadlines */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="font-bold mb-4">Deadlines This Week</h3>
          <div className="space-y-3">
            {deadlines.map((item, index) => (
              <div key={index} className="flex justify-between items-center">
                <div>
                  <p className="font-semibold text-gray-800">{item.title}</p>
                  <p className="text-sm text-gray-500">{item.details}</p>
                </div>
                <button className="border border-blue-500 text-blue-500 px-4 py-1.5 rounded-lg text-sm">Apply</button>
              </div>
            ))}
          </div>
        </div>
        {/* Events */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="font-bold mb-4">Events This Month</h3>
          <div className="space-y-3">
            {events.map((item, index) => (
              <div key={index} className="flex justify-between items-center">
                <div>
                  <p className="font-semibold text-gray-800">{item.title}</p>
                  <p className="text-sm text-gray-500">{item.details}</p>
                </div>
                <button className="border border-green-500 text-green-500 px-4 py-1.5 rounded-lg text-sm">Register</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;