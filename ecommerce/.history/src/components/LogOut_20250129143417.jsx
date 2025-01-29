import React from 'react'
import { useNavigate } from 'react-router-dom';

const LogOut = () => {

    const navigate = useNavigate();
    const logOut = () => {
        localStorage.removeItem("token");

    }
    return (
        <div>
            <button onClick={logOut}>Logout</button>
        </div>
    )
}

export default LogOut
