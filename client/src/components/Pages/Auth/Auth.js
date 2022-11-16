import React from "react";
import { useState } from "react";
import icon from "../../../assetes/assets/LogoGlyphMd.svg";
import AboutAuth from "./AboutAuth";
import "./Auth.css";

function Auth() {
  const [signup, setSignup] = useState(false);
  const switchHandle = () => {
    setSignup(!signup);
  };
  return (
    <section className="auth-section">
    {signup && <AboutAuth />}
      <div className="auth-container-2">
        {!signup && (
          <img src={icon} alt="stack overflow" className="login-logo" />
        )}
        <form>
          {signup && (
            <label htmlFor="name">
              <h4>Display Name</h4>
              <input name="name" type="text" id="name" />
            </label>
          )}

          <label htmlFor="email">
            <h4>Email</h4>
            <input name="email" type="email" id="email" />
          </label>
          <label htmlFor="password">

            <div style={{display:'flex',justifyContent:'space-between'}}>
              <h4>Password</h4>
              {!signup && <p style={{ color: "#007ac6",fontSize:"13px" }}>Forgot pasword?</p>}
            </div>
            <input name="password" type="password" id="password" />
            {signup && (
              <p style={{color:"#066767",frontSize:"13px"}}>
                Passwords must contain at least eight <br /> characters,
                including at least 1 <br /> letter and 1 number.
              </p>
            )}
          </label>
          {signup && (
            <label htmlFor="check">
              <input type="checkbox" id="check" />
              <p style={{frontSize:"13px"}}>
                Opt-in to receive occasional product <br /> updates, user
                research invitations, company <br /> announcements, and digests.
              </p>
            </label>
          )}
          <button type="submit" className="auth-btn">
            {signup ? "Sign-Up" : "Log-In"}
          </button>
          {signup && (
            <p style={{color:"#066767",frontSize:"13px"}}>
              By clicking “Sign up”, you agree to our
              <span style={{ color: "#007ac6" }}>
                terms of <br />
                service
              </span>
              ,<span style={{ color: "#007ac6" }}>

                privacy policy
              </span> and
              <span style={{ color: "#007ac6" }}>cookie policy</span>
            </p>
          )}
        </form>
        <p>
          {signup ? "You have already account" : "Don't have a account"}
          <button
            type="button"
            className="switch-handle-btn"
            onClick={switchHandle}
          >
            {signup ? "Log-In" : "Sign-In"}
          </button>
        </p>
      </div>
    </section>
  );
}

export default Auth;
