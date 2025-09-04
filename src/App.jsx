import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Common Pages
import LandingPage from './pages/LandingPage';

// Student Pages
import StudentLayout from './pages/student/StudentLayout';
import StudentDashboard from './pages/student/StudentDashboard';
import BrowseJobs from './pages/student/BrowseJobs';
import BrowseInternships from './pages/student/BrowseInternships';
import MyApplications from './pages/student/MyApplications';

// Alumni Pages (Naye Imports)
import AlumniLayout from './pages/alumni/AlumniLayout';
import AlumniDashboard from './pages/alumni/AlumniDashboard';
import PostJob from './pages/alumni/PostJob';
import PostInternship from './pages/alumni/PostInternship';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        
        <Route path="/student" element={<StudentLayout />}>
          <Route index element={<StudentDashboard />} />
          <Route path="dashboard" element={<StudentDashboard />} />
          <Route path="jobs" element={<BrowseJobs />} />
          <Route path="internships" element={<BrowseInternships />} />
          <Route path="applications" element={<MyApplications />} />
        </Route>

        {/* === ALUMNI ROUTES (Naya Section) === */}
        <Route path="/alumni" element={<AlumniLayout />}>
          <Route index element={<AlumniDashboard />} />
          <Route path="dashboard" element={<AlumniDashboard />} />
          <Route path="post-job" element={<PostJob />} />
          <Route path="post-internship" element={<PostInternship />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;