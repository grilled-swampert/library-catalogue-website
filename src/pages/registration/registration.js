import React from "react";
import Image from "../registration/image.png";
import { Link } from "react-router-dom";

export default function registration() {
  return (
    <div className="rectangle">
      <div id="formContent">
        <h2>
            <Link to="/" className="inactive">SIGN IN</Link>
        </h2>
        <h2 className="active">REGISTER</h2>

        <img src={Image} id="registerIcon" alt="User Icon" />

        <form>
          <input type="text" id="name" name="name" placeholder="FULL NAME" />
          <select id="gender" name="gender">
            <option value="" selected disabled style={{ color: "grey" }}>
              Select Gender
            </option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          <input type="text" id="email" name="email" placeholder="EMAIL" />
          <input type="text" id="phone" name="phone" placeholder="CONTACT NUMBER" />
          <input type="password" id="password" name="password" placeholder="PASSWORD" />
          <input type="password" id="confirm" name="confirm" placeholder="CONFIRM PASSWORD" />
          <Link to="/" className="link-button"> Register </Link>
        </form>

        <div id="formFooter">
          <a className="hover" href="/#">
            Welchum !!!
          </a>
        </div>
      </div>
    </div>
  );
}
