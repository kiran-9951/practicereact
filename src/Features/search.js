import React, { useState } from 'react';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const foodItems = [
    { id: 1, name: 'Margherita Pizza' },
    { id: 2, name: 'Veggie Burger' },
    { id: 3, name: 'Caesar Salad' },
    { id: 4, name: 'Pepperoni Pizza' },
  ];

  const filteredItems = foodItems.filter(item => 
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2>Search Menu</h2>
      <input 
        type="text" 
        placeholder="Search food..." 
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)} 
      />
      <ul>
        {filteredItems.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
    
  );
};

export default SearchBar;
