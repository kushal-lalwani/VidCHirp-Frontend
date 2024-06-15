import React from 'react';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import Navbar from './Header/Navbar';
import SideMenu from './SideMenu';
import Channel from './Channel/Channel';
import EditInfo from './Channel/EditInfo';
import NoVideos from './NoVideos';
import ChannelLayout from './Channel/ChannelLayout';
import UpdatePassword from './Channel/UpdatePassword';
import VideoDetail from './VideoDetail';
import store from '../store/store';

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
        path: "channel/:username",
        element: <ChannelLayout />,
        children: [
          { index: true, element: <NoVideos /> },
          { path: "videos", element: <NoVideos /> },
          { path: "tweets", element: <NoVideos /> },
          { path: "playlists", element: <NoVideos /> },
          { path: "subscribed", element: <NoVideos /> }
        ],
      },
      {
        path: "edit",
        element: <ChannelLayout edit={true} />,
        children: [
          { path: "personalinfo", element: <EditInfo /> },
          { path: "password", element: <UpdatePassword /> }
        ],
      },
    ],
  },
  { path: "videos/:id", element: <VideoDetail /> }
]);

const App = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={appRouter} />
    </Provider>
  );
};

export default App;
