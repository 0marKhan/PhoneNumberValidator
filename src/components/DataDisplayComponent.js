import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./DataDisplayComponent.css";

import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";

import SubmitButton from "./SubmitButton";
import axios from "axios";

const DataDisplayComponent = ({ numberData }) => {
  const saveToDatabase = () => {
    const newData = {
      carrier: numberData.carrier,
      country: numberData.country,
      country_code: numberData.country_code,
      country_prefix: numberData.country_prefix,
      data_fetching: numberData.data_fetching,
      e164: numberData.e164,
      international_number: numberData.international_number,
      local_number: numberData.local_number,
      phone_type: numberData.phone_type,
      phone_valid: numberData.phone_valid,
    };

    axios
      .post(
        "https://phonenumvalid-default-rtdb.firebaseio.com/numbers.json",
        newData
      )
      .then((response) => {
        console.log("Data saved successfully:", response);
        toast.success("Data stored successfully", {
          bodyClassName: "toastify-success",
          progressClassName: "toastify-progress-success",
        });
      })
      .catch((error) => {
        console.error("Error saving data:", error);
        toast.error("Data storing failed", {});
      });
  };

  return (
    <div className="centered-listed-data">
      <ToastContainer />
      <div className="listed-data">
        <div className="group-data">
          <span className="data-text">PHONE VALID</span>
          <span className="data-value">
            {numberData.phone_valid ? <CheckIcon /> : <ClearIcon />}
          </span>
        </div>
        <div className="group-data">
          <span className="data-text">DATA FETCHING STATUS</span>
          <span className="data-value">{numberData.status}</span>
        </div>
        <div className="group-data">
          <span className="data-text">COUNTRY </span>
          <span className="data-value">{numberData.country}</span>
        </div>
        <div className="group-data">
          <span className="data-text">COUNTRY CODE</span>{" "}
          <span className="data-value">{numberData.country_code}</span>
        </div>
        <div className="group-data">
          <span className="data-text">COUNTRY PREFIX</span>
          <span className="data-value">{numberData.country_prefix}</span>
        </div>
        <div className="group-data">
          <span className="data-text">E. 164</span>{" "}
          <span className="data-value">{numberData.e164}</span>
        </div>
        <div className="group-data">
          <span className="data-text">CARRIER</span>{" "}
          <span className="data-value">{numberData.carrier}</span>
        </div>
        <div className="group-data">
          <span className="data-text">INTERNATIONAL NUMBER</span>{" "}
          <span className="data-value">{numberData.international_number}</span>
        </div>
        <div className="group-data">
          <span className="data-text">LOCAL NUMBER</span>{" "}
          <span className="data-value">{numberData.local_number}</span>
        </div>
        <div className="group-data">
          <span className="data-text">PHONE TYPE</span>{" "}
          <span className="data-value">{numberData.phone_type}</span>
        </div>
        <div className="store-button">
          <SubmitButton onClick={saveToDatabase} variant="outlined">
            Store
          </SubmitButton>
        </div>
      </div>
    </div>
  );
};

export default DataDisplayComponent;
