import React, { useState, useEffect } from "react";
import { FaHeart, FaUmbrellaBeach, FaGolfBall, FaSwimmingPool } from "react-icons/fa";
import { GiMountainCave, GiIsland, GiCampingTent } from "react-icons/gi";

const PlaceCards = () => {
  const [places, setPlaces] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => setPlaces(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const getMonthName = (monthIndex) => {
    const months = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December",
    ];
    return months[monthIndex - 1];
  };

  const filteredPlaces = selectedCategory === "all"
    ? places
    : places.filter(place => place.category === selectedCategory);

  return (
    <div>
      <div className="flex gap-10 justify-center pb-3">
        <div className={`flex flex-col items-center hover:border-b-2 cursor-pointer ${selectedCategory === "all" ? 'border-b-2' : ''}`} onClick={() => setSelectedCategory("all")}>
          <FaHeart className="text-2xl text-gray-600" />
          <span className="text-sm font-semibold text-gray-500 mt-2">All</span>
        </div>
        <div className={`flex flex-col items-center hover:border-b-2 cursor-pointer ${selectedCategory === "beach" ? 'border-b-2' : ''}`} onClick={() => setSelectedCategory("beach")}>
          <FaUmbrellaBeach className="text-2xl text-gray-600" />
          <span className="text-sm font-semibold text-gray-500 mt-2">Beach</span>
        </div>
        <div className={`flex flex-col items-center hover:border-b-2 cursor-pointer ${selectedCategory === "golf" ? 'border-b-2' : ''}`} onClick={() => setSelectedCategory("golf")}>
          <FaGolfBall className="text-2xl text-gray-600" />
          <span className="text-sm font-semibold text-gray-500 mt-2">Golfing</span>
        </div>
        <div className={`flex flex-col items-center hover:border-b-2 cursor-pointer ${selectedCategory === "cave" ? 'border-b-2' : ''}`} onClick={() => setSelectedCategory("cave")}>
          <GiMountainCave className="text-2xl text-gray-600" />
          <span className="text-sm font-semibold text-gray-500 mt-2">Cave</span>
        </div>
        <div className={`flex flex-col items-center hover:border-b-2 cursor-pointer ${selectedCategory === "pool" ? 'border-b-2' : ''}`} onClick={() => setSelectedCategory("pool")}>
          <FaSwimmingPool className="text-2xl text-gray-600" />
          <span className="text-sm font-semibold text-gray-500 mt-2">Amazing Pools</span>
        </div>
        <div className={`flex flex-col items-center hover:border-b-2 cursor-pointer ${selectedCategory === "island" ? 'border-b-2' : ''}`} onClick={() => setSelectedCategory("island")}>
          <GiIsland className="text-2xl text-gray-600" />
          <span className="text-sm font-semibold text-gray-500 mt-2">Island</span>
        </div>
        <div className={`flex flex-col items-center hover:border-b-2 cursor-pointer ${selectedCategory === "camp" ? 'border-b-2' : ''}`} onClick={() => setSelectedCategory("camp")}>
          <GiCampingTent className="text-2xl text-gray-600" />
          <span className="text-sm font-semibold text-gray-500 mt-2">Camping</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 md:m-5 m-3">
        {filteredPlaces.map((place) => (
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md relative text-left" key={place.title}>
            <div className="absolute top-0 right-0 p-2">
              <FaHeart className="text-white text-2xl hover:text-red-500 cursor-pointer" />
            </div>
            <img src={place.image} alt={place.title} className="h-48 w-full object-cover" />
            <div className="px-4 py-3">
              <h3 className="text-xl font-semibold mb-2">{place.title}</h3>
              <p className="text-gray-600 text-sm mb-2">{place.subtitle}</p>
              <p className="text-gray-800 text-sm">
                Available: <span className="me-1">{getMonthName(place["available-month"])}</span>
                {place["available-date"][0]} - {place["available-date"][place["available-date"].length - 1]}
              </p>
              <p className="text-lg font-semibold mt-2">${place.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlaceCards;
