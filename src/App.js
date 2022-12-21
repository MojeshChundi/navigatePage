import React, { useState } from "react";
import Header from "./components/LayOut/Header";
import Cart from "./components/Cart/Cart";

import "./App.css";
import AvailableProducts from "./components/Products/AvailableProducts";

function App() {
  const [showCart, setShowCart] = useState(false);

  const cartShownHandler = () => {
    setShowCart(true);
  };
  const cartHideHandler = () => {
    setShowCart(false);
  };
  return (
    <React.Fragment>
      {showCart && <Cart onClose={cartHideHandler} />}
      <Header onShowCart={cartShownHandler} />
      <main>
        <AvailableProducts />
      </main>
    </React.Fragment>
  );
}

export default App;
