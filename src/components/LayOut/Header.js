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
              <Link to="/home">Music</Link>
            </li>
            <li>
              <Link to="/brand">brand</Link>
            </li>
            <li>
              <Link to="/About">About</Link>
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
