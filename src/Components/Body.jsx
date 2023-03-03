import React from "react";
import "./Body.css";
import Cloth from "./Cloth";
import clothData from "../data/clothes";
var Body = (props) => {
  let clothes = [];
  clothData.forEach((e) => {
    clothes.push(<Cloth cart={props.cart} setCart={props.setCart} key={e.id} id={e.id} title={e.title} img={e.img} price={e.price} />);
  });
  return <div className="body">{clothes}</div>;
};
export default Body;
