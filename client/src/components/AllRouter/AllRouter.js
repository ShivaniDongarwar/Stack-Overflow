import React from "react";
import { Route, Routes } from "react-router-dom";
import AskQuestion from "../Pages/AskQuestion/AskQuestion";
// import Question from "../Pages/Question";
import Auth from "../Pages/Auth/Auth";
import Home from "../Pages/Home/Home";
import DisplayQuestion from "../Question/DisplayQuestion";

function AllRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/question" element={<Home />} />
      <Route path="/askQuestion" element={<AskQuestion />} />
      <Route path="/questions/:id" element={<DisplayQuestion />} />
    </Routes>
  );
}

export default AllRouter;
