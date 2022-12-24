import React from "react";
import { useContext } from "react";
import CartContext from "../Store/CartContext";
import ProductItemForm from "./ProductItemForm";
import classes from "./ProductsItems.module.css";

function ProductsItems(props) {
  const CartCtx = useContext(CartContext);

  const AddToCartHandler = (amount) => {
    CartCtx.addItem({
      id: props.id,
      title: props.title,
      amount: amount,
      price: props.price,
    });

    console.log(amount);
  };
  const price = `$${props.price.toFixed(0)}`;
  return (
    <div>
      <h3>Title: {props.title}</h3>
      <div>{props.imageUrl}</div>
      <div className={classes.price}>{price}</div>
      <div className={classes.price}>Qty:{props.quantity}</div>
      <br></br>
      <div>
        <ProductItemForm onAddToCart={AddToCartHandler} />
      </div>
    </div>
  );
}

export default ProductsItems;
