import React from 'react'

function PassFunctionAsProps(props) {

    return (
        <div>
            <h1>Pass Function As Props</h1>
            <button onClick={() => props.data()}>Call Data Function</button>
        </div>
    )
}

export default PassFunctionAsProps
