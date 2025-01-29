import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Authentication = () => {
    const Navigate = useNavigate();
    useEffect(() => {
        const token = loacalStorage.getItem("token");
        if (token) {
            Navigate("/product")
        }
        else {
            Navigate("/login")
        }
    })


    return (
        <div>

        </div>
    )
}

export default Authentication
