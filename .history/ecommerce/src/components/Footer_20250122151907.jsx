import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="info">
                <div className='connect'>
                    <h3>Connnect with us</h3>
                    <Link to='/linkedin'>Linkedin</Link>
                    <Link to='/linkedin'>Whatsapp</Link>
                    <Link to='/linkedin'>Instagram</Link>

                </div>
                <div className="contactus">
                    <h3>Contact us at</h3>
                    <div className="email">Something@gmail.com</div>
                    <div className="phoneNumber">8979675634</div>
                </div>
            </div>
            <div className="copyinfo"></div>
        </div>
    )
}

export default Footer
