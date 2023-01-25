import classes from "./CartItem.module.css";
import React from "react";

const CartItems = (props) => {
  const price = `$${props.price}`;

  return (
    <li className={classes["cart-item"]}>
      <div>
        <h2>{props.title}</h2>
        <div>{<img src={props.imageUrl} alt="images" />}</div>
      </div>
      <div className={classes.summary}>
        <span className={classes.amount}>x{props.amount}</span>
      </div>

      <div className={classes.actions}>
        <span className={classes.price}>${price}</span>
        <button onClick={props.onRemove}>-</button>
        <button onClick={props.onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItems;
