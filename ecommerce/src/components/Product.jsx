import React from 'react';
import data from './data.json';
import "./Product.css"
const Product = () => {
    // Accessing the product data
    const products = data.mydata;

    // Filtering products where the price is "free"
    const freeProducts = products.filter((product) => product.price === "free");

    return (
        <div className='pardiv'>
            <h1>Free Products</h1>
            <div className='cards'>

                {freeProducts.map((product, index) => (
                    <div className='card' key={product.id}>
                        <ul>
                            <li key={product.id}>
                                <h2>{product.title}</h2>
                                <p>Price: {product.price}</p>
                                <img src={product.img} alt={product.title} width="200" />
                            </li>
                            <button>Add to Cart</button>

                        </ul>
                    </div>
                ))}

            </div>
        </div>
    );
};

export default Product;
