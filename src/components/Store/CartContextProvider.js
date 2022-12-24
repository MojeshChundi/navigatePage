import React, { useReducer } from "react";
import CartContext from "./CartContext";

const defaultCartState = {
  items: [],
  TotalAmount: 0,
};
const CartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedTotalAmount =
      state.TotalAmount + action.item.price * action.item.amount;
    const CartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const CartItem = state.items[CartItemIndex];
    let updatedItems;
    if (CartItem) {
      const updatedItem = {
        ...CartItem,
        amount: CartItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[CartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    return {
      items: updatedItems,
      TotalAmount: updatedTotalAmount,
    };
  }

  return defaultCartState;
};

function CartContextProvider(props) {
  const [CartState, dispatchCartState] = useReducer(
    CartReducer,
    defaultCartState
  );
  const ItemAddToCartHandler = (item) => {
    dispatchCartState({ type: "ADD", item: item });
  };
  const ItemRemoveToCartHandler = (id) => {
    dispatchCartState({ type: "REMOVE", id: id });
  };
  const cartContext = {
    items: CartState.items,
    TotalAmount: CartState.TotalAmount,
    addItem: ItemAddToCartHandler,
    removeItem: ItemRemoveToCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
}

export default CartContextProvider;
