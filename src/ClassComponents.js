import React from 'react'

class ClassComponents extends React.Component{

    constructor()
    {
        super();
    }
    componentDidMount()
    {
        console.warn("Called Life")
    }


    render()
    {
        return (
            <div>
                <h1>Profile Components</h1>
            </div>
        )
    }
}

export default ClassComponents