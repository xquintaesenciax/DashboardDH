import React, { useState, useEffect } from 'react';

function LastProductInDb() {
    const [lastProduct, setLastProduct] = useState(null);

    useEffect(() => {
        fetch('http://localhost:3030/api/products')
            .then(response => response.json())
            .then(data => {
                // Obtener el último producto del array de productos
                const latestProduct = data.products[data.products.length - 1];
                setLastProduct(latestProduct);
            });
    }, []);

    // Render loading state while fetching data
    if (!lastProduct) {
        return <div>Loading...</div>;
    }

    // Render the component with fetched data
    return (
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Último producto añadido</h5>
                </div>
                <div className="card-body">
                    <div className="text-center">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{ width: '20rem' }} src={lastProduct.img} alt={lastProduct.name} />
                    </div>
                    <p className="nombre-articulo">{lastProduct.name}</p>
                    <p className="descripcion-articulo" style={{ fontSize: '0.8rem' }}>{lastProduct.description}</p>
                    <div className="div-button-descripcion">
                        <button>Ver detalles</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LastProductInDb;


