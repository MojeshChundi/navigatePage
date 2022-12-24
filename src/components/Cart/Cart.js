import React from "react";
import CartItems from "./CartItems";
import { useContext } from "react";
import Modal from "../UI/Modal";
import CartContext from "../Store/CartContext";
import classes from "./Cart.module.css";

function Cart(props) {
  const CartCtx = useContext(CartContext);

  const total = `$${CartCtx.TotalAmount.toFixed(2)}`;
  const hasItems = CartCtx.items.length > 0;

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {CartCtx.items.map((item) => (
        <CartItems
          key={item.id}
          title={item.title}
          price={item.price}
          amount={item.amount}
          imageUrl={<img src={item.imageUrl} alt="images" />}
        />
      ))}
    </ul>
  );

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
        <span>{total}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
}

export default Cart;
