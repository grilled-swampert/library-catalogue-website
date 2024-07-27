import React from "react";
import "../login/log_style.css";
import Logo from '../login/logo.jpg';
import { Link } from "react-router-dom";


export default function Login() {
  return (
    <div className="rectangle">
      <div id="formContent">
        <h2 className="active"> SIGN IN </h2>
        <h2>
          <Link to="/registration" className="inactive">REGISTER</Link>
        </h2>
        
        <img src={Logo} id="icon" alt="User Icon" />
      
        <form>
          <input type="text" id="login" name="login" placeholder="LOGIN" />
          <input type="password" id="password" name="password" placeholder="PASSWORD" />
          <Link to="/home" className="submit">Log In</Link>
        </form>
      
        <div id="formFooter">
          <Link to="/forgot-password">Forgot Password?</Link>
        </div>
      </div>        
    </div>
  );
}
