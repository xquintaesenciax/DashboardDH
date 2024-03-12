import ChartRow from "./ChartRow";
import { useState, useEffect } from "react";

function Chart() {
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
    /* <!-- DataTales Example --> */
    <div className="card shadow mb-4">
      <div className="card-body">
        <div className="table-responsive">
          <table
            className="table table-bordered"
            id="dataTable"
            width="100%"
            cellSpacing="0"
          >
            <thead>
              <tr>
                <th>Nombre del producto</th>
                <th>Color</th>
                <th>Precio</th>
                <th>Cuotas</th>
                <th>Descuento</th>
              </tr>
            </thead>
            <tfoot>
              <tr>
                <th>Nombre del producto</th>
                <th>Color</th>
                <th>Precio</th>
                <th>Cuotas</th>
                <th>Descuento</th>
              </tr>
            </tfoot>
            <tbody>
              {products.map((row, i) => {
                return <ChartRow {...row} key={i} />;
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Chart;
