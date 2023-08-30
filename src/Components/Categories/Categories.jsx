import React from "react";
import { FaUmbrellaBeach, FaGolfBall, FaSwimmingPool } from "react-icons/fa";
import { GiMountainCave, GiIsland, GiCampingTent } from "react-icons/gi";
import PlaceCards from "./PlaceCards";
const Categories = () => {
  return (
    <div>
      {/* categories here */}
      <div>
        <ul className="flex gap-10  justify-center ">
          <li className="flex flex-col items-center hover:border-b-2 cursor-pointer">
            <FaUmbrellaBeach className="text-2xl text-gray-600" />
            <span className="text-sm font-semibold text-gray-500 mt-2 pb-3">
              Beach
            </span>
          </li>
          <li className="flex flex-col items-center hover:border-b-2 cursor-pointer ">
            <FaGolfBall className="text-2xl text-gray-600" />
            <span className="text-sm font-semibold text-gray-500 mt-2 pb-3">
              Golfing
            </span>
          </li>
          <li className="flex flex-col items-center hover:border-b-2 cursor-pointer">
            <GiMountainCave className="text-2xl text-gray-600" />
            <span className="text-sm font-semibold text-gray-500 mt-2 pb-3">
              Caves
            </span>
          </li>
          <li className="flex flex-col items-center hover:border-b-2 cursor-pointer">
            <FaSwimmingPool className="text-2xl text-gray-600" />
            <span className="text-sm font-semibold text-gray-500 mt-2 pb-3">
              Amazing Pools
            </span>
          </li>
          <li className="flex flex-col items-center hover:border-b-2 cursor-pointer">
            <GiIsland className="text-2xl text-gray-600" />
            <span className="text-sm font-semibold text-gray-500 mt-2 pb-3">
              Island
            </span>
          </li>
          <li className="flex flex-col items-center hover:border-b-2 cursor-pointer">
            <GiCampingTent className="text-2xl text-gray-600" />
            <span className="text-sm font-semibold text-gray-500 mt-2 pb-3">
              Camping
            </span>
          </li>
        </ul>
      </div>
      {/* place cards here  */}
      <div>
        <PlaceCards />
      </div>
    </div>
  );
};

export default Categories;
