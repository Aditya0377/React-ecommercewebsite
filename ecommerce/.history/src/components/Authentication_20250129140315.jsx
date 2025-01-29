import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Authentication = (props) => {
    console.log(props)
    const { Components } = props;
    const Navigate = useNavigate();
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            Navigate("/login")
        }
        // else {
        //     Navigate("/components")
        // }
    }, [Navigate])


    return (
        <div>
            <Components />
        </div>
    )
}

export default Authentication
