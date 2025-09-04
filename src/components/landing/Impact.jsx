import React from 'react';

const Impact = () => {
  const stats = [
    {
      value: "250+",
      label: "Total Jobs Posted",
    },
    {
      value: "180+",
      label: "Students Placed",
    },
    {
      value: "₹7.5L",
      label: "Average CTC",
    },
    {
      value: "150+",
      label: "Alumni Recruiters",
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
          Our Impact
        </h2>

        {/* Responsive Grid for Stat Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg flex items-center gap-5 border-l-4 border-orange-400">
              {/* Statistics (Number and Label) */}
              <div>
                <p className="text-4xl font-extrabold text-[#00A99D]">{stat.value}</p>
                <p className="text-gray-500 mt-1">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Impact;