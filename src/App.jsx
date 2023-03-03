import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Nav from "./Components/Nav";
import Body from "./Components/Body";
import Cart from "./Components/Cart";
function App() {
  //cart
  var [cart, setCart] = useState([]);
  return (
    <>
      <Router>
        <Nav cart={cart} />
        <Routes>
          <Route exact path="/" element={<Body cart={cart} setCart={setCart} />} />
          <Route exact path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
        </Routes>
      </Router>
      {/* {screen ? <Body cart={cart} setCart={setCart} /> : <Cart cart={cart} setCart={setCart} />} */}
    </>
  );
}

export default App;
