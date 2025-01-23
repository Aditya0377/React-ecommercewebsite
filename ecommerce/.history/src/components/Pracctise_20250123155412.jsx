import React, { useContext } from 'react'

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
