import React, {useState} from 'react'

function GetInputBoxValue() {

    const [data, setData] = useState("")
    const [print, setPrint] = useState(false)
    function getData(val)
    {
        console.warn(val.target.value);
        setData(val.target.value)
        setPrint(false)
    }
    return (
        <div>
            <h1>Get Input Box Value!</h1>
            <input type="text" onChange={getData} />
            <button onClick={() => setPrint(true)}>Print Data</button>
            {
                print ? 
                <h1> {data} </h1> :
                null
            }
            <br />
        </div>
    )
}

export default GetInputBoxValue
