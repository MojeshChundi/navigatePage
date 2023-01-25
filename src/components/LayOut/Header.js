import React from "react";
import HeaderCartButton from "./HeaderCartButton";
import classes from "./Header.module.css";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <div>
      <header className={classes.header}>
        <nav>
          <ul>
            <li>
              <Link to="/home">MUSIC</Link>
            </li>
            <li>
              <Link to="/brand">BRAND</Link>
            </li>
            <li>
              <Link to="/About">ABOUT</Link>
            </li>
            <li>
              <Link to="/ContactUs">REPORT</Link>
            </li>
          </ul>
        </nav>
        <div>
          <HeaderCartButton onClick={props.onShowCart} />
        </div>
      </header>
    </div>
  );
}

export default Header;
