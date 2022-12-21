import React from "react";
import Card from "../UI/Card";
import ProductsItems from "./ProductsItems";
//import classes from "./AvailableProducts.module.css";
const cartElements = [
  {
    title: "Colors",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",

    quantity: 2,
  },

  {
    title: "Black and white Colors",

    price: 50,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",

    quantity: 3,
  },

  {
    title: "Yellow and Black Colors",

    price: 70,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",

    quantity: 1,
  },
];

function AvailableProducts(props) {
  const myList = cartElements.map((item) => (
    <ProductsItems
      key={item.id}
      id={item.id}
      title={item.title}
      imageUrl={<img src={item.imageUrl} alt="images" />}
      price={item.price}
      quantity={item.quantity}
    />
  ));
  return (
    <section>
      <Card>
        <ul>{myList}</ul>
      </Card>
    </section>
  );
}

export default AvailableProducts;
