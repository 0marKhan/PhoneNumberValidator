import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { BsFilter } from "react-icons/bs";

import CustomInput from "../components/CustomInput";
import DatabaseButton from "../components/DatabaseButton";

import "./SearchNumbers.css";

const SearchNumbers = ({ onSearch }) => {
  const [showSearch, setShowSearch] = useState(false);
  const [filterCriteria, setFilterCriteria] = useState({
    phoneNumber: "",
    idNumber: "",
    carrier: "",
    country: "",
  });

  const setShowSearchHandler = () => {
    setShowSearch(!showSearch);
  };

  // Function to update filter criteria states
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFilterCriteria({ ...filterCriteria, [name]: value });
  };

  // Function to handle search button click
  const handleSearchClick = () => {
    // Call the parent component's onSearch callback with the filter criteria
    onSearch(filterCriteria);
  };

  // Function to clear the filter criteria and show all numbers
  const clearFilters = () => {
    setFilterCriteria({
      phoneNumber: "",
      idNumber: "",
      carrier: "",
      country: "",
    });
    // Pass an empty filter criteria object to show all numbers
    onSearch({});
  };

  // jsx for the search that shows on filter click
  const searchBox = (
    <div>
      <div className="search-box">
        <div className="search-box-content">
          <CustomInput
            label="Phone Number"
            variant="standard"
            style={{ margin: "0 1rem 0 1rem" }}
            name="phoneNumber"
            value={filterCriteria.phoneNumber}
            onChange={handleInputChange}
          />
          <CustomInput
            label="ID Number"
            variant="standard"
            style={{ margin: "0 1rem 0 1rem" }}
            name="idNumber"
            value={filterCriteria.idNumber}
            onChange={handleInputChange}
          />

          <CustomInput
            label="Carrier"
            variant="standard"
            style={{ margin: "0 1rem 0 1rem" }}
            name="carrier"
            value={filterCriteria.carrier}
            onChange={handleInputChange}
          />
          <CustomInput
            label="Country"
            variant="standard"
            style={{ margin: "0 1rem 0 1rem" }}
            name="country"
            value={filterCriteria.country}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="search-button">
        <span className="btn1">
          <DatabaseButton onClick={handleSearchClick} variant="contained">
            Search
          </DatabaseButton>
        </span>
        <DatabaseButton onClick={clearFilters} variant="contained">
          Remove Filters
        </DatabaseButton>
      </div>
    </div>
  );

  return (
    <>
      <div className="title-section">
        <h3>
          <span className="search-heading">SearchNumbers</span>
          <SearchIcon style={{ color: "white" }} />
        </h3>
      </div>
      <div className="filter-icon">
        <BsFilter
          onClick={setShowSearchHandler}
          style={{ cursor: "pointer" }}
        />
      </div>
      {showSearch && searchBox}
    </>
  );
};

export default SearchNumbers;
