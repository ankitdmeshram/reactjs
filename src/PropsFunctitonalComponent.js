import React from 'react'

function PropsFunctitonalComponent(props) {
    console.warn(props)
    return (
        <div>
            <h1>Hello {props.name} </h1>
            {/* <h2>Email: {props.email}</h2> */}
            {/* <h2>City: {props.other.address}</h2> */}
        </div>
    )
}

export default PropsFunctitonalComponent
