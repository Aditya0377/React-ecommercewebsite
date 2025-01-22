import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="info">
                <div className='connect'>
                    <h5>Connnect with us</h5>
                    <Link to='/linkedin'>Linkedin</Link>
                    <Link to='/linkedin'>Whatsapp</Link>
                    <Link to='/linkedin'>Instagram</Link>

                </div>
                <div className="contact">
                    <h6>Contact us at</h6>
                    <div className="email">Something@gmail.com</div>
                    <div className="phoneNumber">8979675634</div>
                </div>
            </div>
            <div className="copyinfo"></div>
        </div>
    )
}

export default Footer
