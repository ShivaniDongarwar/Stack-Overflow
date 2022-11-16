import React from "react";
import { Link } from "react-router-dom";
import logo from "../assetes/assets/LogoMd.svg";
import search from "../assetes/assets/Search.svg";
import Avatar from "./Avatar/Avatar";
import "./NavBar.css";
function NavBar() {
  let User = null;
  return (
    <nav className="main-nav">
      <div className="navbar">
        <Link to="/" className="nav-item nav-logo">
          <img src={logo} alt="logo" />
        </Link>
        <Link to="/" className="nav-item nav-btn">
          About
        </Link>
        <Link to="/" className="nav-item nav-btn">
          Products
        </Link>
        <Link to="/" className="nav-item nav-btn">
          For Teams
        </Link>
        <form>
          <input type="text" placeholder="Search..."></input>
          <img
            src={search}
            alt="search"
            width="1b"
            className="search-icon "
          ></img>
        </form>
        {User === null ? (
          <Link to="/auth" className="nav-item nav-link">
            Log In
          </Link>
        ) : (
          <>
            <Avatar
              backgroundColor="#009dff"
              px="20px"
              py="20px"
              borderRadius="100%"
              color="white"
            >
              <Link to="/user" style={{color:"white",textDecoration:"none"}}>
                S
              </Link>
            </Avatar>

            <button className="nav-item nav-link">Log Out</button>
          </>
        )}
      </div>
    </nav>
  );
}

export default NavBar;
