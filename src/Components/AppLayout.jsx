import React, { useEffect } from 'react';
import { createBrowserRouter, Outlet, RouterProvider, useParams } from 'react-router-dom';
import { Provider, useDispatch } from 'react-redux';
import Navbar from './Header/Navbar';
import SideMenu from './SideMenu';
import EditInfo from './Channel/EditInfo';
import NoVideos from './Video/NoVideos';
import ChannelLayout from './Channel/ChannelLayout';
import UpdatePassword from './Channel/UpdatePassword';
import store from '../store/store';
import Signup from './Signup';
import Login from './Login';
import VideoMenu from './Video/VideoMenu';

import VideoPlayerPage from './Video/VideoPlayerPage';
import ChannelVideos from './Channel/ChannelVideos';
import LoginPopup from './LoginPopup';
import ProtectedRoute from './ProtectedRoute';
import { getCurrentUser } from '../store/Slices/authSlice';
import UploadVideo from './Video/UploadVideo';

const AppLayout = () => {

  
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex flex-grow overflow-hidden">
        <SideMenu />
        <div className="flex-grow bg-[#151515] overflow-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <VideoMenu />
      },
      {
        path: "edit",
        element: <ProtectedRoute authentication={true}><ChannelLayout edit={true} /></ProtectedRoute>,
        children: [
          { path: "personalinfo", element: <EditInfo /> },
          { path: "password", element: <UpdatePassword /> }
        ],
      },
      {
        path: '/history',
        element: <UploadVideo />
      }
      , {
        path: "channel/:username",
        element: <ChannelLayout />,
        children: [
          { index: true, element: <ChannelVideos /> },
          { path: "videos", element: <ChannelVideos /> },
          { path: "tweets", element: <NoVideos /> },
          { path: "playlists", element: <NoVideos /> },
          { path: "subscribed", element: <NoVideos /> }
        ],
      },
      
    ],
  },
  {
    path: "signup", element: <Signup />
  },
  {
    path: "login", element: <Login />
  },
  { path: "videos/:id", element: <ProtectedRoute authentication={true}><VideoPlayerPage /></ProtectedRoute> }
]);

const App = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={appRouter} />
    </Provider>
  );
};

export default App;
