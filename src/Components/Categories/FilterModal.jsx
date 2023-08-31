import React, { useEffect } from "react";
import "./FilterModal.css";
import Modal from "react-modal";
Modal.setAppElement("#root");
const FilterModal = ({
  isOpen,
  onClose,
  onApplyFilter,
  setFilteredResultsCount,
  places,
  filteredResultsCount,
}) => {
  // all the filtering options in this sate...
  const [filterOptions, setFilterOptions] = React.useState({
    type: "all",
    priceRange: [0, 200],
    bedrooms: [],
    beds: [],
    bathrooms: [],
    propertyType: [],
  });

  const applyFilters = () => {
    onApplyFilter(filterOptions);
    onClose();
  };
  useEffect(() => {
    const filteredData = places.filter(
      (place) =>
        (filterOptions.type === "all" || filterOptions.type === place.type) &&
        place.price >= filterOptions.priceRange[0] &&
        place.price <= filterOptions.priceRange[1] &&
        (filterOptions.bedrooms.length === 0 ||
          filterOptions.bedrooms.includes(place.bedrooms)) &&
        (filterOptions.beds.length === 0 ||
          filterOptions.beds.includes(place.beds)) &&
        (filterOptions.bathrooms.length === 0 ||
          filterOptions.bathrooms.includes(place.bathrooms)) &&
        (filterOptions.propertyType.length === 0 ||
          filterOptions.propertyType.includes(place.propertyType))
    );
    setFilteredResultsCount(filteredData.length);
  }, [filterOptions]);

  const [filterTypeText, setFilterTypeText] = React.useState("places");

  // conditional text to show in the filter button based on the selected type..
  useEffect(() => {
    if (filterOptions.type === "all") {
      setFilterTypeText("places");
    } else if (filterOptions.type === "room") {
      setFilterTypeText("rooms");
    } else if (filterOptions.type === "home") {
      setFilterTypeText("homes");
    }
  }, [filterOptions.type]);

  return (
    <div
      className={`fixed inset-0 z-50 ${
        isOpen ? "block" : "hidden"
      } bg-black bg-opacity-50 overflow-auto`}
    >
      <div className="flex items-center justify-center">
        <div className="bg-white p-4 rounded-lg custom-modal-width mt-32">
          <div className="mb-4">
            <label className=" font-bold flex mb-3 mt-4 text-xl">
              Type Of place:
            </label>
            <div className="flex gap-2">
              {["all", "room", "home"].map((type) => (
                <button
                  key={type}
                  onClick={() =>
                    setFilterOptions({ ...filterOptions, type: type })
                  }
                  className={`px-5 py-1 rounded-md  w-10/12 h-16 ${
                    filterOptions.type === type
                      ? "bg-black text-white"
                      : "bg-gray-200 text-gray-600"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>
          <div className="mb-4">
            <label className="font-bold flex mb-3 mt-4 text-xl">
              Price Range:{}
            </label>
            <input
              type="range"
              min={0}
              max={200}
              value={filterOptions.priceRange[0]}
              onChange={(e) =>
                setFilterOptions({
                  ...filterOptions,
                  priceRange: [e.target.value, filterOptions.priceRange[1]],
                })
              }
              className="w-full range bg-slate-950"
            />
            <div className="flex justify-between">
              <span>${filterOptions.priceRange[0]}</span>
              <span>${filterOptions.priceRange[1]}</span>
            </div>
          </div>
          <div className="mb-4 ">
            <label className="font-bold flex mb-3 mt-4 text-xl">
              Bedrooms:
            </label>
            <div className="flex gap-2 justify-center">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                <button
                  key={num}
                  onClick={() =>
                    setFilterOptions({
                      ...filterOptions,
                      bedrooms: [num],
                    })
                  }
                  className={`px-3 py-1 rounded-full w-32 h-10  ${
                    filterOptions.bedrooms.includes(num)
                      ? "bg-black text-white"
                      : "bg-gray-200 text-gray-600"
                  }`}
                >
                  {num}
                </button>
              ))}
            </div>
          </div>
          <div className="mb-4">
            <label className="font-bold flex mb-3 mt-4 text-xl">Beds:</label>
            <div className="flex gap-2 justify-center">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                <button
                  key={num}
                  onClick={() =>
                    setFilterOptions({
                      ...filterOptions,
                      beds: [num],
                    })
                  }
                  className={`px-3 py-1 rounded-full w-32 h-10 ${
                    filterOptions.beds.includes(num)
                      ? "bg-black text-white"
                      : "bg-gray-200 text-gray-600"
                  }`}
                >
                  {num}
                </button>
              ))}
            </div>
          </div>
          <div className="mb-4">
            <label className="font-bold flex mb-3 mt-4 text-xl">
              Bathrooms:
            </label>
            <div className="flex gap-2 justify-center">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                <button
                  key={num}
                  onClick={() =>
                    setFilterOptions({
                      ...filterOptions,
                      bathrooms: [num],
                    })
                  }
                  className={`px-3 py-1 rounded-full w-32 h-10 ${
                    filterOptions.bathrooms.includes(num)
                      ? "bg-black text-white"
                      : "bg-gray-200 text-gray-600"
                  }`}
                >
                  {num}
                </button>
              ))}
            </div>
          </div>
          <div className="mb-4">
            <label className="font-bold flex mb-3 mt-4 text-xl">
              Property Type:
            </label>
            <div className="flex gap-2 justify-center">
              {["house", "apartment", "guesthouse", "hotel"].map((type) => (
                <button
                  key={type}
                  onClick={() =>
                    setFilterOptions({
                      ...filterOptions,
                      propertyType: [type],
                    })
                  }
                  className={`px-3 py-1 w-10/12  rounded-xl h-14 ${
                    filterOptions.propertyType.includes(type)
                      ? "bg-black text-white"
                      : "bg-gray-200 text-gray-600"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>
          <div className="mt-4 flex justify-end">
            <button
              className="px-4 py-2 bg-black text-white rounded-md mr-2 h-12 font-semibold "
              onClick={applyFilters}
            >
              Show {filteredResultsCount} {filterTypeText}
            </button>
            <button
              className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md"
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterModal;
