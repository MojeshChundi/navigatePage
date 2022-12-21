import React from "react";
import Modal from "../UI/Modal";

import classes from "./Cart.module.css";

const cartItems = (
  <ul className={classes["cart-items"]}>
    {[{ id: "c1", title: "color", amount: 1, price: 3 }].map((item) => (
      <li>{item.title}</li>
    ))}
  </ul>
);

function Cart(props) {
  return (
    <Modal onClose={props.onClose}>
      <div className={classes.space}>
        <span>Item</span>
        <span>Qty</span>
        <span>price</span>
      </div>
      {cartItems}
      <div className={classes.total}>
        <span>TotalAmount</span>
        <span>23.00</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
}

export default Cart;
