import React from 'react';

const Hero = () => {
  // "Apply now" button ke liye click handler
  const handleApplyClick = () => {
    alert("Please log in as a student to apply for opportunities.");
  };

  // "Post Opportunity" button ke liye click handler
  const handlePostClick = () => {
    alert("Please log in as an alumnus to post an opportunity.");
  };

  return (
    <main>
      {/* ===== PART 1: HERO SECTION (Teal Background) ===== */}
      <section className="bg-[#00A99D] text-white">
        <div className="container mx-auto text-center py-20 md:py-28 px-4">
          
          <h1 className="text-4xl md:text-5xl font-bold max-w-3xl mx-auto mb-8">
            Explore Career Opportunities with Our Alumni Network
          </h1>
          
          {/* Do Orange Buttons with onClick events */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <button 
              onClick={handleApplyClick}
              className="bg-[#F58220] font-bold py-3 px-10 rounded-md hover:bg-opacity-90 transition-transform hover:scale-105 w-full sm:w-auto"
            >
              Apply now
            </button>
            <button 
              onClick={handlePostClick}
              className="bg-[#F58220] font-bold py-3 px-10 rounded-md hover:bg-opacity-90 transition-transform hover:scale-105 w-full sm:w-auto"
            >
              Post Opportunity
            </button>
          </div>

        </div>
      </section>

      {/* ===== PART 2: SEARCH SECTION (White Background) ===== */}
      <section className="bg-white border-b border-gray-200">
        <div className="container mx-auto py-12 px-4">
          
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Find Your Perfect Opportunity
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-end">
            
            <div>
              <label htmlFor="domain" className="block mb-2 font-medium text-gray-700">Domain</label>
              <select id="domain" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00A99D]">
                <option>All Domains</option>
                <option>Software Development</option>
                <option>Data Science</option>
                <option>Mechanical Engineering</option>
                <option>Marketing</option>
              </select>
            </div>

            <div>
              <label htmlFor="type" className="block mb-2 font-medium text-gray-700">Type</label>
              <select id="type" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00A99D]">
                <option>All Types</option>
                <option>Full-time Job</option>
                <option>Internship</option>
                <option>Part-time</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="mode" className="block mb-2 font-medium text-gray-700">Mode</label>
              <select id="mode" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00A99D]">
                <option>All Modes</option>
                <option>Work from Office</option>
                <option>Remote</option>
                <option>Hybrid</option>
              </select>
            </div>
            
            <button className="bg-[#00A99D] text-white font-bold py-3 px-8 rounded-md hover:bg-opacity-90 h-[50px] w-full">
              Search
            </button>
            
          </div>
        </div>
      </section>
    </main>
  );
};

export default Hero;