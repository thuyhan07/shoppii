import React, { useEffect, useState } from "react";
import CartItem from "./CartItem";
import { useShopContext } from "../../context/Context";


function Cart() {
  const {cart, subtotal, subtotalCalc, deleteItem, code, applyCoupon, setCode, ship, setShip, renderSubtotal} = useShopContext();

  useEffect(() => subtotalCalc(), [cart])
  return (
    <div className="cart-page">
      <table className="cart-table">
        <tr>
          <th className="img-col"></th>
          <th className="name-col">PRODUCT</th>
          <th className="price-col">PRICE</th>
          <th className="count-col">QUANTITY</th>
          <th className="total-col">SUBTOTAL</th>
        </tr>
        {cart.map((cartItem, index) => (
          <CartItem cart={cart} deleteItem={deleteItem} index={index} key={cart.at(index).id} />
        ))}
      </table>
      <form className="coupon-container" onSubmit={applyCoupon}>
        <input type="text" placeholder="Coupon Code" value={code} onChange={(e)=>{setCode(e.target.value);setShip(5);}}/>
        <button type="submit">APPLY COUPON</button>
      </form>
      <h1>{`SHIPPING FEE: $${ship}`}</h1>
      <h1 className="subtotal">{`CART TOTALS: $${renderSubtotal()}`}</h1>
      <h1>{`TOTAL: $${subtotal + ship}`}</h1>
    </div>
  );
}

export default Cart;
