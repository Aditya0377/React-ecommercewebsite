import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Authentication = (props) => {
    console.log(props)
    const { components } = props;
    const Navigate = useNavigate();
    useEffect(() => {
        const token = localStorage.setItem("token", true);
        if (!token) {
            Navigate("/login")
        }
        // else {
        //     Navigate("/components")
        // }
    })


    return (
        <div>
            hello
        </div>
    )
}

export default Authentication
