import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Authentication = ({ Registration }) => {
    console.log(Registration)
    const Navigate = useNavigate();
    useEffect(() => {
        const token = localStorage.setItem("token", true);
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
