import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Authentication = (prop) => {
    const navigate = useNavigate();
    const { Component } = prop;
    console.log(Component);
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            navigate("/login")
        }
    })
    return (
        <div>
            <Component />
        </div>
    )
}

export default Authentication
