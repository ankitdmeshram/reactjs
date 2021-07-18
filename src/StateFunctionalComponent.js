import React, { useState } from 'react'

function StateFunctionalComponent() {

    const [data, setData] = useState(0)

    function updateData()
    {
        setData(data + 1);
    }
    console.warn("-------------")
    return (
        <div>
            <h2>{data}</h2>
            <button onClick={updateData}>Update Data</button>
            
        </div>
    )

}

export default StateFunctionalComponent