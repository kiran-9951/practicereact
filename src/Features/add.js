import React, { useState } from "react";

const AddToCart = () => {
  const [cart, setCart] = useState([]);

  const foodItems = [
    { id: 1, name: "Margherita Pizza" },
    { id: 2, name: "Veggie Burger" },
    { id: 3, name: "Caesar Salad" },
  ];

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  return (
    <div>
      <h2>Food Menu</h2>
      <ul>
        {foodItems.map((item) => (
          <li key={item.id}>
            {item.name}
            <button onClick={() => addToCart(item)}>Add to Cart</button>
          </li>
        ))}
      </ul>
      <h2>Cart</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default AddToCart;
