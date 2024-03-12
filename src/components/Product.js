import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Product(props) {
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
    <article className="item-articulo">
      <div className="item-img">
        <img src={product.imagesURL} alt="imagen-producto" />
      </div>

      <div className="item-descripcion">
        <Link>
          <p className="nombre-articulo">{product.name}</p>
        </Link>

        <p className="descripcion-articulo">{product.color}</p>

        <p className="cuotas-articulo">{product.cuotas} cuotas sin interes</p>

        <div className="precio-descuento-articulo">
          {product.descuento === null ? (
            <p className="precio-articulo">${product.precio}</p>
          ) : (
            <>
              <p className="precio-sin-descuento">${product.precio}</p>
              <p className="precio-articulo">${product.precioConDescuento}</p>
              <p className="descuento-articulo">{product.descuento}% off</p>
            </>
          )}
        </div>
        <div className="div-button-descripcion">
          <button>Ver detalles</button>
        </div>
      </div>
    </article>
  );
}

export default Product;
