import React, { useState } from "react";
import NavigationBar from "../NavigationBar/NavigationBar";
import PlaceCards from "../Categories/PlaceCards";

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div>
      {/* This is the parent component of the main two component I am showing */}
      <NavigationBar setSearchQuery={setSearchQuery} />
      <PlaceCards searchQuery={searchQuery} />
    </div>
  );
};

export default HomePage;
