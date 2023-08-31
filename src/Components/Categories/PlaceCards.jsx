import React, { useState, useEffect } from "react";
import {
  FaHeart,
  FaUmbrellaBeach,
  FaGolfBall,
  FaSwimmingPool,
} from "react-icons/fa";
import { GiMountainCave, GiIsland, GiCampingTent } from "react-icons/gi";
import { BiSliderAlt } from "react-icons/bi";
import FilterModal from "./FilterModal";

// sending searchQuery from here to the searchBox component...
const PlaceCards = ({ searchQuery }) => {
  const [places, setPlaces] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const [filteredResults, setFilteredResults] = useState([]);
  const [filteredResultsCount, setFilteredResultsCount] = useState(0);
  const [loadingData, setLoadingData] = useState(true);

  useEffect(() => {
    fetch("https://airbnb-server-ten.vercel.app/data") //my url api from vercel
      .then((response) => response.json())
      .then((data) => {
        setPlaces(data);
        setLoadingData(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoadingData(false);
      });
  }, []);

  // month info will go from here
  const getMonthName = (monthIndex) => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    return months[monthIndex - 1];
  };

  const filteredPlacesByCategory =
    selectedCategory === "all"
      ? places
      : places.filter((place) => place.category === selectedCategory);

  //   const filteredPlaces =
  //     selectedCategory === "all"
  //       ? places
  //       : places.filter((place) => place.category === selectedCategory);

  const filteredPlacesBySearch = filteredPlacesByCategory.filter((place) =>
    place.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  //   const filteredPlacesWithSearch =
  //     searchQuery === "" ? filteredPlacesByCategory : filteredPlacesBySearch;

  const applyFilters = (filters) => {
    const filteredData = places.filter(
      (place) =>
        (filters.type === "all" || filters.type === place.type) &&
        place.price >= filters.priceRange[0] &&
        place.price <= filters.priceRange[1] &&
        (filters.bedrooms.length === 0 ||
          filters.bedrooms.includes(place.bedrooms)) &&
        (filters.beds.length === 0 || filters.beds.includes(place.beds)) &&
        (filters.bathrooms.length === 0 ||
          filters.bathrooms.includes(place.bathrooms)) &&
        (filters.propertyType.length === 0 ||
          filters.propertyType.includes(place.propertyType))
      // ... Apply other filters similarly
    );

    setFilteredResults(filteredData);
    setFilteredResultsCount(filteredData.length); // Update the count
  };
  // reload function
  const reloadPage = () => {
    setLoadingData(true);
    window.location.reload();
  };
  return (
    <div>
      <div className="flex gap-10 justify-center pb-3 mt-5">
        <div
          className={`flex flex-col items-center hover:border-b-2 cursor-pointer ${
            selectedCategory === "all" ? "border-b-2" : ""
          }`}
          onClick={() => {
            setSelectedCategory("all");
            reloadPage(); // Call the reload function
          }}
        >
          <FaHeart
            className={`text-2xl ${
              selectedCategory === "all" ? "text-black" : "text-gray-600"
            }`}
          />
          <span
            className={`text-sm font-semibold ${
              selectedCategory === "all" ? "text-black" : "text-gray-500"
            } mt-2`}
          >
            All
          </span>
        </div>
        <div
          className={`flex flex-col items-center hover:border-b-2 cursor-pointer ${
            selectedCategory === "beach" ? "border-b-2" : ""
          }`}
          onClick={() => setSelectedCategory("beach")}
        >
          <FaUmbrellaBeach
            className={`text-2xl ${
              selectedCategory === "beach" ? "text-black" : "text-gray-600"
            }`}
          />
          <span
            className={`text-sm font-semibold ${
              selectedCategory === "beach" ? "text-black" : "text-gray-500"
            } mt-2`}
          >
            Beach
          </span>
        </div>
        <div
          className={`flex flex-col items-center hover:border-b-2 cursor-pointer ${
            selectedCategory === "golf" ? "border-b-2" : ""
          }`}
          onClick={() => setSelectedCategory("golf")}
        >
          <FaGolfBall
            className={`text-2xl ${
              selectedCategory === "golf" ? "text-black" : "text-gray-600"
            }`}
          />
          <span
            className={`text-sm font-semibold ${
              selectedCategory === "golf" ? "text-black" : "text-gray-500"
            } mt-2`}
          >
            Golfing
          </span>
        </div>
        <div
          className={`flex flex-col items-center hover:border-b-2 cursor-pointer ${
            selectedCategory === "cave" ? "border-b-2" : ""
          }`}
          onClick={() => setSelectedCategory("cave")}
        >
          <GiMountainCave
            className={`text-2xl ${
              selectedCategory === "cave" ? "text-black" : "text-gray-600"
            }`}
          />
          <span
            className={`text-sm font-semibold ${
              selectedCategory === "cave" ? "text-black" : "text-gray-500"
            } mt-2`}
          >
            Cave
          </span>
        </div>
        <div
          className={`md:flex hidden flex-col items-center hover:border-b-2 cursor-pointer ${
            selectedCategory === "pool" ? "border-b-2" : ""
          }`}
          onClick={() => setSelectedCategory("pool")}
        >
          <FaSwimmingPool
            className={`text-2xl ${
              selectedCategory === "pool" ? "text-black" : "text-gray-600"
            }`}
          />
          <span
            className={`text-sm font-semibold ${
              selectedCategory === "pool" ? "text-black" : "text-gray-500"
            } mt-2`}
          >
            Amazing Pools
          </span>
        </div>
        <div
          className={`md:flex hidden flex-col items-center hover:border-b-2 cursor-pointer ${
            selectedCategory === "island" ? "border-b-2" : ""
          }`}
          onClick={() => setSelectedCategory("island")}
        >
          <GiIsland
            className={`text-2xl ${
              selectedCategory === "island" ? "text-black" : "text-gray-600"
            }`}
          />
          <span
            className={`text-sm font-semibold ${
              selectedCategory === "island" ? "text-black" : "text-gray-500"
            } mt-2`}
          >
            Island
          </span>
        </div>
        <div
          className={`md:flex hidden flex-col items-center hover:border-b-2 cursor-pointer ${
            selectedCategory === "camp" ? "border-b-2" : ""
          }`}
          onClick={() => setSelectedCategory("camp")}
        >
          <GiCampingTent
            className={`text-2xl ${
              selectedCategory === "camp" ? "text-black" : "text-gray-600"
            }`}
          />
          <span
            className={`text-sm font-semibold ${
              selectedCategory === "camp" ? "text-black" : "text-gray-500"
            } mt-2`}
          >
            Camping
          </span>
        </div>
        <div
          onClick={() => setIsFilterModalOpen(true)}
          className="  hidden border rounded-3xl p-2 md:flex items-center justify-center gap-3 hover:bg-slate-100 hover:shadow-xl cursor-pointer"
        >
          <BiSliderAlt
            className={`text-xl ${
              selectedCategory === "camp" ? "text-black" : "text-gray-600"
            }`}
          />
          <span
            className={`text-sm font-semibold ${
              selectedCategory === "camp" ? "text-black" : "text-gray-500"
            } `}
          >
            filter
          </span>
        </div>
        {/* Rendering the FilterModal component */}
        <FilterModal
          isOpen={isFilterModalOpen}
          onClose={() => setIsFilterModalOpen(false)}
          onApplyFilter={applyFilters}
          setFilteredResultsCount={setFilteredResultsCount}
          places={places}
          filteredResultsCount={filteredResultsCount}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 md:m-5 m-3">
        {/* all the card will show from here by using map */}
        {loadingData ? (
          <div className="absolute inset-0 flex justify-center items-center">
            <span className="loading loading-ring  text-red-500 font-bold w-20"></span>
          </div>
        ) : (
          //showing logic implemented here...
          (filteredResults.length > 0
            ? filteredResults
            : filteredPlacesBySearch
          ).map((place) => (
            <div
              className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md relative text-left"
              key={place.title}
            >
              <div className="absolute top-0 right-0 p-2">
                <FaHeart className="text-white text-2xl hover:text-red-500 cursor-pointer" />
              </div>
              <img
                src={place.image}
                alt={place.title}
                className="h-48 w-full object-cover"
              />
              <div className="px-4 py-3">
                <h3 className="text-xl font-semibold mb-2">{place.title}</h3>
                <p className="text-gray-600 text-sm mb-2">{place.subtitle}</p>
                <p className="text-gray-800 text-sm">
                  Available:{" "}
                  <span className="me-1">
                    {getMonthName(place["available-month"])}
                  </span>
                  {place["available-date"][0]} -{" "}
                  {place["available-date"][place["available-date"].length - 1]}
                </p>
                <p className="text-lg font-semibold mt-2">${place.price}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default PlaceCards;
