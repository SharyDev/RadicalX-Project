import React from "react";
import Logo from "../Assets/Radical-Logo.png";
function Login () {
  return(
    <>
        <div className="LoginMain">
          <div className="LeftContainer">
          </div>
          <div className="RightContainer">
            <img src={Logo} className="R-Logo"></img>
            <form className="Form">
            <h1 className="LogText">Login</h1>
            <input type="email" className="L-email"></input>
            <input type="password" className="L-password"></input>
            <div className="checkbox-container">
            <input type="checkbox" className="check-box"></input><span className="c-text">Remember Me</span>
            </div>
            <input type="submit" className="L-Sub" value="Login" ></input>
            </form>
          </div>
        </div>
    </>
  );
}

export default Login;