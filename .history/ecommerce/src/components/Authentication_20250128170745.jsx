import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Authentication = ({ Registration }) => {
    console.log(Registration)
    const Navigate = useNavigate();
    useEffect(() => {
        const token = loacalStorage.setItem("token");
        if (token) {
            Navigate("/product")
        }
        else {
            Navigate("/registration")
        }
    })


    return (
        <div>

        </div>
    )
}

export default Authentication
