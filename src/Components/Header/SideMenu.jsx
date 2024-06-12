import React from "react";
import { LuHome, LuHistory, LuVideo, LuFolder, LuUserCheck, LuThumbsUp, LuSettings2, LuBadgeHelp } from "react-icons/lu";
import MenuItem from "./MenuItem.jsx";

const SideMenu = () => {
  const UpperMenu = [
    { title: "Home", icon: <LuHome size={25} />, route: "" },
    { title: "Liked Videos", icon: <LuThumbsUp size={25} />, route: "" },
    { title: "History", icon: <LuHistory size={25} />, route: "" },
    { title: "My Content", icon: <LuVideo size={25} />, route: "" },
    { title: "Collections", icon: <LuFolder size={25} />, route: "" },
    { title: "Subscribers", icon: <LuUserCheck size={25} />, route: "" },
  ];

  const LowerMenu = [
    { title: "Support", icon: <LuBadgeHelp size={25} />, route: "" },
    { title: "Settings", icon: <LuSettings2 size={25} />, route: "" },
  ];

  return (
    <>
      <div className="w-[18%] text-white border-r bg-[#121212] h-full">
        <div className="flex flex-col justify-between h-full">
          <div>
            {UpperMenu.map((item) => (
              <MenuItem {...item} />
            ))}
          </div>
          <div className="mb-6">
            {LowerMenu.map((item) => (
              <MenuItem {...item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SideMenu;
