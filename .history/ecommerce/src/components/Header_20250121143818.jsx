import React from 'react'
import "./Header.css"
import { Link } from "react-router-dom"
const Header = () => {
    return (
        <div className='nav'>
            <div className="logo">ADISHOP</div>
            <div className="menu">
                <ul>
                    <li>Home</li>
                    <li>Product</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
    )
}

export default Header
