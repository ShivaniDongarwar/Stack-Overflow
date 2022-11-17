import React from "react";
import "../../App.css";
import LeftSideBar from "../LeftSideBar/LeftSideBar";
import RightSideBar from "../RightSideBar/RightSideBar";
import QuestionDetail from "./QuestionDetail";
import './Question.css';
function DisplayQuestion() {
  return (
    <div className="home-container-1">
      <LeftSideBar />
      <div className="home-container-2">
        <QuestionDetail />
        <RightSideBar />
      </div>
    </div>
  );
}

export default DisplayQuestion;
