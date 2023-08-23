import { useEffect, useState } from "react";
import "./App.css";

import CustomInput from "./components/CustomInput";
import SubmitButton from "./components/SubmitButton";

import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";

import axios from "axios";

function App() {
  const [numberInput, setNumberInput] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [loading, setLoading] = useState(false);
  const [numberData, setNumberData] = useState("");
  const [error, setError] = useState(false);

  const options = {
    method: "GET",
    url: "https://veriphone.p.rapidapi.com/verify",
    params: {
      phone: phoneNumber,
    },
    headers: {
      "X-RapidAPI-Key": "83836b648amsh97b5e8ec6497369p134bb7jsna8e79cb8fed1",
      "X-RapidAPI-Host": "veriphone.p.rapidapi.com",
    },
  };

  const getPhoneNumberValidity = async () => {
    try {
      setLoading(true); // Set loading to true when the API call starts
      const response = await axios.request(options);
      console.log(response.data);
      setNumberData(response.data);
    } catch (error) {
      console.error("Request failed:", error);
      if (error.response) {
        console.error("Response data:", error.response.data);
        console.error("Response status:", error.response.status);
      }
      setError(true);
    } finally {
      setLoading(false); // Set loading to false when the API call is done
    }
  };

  const setNumberInputHandler = (event) => {
    setNumberInput(event.target.value);
  };

  useEffect(() => {
    if (phoneNumber.trim() !== "") {
      getPhoneNumberValidity();
    }
  }, [phoneNumber]);

  const submitHandler = () => {
    const inputPhoneNumber = numberInput.trim();

    // Check the pattern here
    const pattern = /^(\+\d+|\d+)$/; // Allow a plus sign followed by digits or just digits
    if (pattern.test(inputPhoneNumber) || inputPhoneNumber === "") {
      setPhoneNumber(inputPhoneNumber); // Set phoneNumber
      setNumberInput(""); // Clear the input box
      setError(false); // Reset error state
    } else {
      setError(true);
    }
  };

  return (
    <div>
      <div className="card-container">
        <div className="card">
          <h1 className="title">
            <PhoneIphoneIcon style={{ color: "white" }} />
            <span className="title-text">PhoneNumValid</span>
          </h1>
        </div>
      </div>
      <div className="middle-data">
        <form>
          <LocalPhoneIcon style={{ color: "white", marginTop: "1.5rem" }} />
          <CustomInput
            id="standard-basic"
            label="Phone Number"
            variant="standard"
            onChange={setNumberInputHandler}
            value={numberInput}
            error={error} // Use the error state
            helperText={error ? "Invalid phone number format" : ""}
            style={{ margin: "0rem 1rem 0rem 1rem" }}
          />

          <SubmitButton
            variant="outlined"
            onClick={submitHandler}
            style={{ margin: "0 0 1rem 0" }}
          >
            Check
          </SubmitButton>
          {/* Conditionally render the Backdrop and CircularProgress */}
          {loading && (
            <Backdrop
              sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
              open={loading}
            >
              <CircularProgress color="inherit" />
            </Backdrop>
          )}
        </form>
        <div className="side-card">
          <p>
            This is a website, that lets you{" "}
            <span className="important-text">validate</span> phone numbers on
            input, find out its <span className="important-text">carrier</span>,
            the <span className="important-text">country</span> and{" "}
            <span className="important-text">region</span> the number is from as
            well as the <span className="important-text">international</span>{" "}
            and <span className="important-text">local</span> format. Other than
            this you can also <span className="important-text">store</span>{" "}
            numbers to see them later
          </p>
        </div>
      </div>
      <div className="number-data">
        <div>
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
            <span className="data-text">INTERNATIONAL NUMBER</span>{" "}
            <span className="data-value">
              {numberData.international_number}
            </span>
          </div>
          <div className="group-data">
            <span className="data-text">LOCAL NUMBER</span>{" "}
            <span className="data-value">{numberData.local_number}</span>
          </div>
          <div className="group-data">
            <span className="data-text">PHONE TYPE</span>{" "}
            <span className="data-value">{numberData.phone_type}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
