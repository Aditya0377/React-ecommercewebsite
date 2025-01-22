import React, { useState } from 'react'
import data from './data.json'
const Product = () => {
    // console.log(data.mydata)
    const products = data.mydata
    return (
        <div>
            {
                let freeprod =     products.filter((data) => { return (data.price === "free") })
            }
        </div>
    )
}

export default Product
