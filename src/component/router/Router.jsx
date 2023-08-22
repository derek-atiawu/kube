import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbars from "../navbar/Navbars";
import Home from "../../pages/homepage/Home";
import Signup from "../../pages/signuppage/Signup";
import Footers from "../footer/footer";

function Router() {
  return (
    <BrowserRouter>
      <Navbars />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>{" "}
      <Footers />
    </BrowserRouter>
  );
}

export default Router;
