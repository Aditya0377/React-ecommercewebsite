import React, { useState } from 'react'
import data from './data.json'
const Product = () => {
    // console.log(data.mydata)
    const products = data.mydata
    return (
        <div>
            {
                products.map((data) => {
                    console.log(data)
                })
            }
        </div>
    )
}

export default Product
