import React from 'react'
import "./Header.css"
import { Link } from "react-router-dom"
const Header = () => {
    return (
        <div className='nav'>
            <div className="burger">
                <div className="icon">1</div>
                <div className="icon">2</div>
                <div className="icon">3</div>
            </div>
            <div className="logo">ADISHOP</div>
            <div className="menu">
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/product'>Product</Link>
                    </li>
                    <li>
                        <Link to='/contact'>Contact</Link>

                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header
