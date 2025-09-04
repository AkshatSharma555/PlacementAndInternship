import React from 'react';

const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      title: "Search & Discover",
      description: "Browse through opportunities posted by our alumni network and find the perfect match for your skills.",
    },
    {
      number: 2,
      title: "Login to Your Account",
      description: "Sign in to your student account to apply or your alumni account to post new openings.",
    },
    {
      number: 3,
      title: "Apply or Post",
      description: "Submit your application for jobs or post new opportunities to help fellow students and juniors.",
    },
    {
      number: 4,
      title: "Track Your Outcome",
      description: "Monitor your applications and manage your postings through your personalized dashboard.",
    },
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          How It Works
        </h2>

        <div className="relative">
          {/* The connecting line */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-300 transform -translate-y-1/2"></div>

          {/* Grid for the steps */}
          <div className="relative grid grid-cols-1 md:grid-cols-4 gap-12">
            {steps.map((step) => (
              <div key={step.number} className="flex flex-col items-center text-center p-4">
                
                {/* Numbered circle */}
                <div className={`w-12 h-12 flex items-center justify-center bg-[#00A99D] text-white font-bold text-lg rounded-full border-4 border-gray-50 mb-4`}>
                  {step.number}
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{step.title}</h3>
                
                {/* Description */}
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;