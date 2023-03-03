import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import cart from "../assets/cart.png";
var Nav = (props) => {
  return (
    <div className="navBar">
      <Link to="/" className="storeTitle">
        <span className="title1">Aayush Sells </span>
        <span className="title2">CLOTHES</span>
      </Link>
      <Link to="/cart">
        <img className="cartImg" alt="cart" src={cart} />
        <span className="itemCount">{props.cart.length}</span>
      </Link>
    </div>
  );
};

export default Nav;
