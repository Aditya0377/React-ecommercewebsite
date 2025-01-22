import React from 'react';
import data from './data.json';

const Product = () => {
    // Accessing the product data
    const products = data.mydata;

    // Filtering products where the price is "free"
    const freeProducts = products.filter((product) => product.price === "free");

    return (
        <div>
            <h1>Free Products</h1>
            <ul>
                {freeProducts.map((product, index) => (
                    <li key={index}>
                        <h2>{product.title}</h2>
                        <p>Price: {product.price}</p>
                        <img src={product.img} alt={product.title} width="200" />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Product;
