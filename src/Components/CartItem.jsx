import React from "react";
import "./CartItem.css";

var CartItem = (props) => {
  return (
    <div className="cartItem">
      <span>
        <img className="cartItemImg" alt={props.data.title} src={props.data.img} />
        <span className="quantity">{props.quantity}</span>
        <span>{props.data.title}</span>
      </span>
      <span>{props.data.price}$</span>
    </div>
  );
};
export default CartItem;
