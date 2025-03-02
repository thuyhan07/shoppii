import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductItem from "./ProductItem";
import {productsList} from "./ProductsListing"
import { useShopContext } from "../../context/Context";



function ProductListing() {
  const { initProducts, products, handleSearch} = useShopContext();
  const getProductsList = () => {
    initProducts(productsList);
  }

  useEffect(() => getProductsList(), [])

  return (
    <div className="product-page">
      <h3 className="title">POPULAR PRODUCTS</h3>
      <div className="search-container">
        <input
          type="text"
          placeholder="What are you looking for?"
          className="item-search"
          onChange={(e) => {
            e.preventDefault();
            handleSearch(e);
          }}
        />
      </div>

      <div className="product-container">
        {products.map((item, index) => (
          <ProductItem
            index={index}
            // addToCart={addToCart}
            key={products.at(index).id}
          />
        ))}
        
      </div>
    </div>
  );
}

export default ProductListing;
