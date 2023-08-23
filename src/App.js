import "./App.css";

import CustomTextField from "./components/CustomTextField";
import SubmitButton from "./components/SubmitButton";
import axios from "axios";

const options = {
  method: "GET",
  url: "https://phonenumbervalidatefree.p.rapidapi.com/ts_PhoneNumberValidateTest.jsp",
  params: {
    number: "+59894887799",
    country: "UY",
  },
  headers: {
    "X-RapidAPI-Key": "83836b648amsh97b5e8ec6497369p134bb7jsna8e79cb8fed1",
    "X-RapidAPI-Host": "phonenumbervalidatefree.p.rapidapi.com",
  },
};

const getPhoneNumberValidity = async () => {
  try {
    const response = await axios.request(options);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};

function App() {
  return (
    <div>
      <h1 className="title">PhoneNumValid</h1>
      <div>
        <CustomTextField
          id="standard-basic"
          label="Phone Number"
          variant="standard"
        />
        <SubmitButton variant="outlined" onClick={getPhoneNumberValidity}>
          Check
        </SubmitButton>
      </div>
    </div>
  );
}

export default App;
