import React from "react";
import ProductItemForm from "./ProductItemForm";
import classes from "./ProductsItems.module.css";

function ProductsItems(props) {
  const price = `$${props.price.toFixed(0)}`;
  return (
    <div>
      <h3>Title: {props.title}</h3>
      <div>{props.imageUrl}</div>
      <div className={classes.price}>{price}</div>
      <div className={classes.price}>Qty:{props.quantity}</div>
      <br></br>
      <div>
        <ProductItemForm />
      </div>
    </div>
  );
}

export default ProductsItems;
