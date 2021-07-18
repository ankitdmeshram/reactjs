import React from 'react'

//////////////////////////////
// Class Component Based 
//////////////////////////////

// export default class EventHandling extends React.Component
// {
//     testFun()
//     {
//         alert("test fun")
//     }
//     render()
//     {
//         return(
//             <div>
//                 <h1>Event Handling </h1>
//                 <button onClick={() => this.testFun()}>Click Me</button>
//             </div>
//         )
//     }
// }


export default function EventHandling()
 {

    // function testFun()
    // {
    //     alert("test fun")
    // }

    const testFun = () => {
        alert("Test fun")
    }


     return(
        <div>
            <h1>Profile</h1>
            <button onClick={testFun}>CLick Me</button>
        </div>
    )
 }
