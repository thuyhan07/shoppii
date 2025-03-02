import React from "react";
import { TiDelete } from "react-icons/ti";
import { useShopContext } from "../../context/Context";

function CartItem({index}) {
  const {cart, deleteItem} = useShopContext();
  

  return (
    <tr className="cart-item">
      <td className="img-col">
        <div className="cart-item-img">
          <img src={cart.at(index).img} />
          <div className="item-remover" 
          onClick={()=>deleteItem(cart.at(index))}
          >
            <TiDelete className="delete-icon" />
          </div>
        </div>
      </td>
      <td className="name-col">{cart.at(index).name}</td>
      <td className="price-col">{`$${cart.at(index).discounted}.00`}</td>
      <td className="count-col">
        <div className="count-container">
          {/* <button>-</button> */}
          {cart.at(index).count}
          {/* <button>+</button> */}
        </div>
      </td>
      <td className="total-col">{`$${
        cart.at(index).discounted * cart.at(index).count
      }.00`}</td>
    </tr>
  );
}

export default CartItem;
