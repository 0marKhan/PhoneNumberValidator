import React, { useEffect, useState } from "react";
import "./StoredNumbers.css";
import axios from "axios";

import NumbersFromDB from "../components/NumbersFromDB";
import SubmitButton from "../components/SubmitButton";

import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { Link } from "react-router-dom";

const StoredNumbers = () => {
  const [loadedNumbers, setLoadedNumbers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getStoredNumbers = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          "https://phonenumvalid-default-rtdb.firebaseio.com/numbers.json"
        );

        const tempLoadedNumbers = [];

        for (const key in response.data) {
          tempLoadedNumbers.push({
            id: key,
            carrier: response.data[key].carrier,
            country: response.data[key].country,
            country_code: response.data[key].country_code,
            country_prefix: response.data[key].country_prefix,
            data_fetching: response.data[key].data_fetching,
            e164: response.data[key].e164,
            international_number: response.data[key].international_number,
            local_number: response.data[key].local_number,
            phone_type: response.data[key].phone_type,
            phone_valid: response.data[key].phone_valid,
          });
        }

        setLoadedNumbers(tempLoadedNumbers); // data saved from the helper function
      } catch (e) {
      } finally {
        setLoading(false);
      }
    };

    getStoredNumbers();
  }, []);

  return (
    <div>
      <div className="back-to-home">
        <Link to="/">
          <SubmitButton variant="outlined">Back</SubmitButton>
        </Link>
      </div>
      <h1 className="stored_numbers-title">StoredNumbers</h1>
      {loadedNumbers.map((nums) => (
        <NumbersFromDB
          key={nums.id}
          numData={nums}
          onDelete={(deletedId) => {
            setLoadedNumbers((prevLoadedNumbers) =>
              prevLoadedNumbers.filter((num) => num.id !== deletedId)
            );
          }}
        />
      ))}
      {/* Conditionally render the Backdrop and CircularProgress */}
      {loading && (
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={loading}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      )}
    </div>
  );
};

export default StoredNumbers;
