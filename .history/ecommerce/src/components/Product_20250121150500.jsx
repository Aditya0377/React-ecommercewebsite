import React, { useState } from 'react'
import data from './data.json'
const Product = () => {
    // console.log(data.mydata)
    const products = data.mydata
    return (
        <div>
            {
                products.filter((data) => console.log(data.price === "free"))
            }
        </div>
    )
}

export default Product
