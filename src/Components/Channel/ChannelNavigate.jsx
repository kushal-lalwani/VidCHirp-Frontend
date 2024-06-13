import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'


const ChannelNavigate = ({ username, edit }) => {

    const location = useLocation()
    const isAtRoot = location.pathname === `/channel/${username}`
    const isAtEditRoot = location.pathname === '/edit/personalinfo'
    return (
        (edit)
            ? (<div className="flex text-gray-300  px-2">
                <NavLink
                    to={`/edit/personalinfo`}
                    className={({ isActive }) => (isActive || isAtEditRoot) ? "relative p-3 text-center w-6/12 after:content-[''] after:absolute after:left-1/4 after:bottom-0 after:w-1/2 after:border-b-2 after:border-red-600" : "p-3 text-center w-6/12"
                    }
                >
                    <button className=''>Personal Information</button>
                </NavLink>
                <NavLink
                    to={`/edit/password`}
                    className={({ isActive }) => isActive ? "relative p-3 text-center w-6/12 after:content-[''] after:absolute after:left-1/4 after:bottom-0 after:w-1/2 after:border-b-2 after:border-red-600" : "p-3 text-center w-6/12 "
                    }
                >
                    <button >Change Password</button>
                </NavLink>
            </div>)

            : (

                <div className="flex text-gray-300 px-2">
                    <NavLink
                        to={`/channel/${username}/videos`}
                        className={({ isActive }) => (isActive || isAtRoot) ? "p-3 text-center w-3/12 border-b-2 border-red-600" : "p-3 text-center w-3/12"
                        }
                    >
                        <button>Videos</button>
                    </NavLink>
                    <NavLink
                        to={`/channel/${username}/tweets`}
                        className={({ isActive }) => isActive ? "p-3 text-center w-3/12 border-b-2 border-red-600" : "p-3 text-center w-3/12"
                        }
                    >
                        <button >Tweets</button>

                    </NavLink>
                    <NavLink
                        to={`/channel/${username}/playlists`}
                        className={({ isActive }) => isActive ? "p-3 text-center w-3/12 border-b-2 border-red-600" : "p-3 text-center w-3/12"
                        }
                    >
                        <button >Playlists</button>
                    </NavLink>
                    <NavLink
                        to={`/channel/${username}/subscribed`}
                        className={({ isActive }) => isActive ? "p-3 text-center w-3/12 border-b-2 border-red-600" : "p-3 text-center w-3/12"
                        }
                    >
                        <button>Subscribed</button>
                    </NavLink>
                </div>
            ))
}

export default ChannelNavigate