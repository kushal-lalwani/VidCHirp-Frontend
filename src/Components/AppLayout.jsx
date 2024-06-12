import React from 'react'
import Navbar from './Header/Navbar';
import SideMenu from './SideMenu';
import Channel from './Channel/Channel'
import { createBrowserRouter, Outlet } from 'react-router-dom';



const AppLayout = () => {
    return (
      <div className="flex flex-col h-screen">
        <Navbar />
        <div className="flex flex-grow overflow-hidden">
          <SideMenu />
          <div className="flex-grow bg-[#151515] overflow-auto"><Outlet/></div>
        </div>
      </div>
    );
}

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/channel/:username",
        element: <Channel/>,
      },
    ],
  },
]);

export default AppLayout