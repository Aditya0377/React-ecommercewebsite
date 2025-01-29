import React from 'react'
import { useNavigate } from 'react-router-dom'

const Authentication = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem("token");

    return (
        <div>

        </div>
    )
}

export default Authentication
