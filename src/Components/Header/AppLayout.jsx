import React from 'react'
import Navbar from './Navbar';
import SideMenu from './SideMenu';

const AppLayout = () => {
    return (
      <div className="flex flex-col h-screen">
        <Navbar />
        <div className="flex flex-grow overflow-hidden">
          <SideMenu />
          <div className="flex-grow bg-[#121212]">{/* Add your main content here */}</div>
        </div>
      </div>
    );
}

export default AppLayout