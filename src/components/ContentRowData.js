import React, { useState, useEffect } from 'react';
import SmallCard from './SmallCard';

function ContentRowData() {
    const [userData, setUserData] = useState(null);
    const [productData, setProductData] = useState(null);

    useEffect(() => {
        // Fetch user data
        fetch("http://localhost:3030/api/users")
            .then(response => response.json())
            .then(data => setUserData(data));

        // Fetch product data
        fetch("http://localhost:3030/api/products")
            .then(response => response.json())
            .then(data => setProductData(data));
    }, []);

    // Render loading state while fetching data
    if (!userData || !productData) {
        return <div>Loading...</div>;
    }

    // Define colors using CSS object format
    const userColor = { backgroundColor: '#4021da' };
    const productColor = { backgroundColor: '#653fe4' };
    const categoryColor = { backgroundColor: '#895ced' };

    // Render the component with fetched data
    return (
        <div className="row">
            <SmallCard title="Total Usuarios" color={userColor} cuantity={userData.count} icon="fa-user-check" />
            <SmallCard title="Total Productos" color={productColor} cuantity={productData.count} icon="fa-clipboard-list" />
            <SmallCard title="Total Categorías" color={categoryColor} cuantity={productData.countByCategory.length} icon="fa-award" />
        </div>
    );
}

export default ContentRowData;


