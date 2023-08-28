import React from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

import "./NumbersFromDB.css";

import DatabaseButton from "../components/DatabaseButton";

import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";

const NumbersFromDB = ({ numData, onDelete }) => {
  const handleDelete = () => {
    // Call the onDelete callback to remove data from the frontend
    onDelete(numData.id);
    // Firebase Realtime Database URL
    const firebaseURL =
      "https://phonenumvalid-default-rtdb.firebaseio.com/numbers";

    // Construct the URL for the specific data entry to delete
    const deleteURL = `${firebaseURL}/${numData.id}.json`;

    // Send a DELETE request to remove the data
    axios
      .delete(deleteURL)
      .then((response) => {
        console.log("Data deleted successfully:", response);
        toast.success("Data deleted successfully", {
          bodyClassName: "toastify-success",
          progressClassName: "toastify-progress-success",
        });
      })
      .catch((error) => {
        console.error("Error deleting data:", error);
        toast.error("Error deleting data");
      });
  };
  return (
    <>
      <div className="db-data">
        <ToastContainer />
        <div className="column1">
          <div className="number-data-grouped">
            <span className="number-data-text">ID</span>{" "}
            <span className="number-data-value">{numData.id}</span>
          </div>
          <div className="number-data-grouped">
            <span className="number-data-text">PHONE VALID</span>{" "}
            <span className="number-data-value">
              {numData.phone_valid ? <CheckIcon /> : <ClearIcon />}{" "}
            </span>
          </div>
          <div className="number-data-grouped">
            <span className="number-data-text">COUNTRY </span>{" "}
            <span className="number-data-value">{numData.country}</span>
          </div>
          <div className="number-data-grouped">
            <span className="number-data-text">COUNTRY CODE</span>{" "}
            <span className="number-data-value"> {numData.country_code}</span>
          </div>
          <div className="number-data-grouped">
            <span className="number-data-text">COUNTRY PREFIX </span>
            <span className="number-data-value">{numData.country_prefix} </span>
          </div>
        </div>
        <div className="column2">
          <div className="number-data-grouped">
            <span className="number-data-text">E.164 </span>{" "}
            <span className="number-data-value">{numData.e164} </span>
          </div>
          <div className="number-data-grouped">
            <span className="number-data-text">CARRIER</span>{" "}
            <span className="number-data-value">{numData.carrier}</span>
          </div>
          <div className="number-data-grouped">
            <span className="number-data-text">INTERNATIONAL NUMBER </span>{" "}
            <span className="number-data-value">
              {numData.international_number}{" "}
            </span>
          </div>
          <div className="number-data-grouped">
            <span className="number-data-text">LOCAL NUMBER </span>{" "}
            <span className="number-data-value">{numData.local_number} </span>
          </div>
          <div className="number-data-grouped">
            <span className="number-data-text">PHONE TYPE</span>{" "}
            <span className="number-data-value">{numData.phone_type} </span>
          </div>
          <div className="delete-button">
            <DatabaseButton onClick={handleDelete} variant="contained">
              Delete Number
            </DatabaseButton>
          </div>
        </div>
      </div>
    </>
  );
};

export default NumbersFromDB;
