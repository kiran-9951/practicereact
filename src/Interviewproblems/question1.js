// React Component to Fetch Data from an API

import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";

const Question1 = () => {
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
        console.log("error while fetching data", error);
        setLoading(false);
      });
  }, []);
  return (
    <>
      {loading ? (
        <p>loading.....</p>
      ) : (
        products.map((product) => (
          <div key={product.id}>
            <li>{product.title}</li>
            <li>{product.description}</li>
          </div>
        ))
      )}
    </>
  );
};
export default Question1;
