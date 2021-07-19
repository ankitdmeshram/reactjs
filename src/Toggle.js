import React, {useState} from 'react'

function Toggle() {

    const [status, setStatus] = useState(true)

    return (
        <div>


            <button onClick={() => setStatus(false)} >Hide</button>
            <button  onClick={() => setStatus(true)} >Show</button>
            <br />
            {/* <button onClick={() => {status ? setStatus(false) : setStatus(true)}} >Toggle</button> */}
            <button onClick={() =>setStatus(!status) } >Toggle</button>


            {
                status ?
                    <h1>Hello World!</h1> : 
                null
            }

        </div>
    )
}

export default Toggle
