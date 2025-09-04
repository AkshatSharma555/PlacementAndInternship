import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../../components/student/Sidebar';
import Header from '../../components/common/Header';

const StudentLayout = () => {
  return (
    <div className="flex h-screen bg-gray-800">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200 p-6">
          <Outlet /> {/* Nested routes yahan render hongi */}
        </main>
      </div>
    </div>
  );
};

export default StudentLayout;