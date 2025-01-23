import React, { useContext } from 'react'
import context from '../App'
const Pracctise = () => {
    const context1 = useContext(context);
    return (
        <div>
            hello
            {context1}

        </div>
    )
}

export default Pracctise
