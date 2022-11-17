import React from "react";
import { Link } from "react-router-dom";
import "./HomeSideBar.css";
function Questions(props) {
  const vote = props.que.upVotes - props.que.downVotes;

  return (
    <div className="display-ans-container">
      <div className="display-votes-ans">
        <p>{vote}</p>
        <p>votes</p>
      </div>
      <div className="display-votes-ans">
        <p>{props.que.noOfAnswers}</p>answers
      </div>
      <div className="display-question-details">
        <Link
          to={`/questions/${props.que._id}`}
          className="question-title-link"
        >
          {props.que.questionTitle}
        </Link>
        <div className="display-tags-time">
          <div className="display-tags">{props.que.questionTags}</div>
          <p className="display-time">
            asked a {props.que.askedOn} {props.que.userPosted}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Questions;
