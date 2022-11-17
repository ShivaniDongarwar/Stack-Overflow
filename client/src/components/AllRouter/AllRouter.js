import React from "react";
import { Route, Routes } from "react-router-dom";
// import Question from "../Pages/Question";
import Auth from "../Pages/Auth/Auth";
import Home from "../Pages/Home/Home";

function AllRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/question" element={<Home />} />
    </Routes>
  );
}

export default AllRouter;
