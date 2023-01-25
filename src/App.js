import React, { useState } from "react";
import CartContextProvider from "./components/Store/CartContextProvider";
import Header from "./components/LayOut/Header";
import Cart from "./components/Cart/Cart";
import Home from "./components/pages/Home";
import "./App.css";
import AvailableProducts from "./components/Products/AvailableProducts";
import About from "./components/pages/About";
import { Route } from "react-router-dom";
import ContactUs from "./components/pages/ContactUs";
import Colors from "./components/pages/Colors";

function App() {
  const [showCart, setShowCart] = useState(false);

  const cartShownHandler = () => {
    setShowCart(true);
  };
  const cartHideHandler = () => {
    setShowCart(false);
  };
  return (
    <CartContextProvider>
      {showCart && <Cart onClose={cartHideHandler} />}
      <Header onShowCart={cartShownHandler} />
      <main>
        <Route path="/home">
          <AvailableProducts />
        </Route>
        <Route path="/brand">
          <Home />
        </Route>
        <Route path="/About">
          <About />
        </Route>
        <Route path="/ContactUs">
          <ContactUs />
        </Route>
        <Route path="/homie">
          <Colors />
        </Route>
      </main>
    </CartContextProvider>
  );
}

export default App;
