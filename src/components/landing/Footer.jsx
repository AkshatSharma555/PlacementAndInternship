import React from 'react';

const Footer = () => {
  const quickLinks = [
    { name: "Events", href: "#" }, { name: "Alumni", href: "#" },
    { name: "Placements", href: "#" }, { name: "Internships", href: "#" },
    { name: "News", href: "#" }, { name: "Donate", href: "#" },
    { name: "Reconnect", href: "#" }, { name: "Forum", href: "#" },
    { name: "About Us", href: "#" }, { name: "Login", href: "#" },
    { name: "Register", href: "#" },
  ];

  return (
    <footer className="bg-gray-100 text-gray-700">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          
          {/* Column 1: Google Map (Updated with your new src) */}
          <div className="md:col-span-1">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.4755498791574!2d73.02049771075484!3d19.04281805293898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c3db5e2c85cd%3A0xef26c52d7d73816e!2sSIES%20Graduate%20School%20of%20Technology!5e0!3m2!1sen!2sin!4v1756986200044!5m2!1sen!2sin"
              className="w-full h-64 rounded-lg shadow-md"
              title="College Location"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Column 2: Quick Links */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Links</h3>
            <ul className="grid grid-cols-2 gap-y-2 gap-x-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-blue-600 hover:text-blue-800 hover:underline transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Address & Contact */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Address</h3>
            <div className="space-y-4 text-gray-600">
                <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path></svg>
                    <p>SIES Graduate School of Technology, Sri Chandrasekarendra Saraswati Vidyapuram, Sector-V, Nerul, Navi Mumbai, Maharashtra 400706</p>
                </div>
                <div className="flex items-center gap-3">
                    <svg className="w-6 h-6 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path d="M2.003 5.884L10 2.882l7.997 3.002A2 2 0 0119 7.816l-8 3-8-3A2 2 0 012.003 5.884z"></path><path d="M10 12.882L2 9.882v4.234a2 2 0 002 2h12a2 2 0 002-2V9.882l-8 3z"></path></svg>
                    <p>sies@sies.com</p>
                </div>
                <div className="flex items-center gap-3">
                    <svg className="w-6 h-6 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path></svg>
                    <p>+91 1919191919</p>
                </div>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-300 text-center">
          <p className="text-sm text-gray-500">Copyright © All rights reserved by SIES GST Alumni Association 2025</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;