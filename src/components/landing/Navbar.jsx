import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/sies_gst_logo.jpg"

const Navbar = () => {
  const [showOptions, setShowOptions] = useState(false);
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowOptions(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const news1 =
    "CSI SIESGST Presents ENIGMA 4.0 - CHRONIX: A Web Development Hackathon where code shapes reality. One event, infinite possibilities.";
  const news2 =
    "The IETE Students' Forum presents IDEATION '25: An idea presentation competition to tackle real-world challenges with innovative tech solutions. Dream for a cause.";
  
  const navLinks = [
    "Events", "Donate", "Placements", "Internships", "Alumni", 
    "Reconnect", "News", "Forum", "About Us"
  ];

  return (
    <header className="shadow-md fixed top-0 w-full z-50 bg-white">
      <div className="bg-white">
        {/* Top bar: Logo, Login/Register */}
        <div className="container mx-auto flex justify-between items-center py-3 px-6"> {/* py-4 to py-3 */}
          <div className="flex-shrink-0">
            <img src={logo} alt="SIES GST Logo" className="h-16" /> {/* h-20 to h-16 */}
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setShowOptions(!showOptions)}
                className="bg-[#00A99D] text-white font-semibold py-2 px-8 rounded-md hover:bg-opacity-90 transition-colors"
              >
                Login
              </button>
              {showOptions && (
                <div className="absolute right-0 mt-2 w-40 bg-white border rounded-md shadow-lg z-50">
                  <button
                    onClick={() => navigate("/student")}
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    As Student
                  </button>
                  <button
                    onClick={() => navigate("/alumni")}
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    As Alumni
                  </button>
                </div>
              )}
            </div>
            <button className="bg-[#00A99D] text-white font-semibold py-2 px-8 rounded-md hover:bg-opacity-90 transition-colors">
              Register
            </button>
          </div>
        </div>
      </div>

      {/* Main navigation links */}
      <nav className="bg-[#00A99D]">
        <div className="container mx-auto flex justify-center items-center py-2"> {/* py-3 to py-2 */}
          <ul className="flex items-center space-x-10">
            {navLinks.map((link) => (
              <li key={link}>
                <a href="#" className="text-white text-lg font-medium hover:text-gray-200 transition-colors">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* News marquee */}
      <div className="bg-[#F58220] text-white py-2 overflow-hidden whitespace-nowrap">
        <div className="inline-block animate-marquee pr-12">
          <span className="font-medium mx-6">{news1}</span>
          <span className="font-bold mx-6">||</span>
          <span className="font-medium mx-6">{news2}</span>
        </div>
        <div className="inline-block animate-marquee pr-12">
          <span className="font-medium mx-6">{news1}</span>
          <span className="font-bold mx-6">||</span>
          <span className="font-medium mx-6">{news2}</span>
        </div>
      </div>
    </header>
  );
};

export default Navbar;