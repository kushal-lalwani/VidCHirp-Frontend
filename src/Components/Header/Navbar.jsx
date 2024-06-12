import React from "react";
import Search from "./Search";

const Navbar = () => {
  return (
    <div className="flex justify-between gap-2 p-2 h-16 border-b text-white bg-[#121212] w-full sticky top-0 items-center">
      <div>
        <span>logo</span>
      </div>

      <div className="w-1/3">
        <Search />
      </div>

      <div className="flex mr-4 space-x-2 gap-2">
        <button className="p-2 border-2 w-6/12 font-semibold">Login</button>
        <button className="p-2 border-2 w-6/12 font-semibold">Signup</button>
      </div>
    </div>
  );
};

export default Navbar;
