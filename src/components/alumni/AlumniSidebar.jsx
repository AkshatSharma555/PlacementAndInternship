import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

// Icons
const DashboardIcon = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a2 2 0 002 2h10a2 2 0 002-2V10M9 20v-6a2 2 0 012-2h2a2 2 0 012 2v6"></path></svg>;
const ProfileIcon = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>;
const DonateIcon = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>;
const EventIcon = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>;
const PostIcon = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>;
const NewsIcon = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3h.01M17 17h.01"></path></svg>;
const ForumIcon = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a2 2 0 01-2-2V10a2 2 0 012-2h8z"></path></svg>;
const AlumniIcon = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>;
const SupportIcon = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>;
const SettingsIcon = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>;
const LogoutIcon = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>;
const ChevronDownIcon = () => <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>;

const AlumniSidebar = () => {
  const [isPostMenuOpen, setPostMenuOpen] = useState(false); // Dropdown ke liye state
  const navigate = useNavigate();

  const mainMenuLinks = [
    { icon: <DashboardIcon />, name: 'Dashboard', path: '/alumni/dashboard' },
    { icon: <ProfileIcon />, name: 'Profile', path: '/alumni/profile' },
    { icon: <DonateIcon />, name: 'Donate', path: '/alumni/donate' },
    { icon: <EventIcon />, name: 'Organize Event', path: '/alumni/organize-event' },
  ];
  
  const postSubMenuLinks = [
    { name: 'Job', path: '/alumni/post-job' },
    { name: 'Internship', path: '/alumni/post-internship' }
  ];

  const bottomMenuLinks = [
    { icon: <NewsIcon />, name: 'News', path: '/alumni/news' },
    { icon: <ForumIcon />, name: 'Forum', path: '/alumni/forum' },
    { icon: <AlumniIcon />, name: 'Alumni', path: '/alumni/directory' },
  ];

  const otherLinks = [
    { icon: <SupportIcon />, name: 'Support', path: '/alumni/support' },
    { icon: <SettingsIcon />, name: 'Settings', path: '/alumni/settings' },
  ];
  
  const activeLinkStyle = "bg-white text-[#00A99D] shadow-lg";
  const inactiveLinkStyle = "text-white hover:bg-teal-600";
  
  const handleLogout = () => {
    console.log("Alumni logged out");
    navigate('/');
  };

  const NavItem = ({ link }) => (
    <li>
      <NavLink to={link.path} className={({ isActive }) => `flex items-center gap-3 px-4 py-2.5 rounded-lg transition-colors duration-200 ${isActive ? activeLinkStyle : inactiveLinkStyle}`}>
        {link.icon}<span>{link.name}</span>
      </NavLink>
    </li>
  );

  return (
    <aside className="w-64 bg-[#00A99D] text-white flex flex-col p-4">
      <div className="text-2xl font-bold border-b border-teal-500 pb-4 mb-4 text-center tracking-widest">ALUMNI</div>
      
      <nav className="flex-1">
        <h3 className="text-xs uppercase text-teal-200 font-semibold mb-2">Main Menu</h3>
        <ul>
          {mainMenuLinks.map((link) => <NavItem key={link.name} link={link} />)}
          
          {/* Post Opportunity Dropdown */}
          <li>
            <button onClick={() => setPostMenuOpen(!isPostMenuOpen)} className="w-full flex justify-between items-center gap-3 px-4 py-2.5 rounded-lg text-white hover:bg-teal-600">
              <div className="flex gap-3 items-center"><PostIcon /><span>Post Opportunity</span></div>
              <span className={`transform transition-transform ${isPostMenuOpen ? 'rotate-180' : ''}`}><ChevronDownIcon /></span>
            </button>
            {isPostMenuOpen && (
              <ul className="pl-8 pt-2 space-y-1">
                {postSubMenuLinks.map(child => (
                  <li key={child.name}>
                    <NavLink to={child.path} className={({isActive}) => `block px-4 py-2 rounded-lg text-sm ${isActive ? activeLinkStyle : inactiveLinkStyle}`}>
                      {child.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            )}
          </li>

          {bottomMenuLinks.map((link) => <NavItem key={link.name} link={link} />)}
        </ul>

        <h3 className="text-xs uppercase text-teal-200 font-semibold mt-6 mb-2">Other</h3>
        <ul>
          {otherLinks.map((link) => <NavItem key={link.name} link={link} />)}
        </ul>
      </nav>

      <div className="mt-auto">
        <button onClick={handleLogout} className="w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-white hover:bg-teal-600">
          <LogoutIcon /><span>Log Out</span>
        </button>
      </div>
    </aside>
  );
};

export default AlumniSidebar;