import React, { useContext } from 'react';
import data from './data.json';
import "./Product.css"
import { context } from "../App"

const Product = () => {
    const context1 = useContext(context);
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
                            <button onClick={context1.addtoCart}>Add to Cart</button>

                        </ul>
                    </div>
                ))}

            </div>


        </div>
    );
};

export default Product;
