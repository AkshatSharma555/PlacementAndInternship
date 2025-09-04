import React from 'react';

const WhyJoinUs = () => {
  const benefits = [
    {
      title: "Meaningful Connections",
      description:
        "Join a thriving network where every interaction opens doors to new insights, collaborations, and opportunities.",
    },
    {
      title: "Mentorship & Guidance",
      description:
        "Share and receive guidance that transforms careers and inspires personal growth.",
    },
    {
      title: "Exclusive Access",
      description:
        "Get notified about jobs, internships, and events available only within our trusted community.",
    },
    {
      title: "Contribute & Grow",
      description:
        "Make an impact by helping others and grow through shared journeys and collective success.",
    },
    {
      title: "Lifelong Belonging",
      description:
        "Stay connected to your mentor, peers, and professionals, wherever life takes you.",
    },
  ];

  const CheckIcon = () => (
    <svg
      // YAHAN COLOR CHANGE KIYA GAYA HAI
      className="w-6 h-6 text-[#00A99D] flex-shrink-0 mt-1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
        clipRule="evenodd"
      />
    </svg>
  );

  return (
    <section className="bg-gray-100 py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-6">
          Why Join Our Network?
        </h2>
        <p className="text-center text-lg sm:text-xl text-gray-600 mb-12">
          One Community. Endless Possibilities.
        </p>

        <div className="relative">
          <div className="absolute top-2 left-2 w-full h-full bg-orange-400 rounded-3xl"></div>
          
          <div className="relative bg-white rounded-3xl shadow-xl p-8 sm:p-12 border-2 border-transparent">
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4"
                >
                  <CheckIcon />
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyJoinUs;