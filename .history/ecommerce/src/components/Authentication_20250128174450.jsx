import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Authentication = (props) => {

    const Navigate = useNavigate();
    useEffect(() => {
        const token = localStorage.setItem("token", true);
        if (!token) {
            Navigate("/login")
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
