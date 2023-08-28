import { useEffect, useState } from "react";
import "./Home.css";

import CustomInput from "../components/CustomInput";
import SubmitButton from "../components/SubmitButton";
import DatabaseButton from "../components/DatabaseButton";

import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";

import axios from "axios";
import DataDisplayComponent from "../components/DataDisplayComponent";
import { Link } from "react-router-dom";

function Home() {
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
      "X-RapidAPI-Key": "ed7b85fe80msh77491ed2c4da0e0p17f269jsn8568f1656544",
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
    <>
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

          <div className="submit-button">
            <SubmitButton
              variant="outlined"
              onClick={submitHandler}
              style={{ margin: "0 0 1rem 0" }}
            >
              Check
            </SubmitButton>
          </div>
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
          <div className="see-database-button">
            <Link to="stored-numbers">
              <DatabaseButton variant="contained">
                See Stored Numbers
              </DatabaseButton>
            </Link>
          </div>
        </div>
      </div>

      {phoneNumber && <DataDisplayComponent numberData={numberData} />}
    </>
  );
}

export default Home;
