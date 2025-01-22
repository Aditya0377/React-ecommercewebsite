import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="info">
                <div className='connect'>
                    <h5>Connnect with us</h5>
                    <Link to='/linkedin'>Linkedin</Link>
                    <Link to='/linkedin'>Whatssapp</Link>
                    <Link to='/linkedin'>Instagram</Link>

                </div>
                <div className="contact">
                    <h6>Contact us at</h6>
                </div>
            </div>
            <div className="copyinfo"></div>
        </div>
    )
}

export default Footer
