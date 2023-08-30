import React, { useState, useEffect } from "react";

const PlaceCards = () => {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    fetch("/data.json") // Adjust the path based on your file structure
      .then((response) => response.json())
      .then((data) => setPlaces(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

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

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 md:m-5">
      {places.map((place) => (
        <div
          className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md text-left"
          key={place.title}
        >
          <img
            src={place.image}
            alt={place.title}
            className="h-48 w-full object-cover"
          />
          <div className="px-4 py-3">
            <h3 className="text-xl font-semibold mb-2">{place.title}</h3>
            <p className="text-gray-600 text-sm mb-2">{place.subtitle}</p>
            <p className="text-gray-800 text-sm">
              Available: <span className="me-1"> {place.availablemonth} </span>
              {place["available-date"][0]} -{" "}
              {place["available-date"][place["available-date"].length - 1]}
            </p>
            <p className="text-lg font-semibold mt-2">${place.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PlaceCards;
