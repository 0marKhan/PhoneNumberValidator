import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import StoredNumbers from "./pages/StoredNumbers";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="stored-numbers" element={<StoredNumbers />} />
      </Routes>
    </>
  );
};

export default App;
