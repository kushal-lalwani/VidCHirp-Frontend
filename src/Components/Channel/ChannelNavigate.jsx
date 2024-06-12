import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'


const ChannelNavigate = ({username}) => {

    const location = useLocation()
    const isAtRoot = location.pathname === `/channel/${username}`
  return (
      <div className="flex text-gray-400 text-lg px-2">
          <NavLink
              to={`/channel/${username}/videos`}
              className={({ isActive }) => (isActive || isAtRoot) ? "p-3 text-center w-3/12 border-b-2" : "p-3 text-center w-3/12"
              }
          >
              <button>Videos</button>
          </NavLink>
          <NavLink
              to={`/channel/${username}/tweets`}
              className={({ isActive }) => isActive ? "p-3 text-center w-3/12 border-b-2" : "p-3 text-center w-3/12"
              }
          >
              <button >Tweets</button>

          </NavLink>
          <NavLink
              to={`/channel/${username}/playlists`}
              className={({ isActive }) => isActive ? "p-3 text-center w-3/12 border-b-2" : "p-3 text-center w-3/12"
              }
          >
              <button >Playlists</button>
          </NavLink>
          <NavLink
              to={`/channel/${username}/subscribed`}
              className={({ isActive }) => isActive ? "p-3 text-center w-3/12 border-b-2" : "p-3 text-center w-3/12"
              }
          >
              <button>Subscribed</button>
          </NavLink>
      </div>
  )
}

export default ChannelNavigate