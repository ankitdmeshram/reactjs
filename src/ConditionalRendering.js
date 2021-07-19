import React, {useState} from 'react'

function ConditionalRendering() {

    const [loggedIn, setloggedIn] = useState(3)

    // if(loggedIn)
    // {
    //     return (
    //         <div>
    //             <h1>Conditional Rendering</h1>
    //             <h2>Welcome</h2>
    //         </div>
    //     )
    // } else {
    //     return (
    //         <div>
    //             <h1>Conditional Rendering</h1>
    //             <h2>Welcome Guest </h2>
    //         </div>
    //     )
    // }


    return (
        <div>
            {
                loggedIn == 1 ? 
                    <h1>Welcome User 1</h1>
                : loggedIn == 2 ?
                    <h1>Welcome User 2</h1>
                    : 
                        <h1>Welcome User 3</h1>
            }
        </div>
    )



}

export default ConditionalRendering
