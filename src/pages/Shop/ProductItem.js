import React from "react";
import { Link } from "react-router-dom";
import { useShopContext } from "../../context/Context";

function ProductItem({ index }) {

  const {products, addToCart} = useShopContext();  

  return (
    <div className="product-item">
      <div className="product-image">
        <img src={products.at(index).img} alt="" />
        <Link to="" target="" className="product-add" onClick={() => {addToCart(products.at(index))}}>
          ADD TO CART
        </Link>
      </div>
      <div className="product-details">
        <p className="product-category">CATEGORY</p>
        <p className="product-name">{products.at(index).name}</p>
        <span className="product-ratings">★★★★★</span>
        <div className="price-box">
          <h4 className="product-price">{`$${products.at(index).price}.00`}</h4>
          <h3 className="product-discount">{`$${products.at(index).discounted}.00`}</h3>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
