import React from 'react';
import StatCard from '../../components/common/StatCard';
import MyPostingsWidget from '../../components/alumni/MyPostingsWidget';
import AllOpportunitiesTable from '../../components/alumni/AllOpportunitiesTable'; 


const AlumniDashboard = () => {
  // Sample data
  const topStats = [
    { count: 7, label: "Recent Opportunities Posted" },
    { count: 12, label: "Community Reached" },
    { count: 24, label: "Total Connections" },
    { count: 3, label: "Upcoming Events" },
  ];

  const recentOpportunities = [
    { title: "Senior Software Engineer", type: "Full-time", posted: "2 days ago", status: "Open" },
    { title: "Product Design Intern", type: "Internship", posted: "5 days ago", status: "Open" },
  ];

  const newsActivity = [
    { title: "Latest News Heading", date: "2 Sep 2025" },
    { title: "Latest News Heading", date: "2 Sep 2025" },
    { title: "Latest News Heading", date: "2 Sep 2025" },
  ];

  return (
    <div className="space-y-8">
      {/* Top Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {topStats.map((stat, index) => (
          <StatCard key={index} count={stat.count} label={stat.label} />
        ))}
      </div>

      {/* Two Column Layout for Recent Opportunities & News */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Recent Opportunities (Takes 2 columns) */}
        <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Recent Opportunities</h3>
          <div className="space-y-4">
            {recentOpportunities.map((op, index) => (
              <div key={index} className="flex justify-between items-center p-3 rounded-lg hover:bg-gray-50">
                <div>
                  <p className="font-semibold text-gray-800">{op.title}</p>
                  <p className="text-sm text-gray-500">{op.type} • Posted {op.posted}</p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-sm bg-green-100 text-green-700 font-semibold px-3 py-1 rounded-full">{op.status}</span>
                  <button className="text-sm text-blue-600 font-semibold">View Applications</button>
                </div>
              </div>
            ))}
          </div>
          <button className="w-full mt-4 py-2 text-center bg-teal-50 text-teal-600 font-semibold rounded-lg hover:bg-teal-100">
            See All Applications
          </button>
        </div>

        {/* News Activity (Takes 1 column) */}
        <div className="lg:col-span-1 bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-bold text-gray-800 mb-4">News Activity</h3>
          <div className="space-y-4">
            {newsActivity.map((news, index) => (
              <div key={index} className="p-3 rounded-lg border border-gray-200">
                <p className="font-semibold text-gray-700">{news.title}</p>
                <p className="text-xs text-gray-400 mt-1">{news.date}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* "My Postings & Proposals" Widget Yahan Add Kar Diya Gaya Hai */}
      <MyPostingsWidget />

      {/* All Opportunities Table */}
      <AllOpportunitiesTable />
      
    </div>
  );
};

export default AlumniDashboard;