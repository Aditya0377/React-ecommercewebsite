import React from 'react'
import { useNavigate } from 'react-router-dom'

const Authentication = (prop) => {
    const navigate = useNavigate();
    const { Component } = prop;

    return (
        <div>
            <Component />
        </div>
    )
}

export default Authentication
