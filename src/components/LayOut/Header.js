import React from "react";
import HeaderCartButton from "./HeaderCartButton";
import classes from "./Header.module.css";

function Header(props) {
  return (
    <div>
      <header className={classes.header}>
        <h1>MUSIC</h1>
        <h1>ABOUT</h1>
        <h1>BRAND</h1>
        <div>
          <HeaderCartButton onClick={props.onShowCart} />
        </div>
      </header>
    </div>
  );
}

export default Header;
