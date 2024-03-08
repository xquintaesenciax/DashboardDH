import { useState, useEffect } from "react";

function ChartRow(props) {
  const [product, setProduct] = useState({});
  let URL = props.detail;

  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((response) => {
        setProduct(response);
      });
  }, [URL]); //ERROR AL TRATAR DE NO COLOCARLE UN SEGUIMIENTO

  return (
    <tr>
      <td>{product.name}</td>
      <td>{product.color}</td>
      <td>${product.precio}</td>
      <td>{product.cuotas ? product.cuotas : 1}</td>
      <td>{product.descuento ? product.descuento + "%" : "---"}</td>
    </tr>
  );
}

export default ChartRow;
