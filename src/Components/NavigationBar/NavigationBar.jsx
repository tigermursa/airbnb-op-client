import React from "react";
import { BiGlobe, BiSearch } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";

import { FaCircleUser } from "react-icons/fa6";
const NavigationBar = () => {
  return (
    <div>
      <div className="navbar bg-base-100 border-b md:ps-10 md:pe-10 mt-5 mb-4 ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 "
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">
            <img className="w-24" src="/Airbnb_Logo.svg.png" alt="" />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex mb-2">
          <div className=" bg-white  text-sm font-semibold flex items-center border-2 p-3 gap-1 rounded-3xl hover:shadow-lg">
            AnyWhere
            <div className="divider lg:divider-horizontal"></div>
            Any week
            <div className="divider lg:divider-horizontal"></div>
            <span className="text-gray-400">Add guests</span>
            <BiSearch className="text-2xl text-white bg-red-500 p-1  rounded-full ms-2" />
          </div>
        </div>
        <div className="navbar-end ">
          <div className="flex items-center gap-3 cursor-pointer">
            <a className=" bg-white m-0 text-sm font-semibold hover:bg-slate-200 p-3 rounded-3xl">
              Airbnb your home{" "}
            </a>
            <a className=" bg-white m-0 text-xl font-semibold hover:bg-slate-200 p-3 rounded-3xl">
              <BiGlobe />
            </a>
            <div className=" bg-white  text-xl font-semibold flex items-center border-2 p-3 gap-3 rounded-3xl hover:shadow-xl  mb-2">
              <GiHamburgerMenu className="text-lg" />
              <FaCircleUser className="text-2xl text-gray-600" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
