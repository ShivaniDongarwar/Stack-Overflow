import React from "react";
import { NavLink } from "react-router-dom";
import globe from "../../assetes/assets/Globe.svg";
import "./LeftSideBar.css";

function LeftSideBar() {
  return (
    <div className="left-sidebar">
      <nav className="side-nav">
        <NavLink to="/" className="side-nav-links" activeclassname="active">
          <p>Home</p>
        </NavLink>
        <div>
          <div>
            <p>Public</p>
          </div>
          <NavLink to='/question' className="side-nav-links" activeclassname="active" >
            <img src={globe} alt="globe"></img>
            <p style={{paddingLeft:'10px'}}>Question</p>
          </NavLink>
          <NavLink to='/tag'  className="side-nav-links" activeclassname="active">
            <p style={{paddingLeft:'40px'}}>Tag</p>
          </NavLink>
          <NavLink to='/user'  className="side-nav-links" activeclassname="active">
            <p style={{paddingLeft:'40px'}}>User</p>
          </NavLink>
        </div>
      </nav>
    </div>
  );
}

export default LeftSideBar;
