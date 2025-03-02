import React, { createContext, useContext, useEffect, useState } from "react";

const ShopContext = createContext();

export const ContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [subtotal, setSubtotal] = useState(0);
  const [cartCount, setCartCount] = useState(0);
  const [ogSubtotal, setOgSubtotal] = useState(0)
  const [code, setCode] = useState("");
  const [cart, setCart] = useState([]);
  const [ship, setShip] = useState(5);

  const couponList = [
    {
      code: "",
      value: ogSubtotal,
      condition: 'none',
    },
    {
      code: "SALE10",
      value: 0.9 * ogSubtotal,
      condition: 'none',
    },
    {
      code: "SALEPLUS",
      value: ogSubtotal - 20,
      condition: ogSubtotal >= 100,
    },
    {
      code: "VUITHANG6",
      value: 0.8 * ogSubtotal,
      condition: ogSubtotal >= 200,
    },
    {
      code: "GLASSTODAY",
      value: cart.find((item) => item.name == "Glasses") ? ogSubtotal - cart.find((item) => item.name == "Glasses").discounted * cart.find((item) => item.name == "Glasses").count * 0.5 : ogSubtotal,
      condition: cart.find((item) => item.name == "Glasses") ? true : false,
    },
    {
      code: "FREESHIP",
      value: () => {
        setShip(0);
        return ogSubtotal;
      },
      condition: 'none',
    }
  ];

  const initProducts = (productsData) => {
    setProducts(productsData);
  };

  const getCartCount = cart.map((item) => item.count);

  const subtotalCalc = () => {
    let total = 0;
    cart.map((cartItem) => {
      total += cartItem.count * cartItem.discounted;
    });
    setSubtotal(total);
    setOgSubtotal(total);
  };

  const cartCounter = () => {
    let count = 0;
    cart.map((cartItem) => {
      count += cartItem.count;
    });
    setCartCount(count);
  };

  const addToCart = (item) => {
    let inCart = false;
    cart.forEach((product) => {
      if (product.id === item.id) {
        inCart = true;
      }
    });
    if (inCart === true) {
      item.count = item.count + 1;
      setCart([...cart]);
    } else {
      setCart([...cart, item]);
      item.count = item.count + 1;
    }
  };

  const deleteItem = (item) => {
    let newCart = cart.filter((cartItem) => cartItem.id !== item.id);
    item.count = 0;
    setCart(newCart);
    setCode("");
  };

  const handleSearch = (e) => {
    const _productList = products.filter((item) =>
      item.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    initProducts(_productList);
  };

  const applyCoupon = (e) => {
    e.preventDefault();
    console.log(code);
    let i;
    let validCode = couponList.find(coupon => coupon.code == code);
    
      if (validCode) {
        console.log(validCode);

        if (!validCode.condition) {
          alert("You do not meet the conditions for this coupon");
          console.log(cart)
        }

        else if (validCode.condition || validCode.condition == "none") {
          setSubtotal(validCode.value);
        }
        
      }
      else {
        console.log("The coupon you entered does not exist")
      }
  };

  const renderSubtotal = () => {
    if (subtotal >= 250) {
      setSubtotal(0.9*subtotal)
      return subtotal;
    }
    return subtotal;
  }
  

  return (
    <ShopContext.Provider
      value={{
        products,
        subtotal,
        cartCount,
        cart,
        getCartCount,
        code,
        setCode,
        initProducts,
        subtotalCalc,
        cartCounter,
        addToCart,
        deleteItem,
        handleSearch,
        applyCoupon,
        ship,
        setShip,
        renderSubtotal
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export const useShopContext = () => {
  return useContext(ShopContext);
};
