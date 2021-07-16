import React from 'react'

export default function FunctionComponent(p)
{
    const red = () => {
        alert(p.text);
    }

    return <div>
        <h1 onClick={red}>{p.text}</h1>
    </div>
}