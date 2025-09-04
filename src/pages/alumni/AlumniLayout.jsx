import React from 'react';
import { Outlet } from 'react-router-dom';
import AlumniSidebar from '../../components/alumni/AlumniSidebar';
import Header from '../../components/common/Header';

const AlumniLayout = () => {
  return (
    <div className="flex min-h-screen bg-gray-800">
      <AlumniSidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header /> 
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AlumniLayout;