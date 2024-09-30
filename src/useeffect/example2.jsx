import axios from "axios";
import { useEffect, useState } from "react";

const Example2 = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const source = axios.CancelToken.source();

    axios
      .get("https://dummyjson.com/products", { cancelToken: source.token })
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          setProducts(response.data.products);
          setLoading(false);
        } else {
          alert("Something went wrong");
        }
      })
      .catch((error) => {
        if (axios.isCancel(error)) {
          console.log("Request canceled", error.message);
        } else {
          console.log("Something went wrong", error);
        }
        setLoading(false);
      });

    return () => {
      source.cancel("Component unmounted, request canceled");
    };
  }, []);

  return (
    <div>
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        products.map((product) => (
          <div key={product.id}>
            <h2>{product.id}</h2>
            <h2>{product.price}</h2>
            <h2>{product.title}</h2>
            <h2>{product.rating}</h2>
            <img src={product.thumbnail} alt={product.title} />
          </div>
        ))
      )}
    </div>
  );
};

export default Example2;
