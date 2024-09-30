import React, { useEffect, useState } from "react";
import axios from "axios";
import "./styles.css"; // Import external CSS file

const Question = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        console.log(response);
        setProducts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log("error", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="product-container">
      {products.map((product) => (
        <div className="book" key={product.id}>
          <p>{product.title}</p>
          <div className="cover">
            <p>{product.price}$</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Question;
