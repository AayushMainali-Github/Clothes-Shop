import React from "react";
import "./Cloth.css";

var Cloth = (props) => {
  let addToCart = () => {
    props.setCart((prev) => {
      return [...prev, props.id];
    });
  };
  return (
    <div className="cloth">
      <img className="clothImg" alt="Cloth" src={props.img} />
      <div className="tpRow">
        <span>{props.title}</span>
        <span>{props.price}$</span>
      </div>
      <button onClick={addToCart} className="addToCart">
        Add To Cart
      </button>
    </div>
  );
};
export default Cloth;
