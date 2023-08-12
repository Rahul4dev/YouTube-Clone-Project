import React from 'react';
import Sidebar from '../Sidebar';
import Navbar from '../Navbar';
import LeftBar from './LeftBar';

const MainWrapper = ({ children }) => {
  return (
    <>
      <Sidebar />
      <main className="overflow-hidden h-full">
        <Navbar />
        <div className="w-full flex overflow-x-hidden h-[85%]">
          <LeftBar />
          <div>{children}</div>
        </div>
      </main>
    </>
  );
};

export default MainWrapper;
