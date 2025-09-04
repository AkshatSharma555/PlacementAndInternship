import React from 'react';
import StatCard from '../../components/common/StatCard';

// Dashboard ke andar use hone wala chhota opportunity card
const DashboardOpportunityCard = ({ job }) => {
  return (
    <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex-shrink-0 w-80">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center font-bold text-teal-600 flex-shrink-0">{job.logo}</div>
        <div>
          <h4 className="font-bold text-gray-800">{job.title}</h4>
          <p className="text-sm text-gray-500">{job.company}</p>
        </div>
      </div>
      <div className="my-3 flex flex-wrap gap-2">
        {job.tags.map(tag => (
          <span key={tag} className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded-full">{tag}</span>
        ))}
      </div>
      <p className="text-sm text-gray-500 mb-3">Deadline: {job.deadline}</p>
      <div className="flex gap-2">
        <button className="flex-1 bg-orange-400 text-white py-2 rounded-lg text-sm font-semibold hover:bg-orange-500">Apply</button>
        <button className="flex-1 bg-gray-100 text-gray-700 py-2 rounded-lg text-sm font-semibold hover:bg-gray-200">Save</button>
      </div>
    </div>
  );
};

const StudentDashboard = () => {
  const getGreeting = () => {
    const currentHour = new Date().getHours();
    if (currentHour < 12) return "Good morning";
    if (currentHour < 18) return "Good afternoon";
    return "Good evening";
  };

  const userName = "John";
  
  // Sample Data
  const opportunities = [
    { logo: 'TCS', title: 'Software Engineer', company: 'Tata Consultancy Services', tags: ['Job', 'Remote', '11-8 LPA'], deadline: 'Dec 15, 2024'},
    { logo: 'INF', title: 'Data Analyst Intern', company: 'Infosys', tags: ['Internship', 'Onsite', '₹25k/month'], deadline: 'Dec 20, 2024'},
    { logo: 'WIP', title: 'Frontend Developer', company: 'Wipro', tags: ['Job', 'Hybrid', '9-6 LPA'], deadline: 'Dec 22, 2024'},
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
    <div className="space-y-8">
      {/* Dynamic Greeting Section from your previous design */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">{getGreeting()}, {userName} 👋</h1>
          <p className="text-gray-500">Here's your dashboard overview for today.</p>
        </div>
        <button className="bg-[#00A99D] text-white font-semibold py-2 px-5 rounded-lg hover:bg-opacity-90">
          View My Applications
        </button>
      </div>

      {/* Profile Completion Card */}
      <div className="bg-white p-6 rounded-xl shadow-md flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-gray-800">Hello, {userName}!</h2>
          <p className="text-gray-600 mt-1">Let's get you ready for opportunities. Upload your latest resume.</p>
          <div className="mt-4 flex gap-4">
            <button className="bg-teal-500 text-white px-4 py-2 rounded-lg">Upload/Update Resume</button>
            <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg">Edit Profile</button>
          </div>
        </div>
        <div className="text-center">
          <div className="w-24 h-24 rounded-full flex items-center justify-center bg-teal-50" style={{background: `conic-gradient(#00A99D 80%, #E0F2F1 80%)`}}>
            <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center">
              <span className="text-2xl font-bold text-teal-600">80%</span>
            </div>
          </div>
          <p className="text-sm text-gray-600 mt-2">Profile Complete</p>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard count={12} label="Applications Submitted" />
        <StatCard count={4} label="Shortlisted" />
        <StatCard count={2} label="Interviews Scheduled" />
        <StatCard count={5} label="Events RSVPs" />
      </div>

      {/* === NAYA SECTION: Opportunities For You === */}
      <div>
        <h3 className="text-xl font-semibold mb-1 text-gray-800">Opportunities For You</h3>
        <p className="text-gray-500 mb-4">Recommended based on your profile</p>
        <div className="flex gap-6 overflow-x-auto pb-4">
          {opportunities.map((job, index) => <DashboardOpportunityCard key={index} job={job} />)}
        </div>
      </div>

      {/* === NAYA SECTION: Deadlines & Events === */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Deadlines */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="font-bold text-gray-800 mb-4">Deadlines This Week</h3>
          <div className="space-y-3">
            {deadlines.map((item, index) => (
              <div key={index} className="flex justify-between items-center p-2 rounded-lg hover:bg-gray-50">
                <div>
                  <p className="font-semibold text-gray-800">{item.title}</p>
                  <p className="text-sm text-gray-500">{item.details}</p>
                </div>
                <button className="border border-blue-500 text-blue-500 px-4 py-1.5 rounded-lg text-sm font-semibold">Apply</button>
              </div>
            ))}
          </div>
        </div>
        {/* Events */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="font-bold text-gray-800 mb-4">Events This Month</h3>
          <div className="space-y-3">
            {events.map((item, index) => (
              <div key={index} className="flex justify-between items-center p-2 rounded-lg hover:bg-gray-50">
                <div>
                  <p className="font-semibold text-gray-800">{item.title}</p>
                  <p className="text-sm text-gray-500">{item.details}</p>
                </div>
                <button className="border border-green-500 text-green-500 px-4 py-1.5 rounded-lg text-sm font-semibold">Register</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;