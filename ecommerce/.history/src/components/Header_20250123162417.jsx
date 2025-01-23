import React from 'react'
import "./Header.css"
import { Link } from "react-router-dom"
import { useState } from 'react'
import { context } from '../App'
const Header = ({ count }) => {

    const [hide, sethide] = useState(true);
    const unhide = () => {
        sethide(!hide)
        console.log(hide)
    }
    return (
        <><div className='burpar'>
            <div className='burger' onClick={unhide}>
                <div className="icon"></div>
                <div className="icon"></div>
                <div className="icon"></div>
            </div>
            <div className="search"><input type="search" name="" id="" placeholder='Search Here' /></div>

        </div>
            <div className={`nav ${hide ? 'shownav' : 'hidenav'}`}>
                <div className="logo">ADISHOP</div>
                <div className="menu">

                    <ul>

                        <li>
                            <Link to='/cart'>Cart:{count}</Link>
                        </li>
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
        </>
    )
}

export default Header
