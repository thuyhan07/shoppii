import React, { useEffect, useState } from "react";
import Shop from "./pages/Shop/Shop";
import Cart from "./pages/ShoppingCart/Cart";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { ContextProvider } from "./context/Context";


function App() {
  // const {subtotal, cartCount, cart, getCartCount, subtotalCalc, cartCounter, addToCart, deleteItem} = useShopContext();

  return (
    <div className="App">
      <ContextProvider>
      <BrowserRouter>
        <Navbar
          // cart={cart}
          // cartCount={cartCount}
          // cartCounter={cartCounter}
          // getCartCount={getCartCount}
        />
        <Routes>
          <Route path="/" element={<Shop />}></Route>
          <Route
            path="/cart"
            element={
              <Cart
                // cart={cart}
                // subtotal={subtotal}
                // subtotalCalc={subtotalCalc}
                // deleteItem={deleteItem}
              />
            }
          ></Route>
        </Routes>
      </BrowserRouter>
      </ContextProvider>
      {/* <button onClick={()=>{console.log(cart)}} >CHECK CART</button> */}
    </div>
  );
}

export default App;
