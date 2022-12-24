import React, { useContext } from "react";
import CartContext from "../Store/CartContext";
import classes from "./HeaderCartButton.module.css";

function HeaderCartButton(props) {
  const CartCtx = useContext(CartContext);
  const Num = CartCtx.items.reduce((CurNum, item) => {
    return CurNum + item.amount;
  }, 0);
  console.log(CartCtx.items.price, "Hbutton");

  return (
    <button className={classes.button} onClick={props.onClick}>
      <span>Your Cart</span>
      <span className={classes.badge}>{Num}</span>
    </button>
  );
}

export default HeaderCartButton;
