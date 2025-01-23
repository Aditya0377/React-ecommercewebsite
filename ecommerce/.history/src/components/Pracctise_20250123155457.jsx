import React, { useContext } from 'react'
import context from 'App.jsx'
const Pracctise = ({ arr }) => {
    const context1 = useContext(arr);
    return (
        <div>
            hello
            {context1}

        </div>
    )
}

export default Pracctise
