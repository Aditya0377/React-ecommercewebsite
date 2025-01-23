import React, { useContext } from 'react'

const Pracctise = ({ count }) => {
    const context1 = useContext(context);
    return (
        <div>
            hello
            {context1}

        </div>
    )
}

export default Pracctise
