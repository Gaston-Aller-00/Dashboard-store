import React from "react";
import { RiHome5Line } from "react-icons/ri";

const SideBar = () => {
  return (
    <div className="bg-[#1F1D2B] fixed left-0 top-0  w-28 h-full ">
      <h1 className="text-2xl text-gray-300 uppercase font-bold text-center ">
        Logo
      </h1>
      <ul className=" pl-4">
        <li className=" bg-red-400 p-4 rounded-tl-xl rounded-bl-lg">
          <a href="#" className="bg-blue-500 p-4 block rounded-lg ">
            <RiHome5Line className="text-xl " />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
