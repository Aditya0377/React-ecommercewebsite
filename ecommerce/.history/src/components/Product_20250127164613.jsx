import React, { useContext, useState, useEffect } from 'react';
// import data from './data.json';
import "./Product.css"
import { context } from "../App"
import Footer from './Footer';
import axios from 'axios';

const Product = () => {
    const context1 = useContext(context);
    // Accessing the product data
    // const products = data.mydata;

    // // Filtering products where the price is "free"
    // const freeProducts = products.filter((product) => product.price === "free");
    const [book, setBookData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get('http://localhost:3000/books');
            setBookData(response.data.mydata[0]);
        }
        fetchData();
    }, [])

    console.log(book);


    return (
        <>
            <div className='pardiv'>
                <h1>Free Products</h1>
                <div className='cards'>

                    {book.map((product, index) => (
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
            <Footer />
        </>
    );
};

export default Product;
