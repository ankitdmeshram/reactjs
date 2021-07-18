import React from 'react'

// export default function Props(prop) {
//     return (
//         <div>
//             <h1>Hello {prop.text.name} </h1>
//         </div>
//     )
// }


export default class Student extends React.Component{
    render()
    {
        return (
            <div>Student : { this.props.name}</div>
        )
    }
}