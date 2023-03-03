import React from "react";
import "./Cart.css";
import clothes from "../data/clothes";
import CartItem from "./CartItem";

var Cart = (props) => {
  let count = {};
  let totalPrice = 0;
  props.cart.forEach((e) => {
    count[e] = (count[e] || 0) + 1;
  });
  let cart = [];
  let cartData = new Set(props.cart);
  cartData.forEach((e) => {
    let itemData = clothes[Number(e)];
    totalPrice += itemData.price * count[e];
    cart.push(<CartItem key={itemData.id} data={itemData} quantity={count[e]} />);
  });
  return (
    <div className="cart">
      {cart}
      <div className="sub">
        <div className="subTotal">
          <span>Subtotal</span>
          <span>{totalPrice}$</span>
        </div>
        <div className="subTotal">
          <span>Discount</span>
          <span>{totalPrice * 0.05}$</span>
        </div>
      </div>
      <div className="sub">
        <div className="totalPrice">
          <span>Total</span>
          <span>{totalPrice - totalPrice * 0.05}$</span>
        </div>
      </div>
      <button>Place Order</button>
    </div>
  );
};
export default Cart;
