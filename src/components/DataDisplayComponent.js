import React from "react";
import "./DataDisplayComponent.css";
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";
import SubmitButton from "./SubmitButton";

const DataDisplayComponent = ({ numberData }) => {
  return (
    <div className="centered-listed-data">
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
          <SubmitButton variant="outlined">Store</SubmitButton>
        </div>
      </div>
    </div>
  );
};

export default DataDisplayComponent;
