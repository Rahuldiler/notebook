import React from "react";
import Header from "./component/Header";
import { Route, Routes } from "react-router-dom";
import SignUp from "./component/SignUp";
import Home from "./component/Home";
import MenProduct from "./component/men/MenProduct";
import WomenProduct from "./component/women/WomenProduct";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/menProduct" element={<MenProduct />} />
        <Route exact path="/womenProduct" element={<WomenProduct />} />
      </Routes>
    </>
  );
};

export default App;
