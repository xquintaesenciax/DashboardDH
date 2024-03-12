import React, { useState, useEffect } from "react";
import Product from "./Product";

function Products() {
  const [products, setProducts] = useState([]);
  const URL = "http://localhost:3030/api/products";

  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((response) => {
        setProducts(response.products);
      });
  }, []);
  return (
    <React.Fragment>
      <section className="seccion-articulo">
        <h2 className="section-title">TODOS LOS PRODUCTOS</h2>
        {products.map((product, i) => (
          <Product key={i} {...product} />
        ))}
      </section>
    </React.Fragment>
  );
}

export default Products;
