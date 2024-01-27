import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [btn, setBtn] = useState("Login");

  return (
    <div className="header">
      <div className="brand-logo">
        <img src={LOGO_URL} className="logo"></img>
      </div>
      <div className="nav-items">
        <ul>
          <Link to="/" className="nav-items">
            Home
          </Link>
          <Link to="/about" className="nav-items">
            About
          </Link>
          <Link to="/cart" className="nav-items">
            Cart
          </Link>
          <Link to="/contact" className="nav-items">
            Contact us
          </Link>
          <button
            className="loginbtn"
            onClick={() => {
              btn === "Login" ? setBtn("Logout") : setBtn("Login");
            }}
          >
            {btn}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
