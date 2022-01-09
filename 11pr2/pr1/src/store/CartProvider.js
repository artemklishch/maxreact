import React, { useReducer } from "react";
import CartContext from "./cart-context";

const defaulctCartState = {
  items: [],
  totalAmount: 0,
};
const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedTotalAmount =
      state.totalAmount + action.payload.amount * action.payload.price;
    const existingItemIndex = state.items.findIndex(
      (i) => i.id === action.payload.id
    );
    const existingItem = state.items[existingItemIndex];
    let updatedItems;
    if (existingItem) {
      const updatedItem = {
        ...existingItem,
        amount: existingItem.amount + action.payload.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat({ ...action.payload });
    }

    return { items: updatedItems, totalAmount: updatedTotalAmount };
  } else if (action.type === "REMOVE") {
    const updatedItems = [...state.items];
    const existingItemIndex = state.items.findIndex(
      (i) => i.id === action.payload
    );
    const updatedAmount = updatedItems[existingItemIndex].amount;
    const updatedTotalAmount =
      state.totalAmount - updatedItems[existingItemIndex].price;
    if (updatedAmount > 1) {
      updatedItems[existingItemIndex].amount--;
    } else {
      updatedItems.splice(existingItemIndex, 1);
    }
    return { items: updatedItems, totalAmount: updatedTotalAmount };
  }
  return defaulctCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaulctCartState
  );
  const addItemToCart = (item) => {
    dispatchCartAction({ type: "ADD", payload: item });
  };
  const removeItemFromCart = (id) => {
    dispatchCartAction({ type: "REMOVE", payload: id });
  };
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCart,
    removeItem: removeItemFromCart,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
