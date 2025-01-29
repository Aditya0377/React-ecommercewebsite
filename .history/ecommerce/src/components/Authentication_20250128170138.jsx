import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Authentication = () => {
    useEffect(() => {
        const token = loacalStorage.getItem("token");
        if (token) {
            Navigate("/product")
        }
    })


    return (
        <div>

        </div>
    )
}

export default Authentication
