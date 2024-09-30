import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

const Question2 = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        console.log(response);
        setProducts(response.data);
      })
      .catch((error) => {
        console.log("error while fetching data", error);
      });
  }, []);

  return (
    <>
      <table style={{ border: "1px solid black", width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th style={{ border: "1px solid black", padding: "8px" }}>Price</th>
            <th style={{ border: "1px solid black", padding: "8px" }}>Title</th>
            <th style={{ border: "1px solid black", padding: "8px" }}>Description</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td style={{ border: "1px solid black", padding: "8px" }}>{product.price}</td>
              <td style={{ border: "1px solid black", padding: "8px" }}>{product.title}</td>
              <td style={{ border: "1px solid black", padding: "8px" }}>{product.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Question2;
