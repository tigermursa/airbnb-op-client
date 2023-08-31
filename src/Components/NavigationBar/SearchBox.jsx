import React, { useState } from "react";
import { BiGlobe, BiSearch } from "react-icons/bi";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const SearchBox = ({ isOpen, setSearchQuery, toggleSearchBox }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [guestCount, setGuestCount] = useState({
    adults: 0,
    children: 0,
    pets: 0,
  });
  const [showGuestSelector, setShowGuestSelector] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleSearch = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toggleSearchBox(); // Closing  the SearchBox here
    }, 1500);
  };
  const toggleGuestSelector = () => {
    setShowGuestSelector((prevState) => !prevState);
  };

  const handleIncrement = (type) => {
    setGuestCount((prevCounts) => ({
      ...prevCounts,
      [type]: prevCounts[type] + 1,
    }));
  };

  const handleDecrement = (type) => {
    if (guestCount[type] > 0) {
      setGuestCount((prevCounts) => ({
        ...prevCounts,
        [type]: prevCounts[type] - 1,
      }));
    }
  };

  const totalGuests = guestCount.adults + guestCount.children + guestCount.pets;
  const handleSearchInputChange = (e) => {
    const newSearchQuery = e.target.value;
    setSearchQuery(newSearchQuery); // Updating search query in parent component here
  };
  return (
    <div
      className={`z-10 ${
        isOpen ? "" : "hidden"
      } transition-opacity duration-150 `}
    >
      <div className="navbar-center hidden lg:flex mb-2 justify-center items-center">
        <div className="bg-white text-sm font-semibold flex items-center justify-center border-2 p-3 gap-1 rounded-3xl hover:shadow-lg h-20 w-2/4">
          <div className="text-start rounded-full hover:bg-pink-100 p-5 cursor-pointer ">
            <h4 className="font-bold">Where</h4>
            <input
              type="text"
              className="outline-none bg-transparent w-full text-gray-600 placeholder-gray-400"
              placeholder="Search destinations"
              onChange={handleSearchInputChange}
            />
          </div>
          <div className="divider lg:divider-horizontal "></div>
          <div className="text-start cursor-pointer hover:bg-pink-100 p-5 rounded-full ">
            <h4>Check in</h4>
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              placeholderText="Add dates"
              className="outline-none bg-transparent w-36 text-gray-600 placeholder-gray-400 cursor-pointer"
            />
          </div>

          <div className="divider lg:divider-horizontal"></div>
          <div className="flex items-center justify-between gap-4 hover:bg-pink-100  rounded-full">
            <span
              className="text-gray-400 cursor-pointer"
              onClick={toggleGuestSelector}
            >
              Add guests ({totalGuests} guests)
            </span>
            <div
              className="bg-red-500 text-white rounded-full flex justify-center items-center w-36 h-16 cursor-pointer"
              onClick={handleSearch}
            >
              <BiSearch className="text-3xl ms-2" />
              <span className="text-xl hi">
                {loading ? (
                  <span className="loading loading-bars loading-lg"></span>
                ) : (
                  "Search"
                )}
              </span>
            </div>
          </div>
        </div>
      </div>
      {showGuestSelector && (
        <div
          className="bg-white p-4 mt-2 border rounded-lg shadow-md absolute z-10   "
          style={{ right: "30%" }}
        >
          <div className="flex flex-col">
            <div className="flex items-center gap-4 mb-2">
              <div className="flex flex-col">
                <span className="text-gray-600">Adults</span>
                <div className="flex items-center gap-2">
                  <button
                    className="text-gray-400"
                    onClick={() => handleDecrement("adults")}
                  >
                    -
                  </button>
                  <span>{guestCount.adults}</span>
                  <button
                    className="text-gray-400"
                    onClick={() => handleIncrement("adults")}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-gray-600">Children</span>
                <div className="flex items-center gap-2">
                  <button
                    className="text-gray-400"
                    onClick={() => handleDecrement("children")}
                  >
                    -
                  </button>
                  <span>{guestCount.children}</span>
                  <button
                    className="text-gray-400"
                    onClick={() => handleIncrement("children")}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-gray-600">Pets</span>
                <div className="flex items-center gap-2">
                  <button
                    className="text-gray-400"
                    onClick={() => handleDecrement("pets")}
                  >
                    -
                  </button>
                  <span>{guestCount.pets}</span>
                  <button
                    className="text-gray-400"
                    onClick={() => handleIncrement("pets")}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
            <button
              className="bg-red-500 text-white rounded-lg p-2 mt-2 cursor-pointer"
              onClick={toggleGuestSelector}
            >
              Done
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBox;
