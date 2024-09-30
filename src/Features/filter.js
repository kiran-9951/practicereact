import React, { useState } from 'react';

const FoodFiltering = () => {
  const [category, setCategory] = useState('All');
  
  const foodItems = [
    { id: 1, name: 'Margherita Pizza', category: 'Pizza' },
    { id: 2, name: 'Veggie Burger', category: 'Burger' },
    { id: 3, name: 'Caesar Salad', category: 'Salad' },
    { id: 4, name: 'Pepperoni Pizza', category: 'Pizza' },
  ];

  const FoodFilter= category === "All" ? foodItems : foodItems.filter((item)=>item.category ===category)

  return(
    <>
    <div>
    <button onClick={(e)=>setCategory("All")}>All</button>
    <button onClick={(e)=>setCategory("Pizza")}>pizza</button>
    <button onClick={(e)=>setCategory("Salad")}>salad</button>
    <button onClick={(e)=>setCategory("Burger")}>burger</button>
    </div>
    {
      FoodFilter.map((item)=>
        <li>{item.name}</li>
      )
    }
    </>
 
  )

};

export default FoodFiltering;
