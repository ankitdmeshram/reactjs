import React from 'react'

export default class HideAndShow extends React.Component {

    constructor()
    {
        super();
        this.state = {
            show: true
        }
    }

    render() {
        return (
            <div>

                {
                    this.state.show ? 
                    <h1>Hide and Show</h1>
                    : null
                }

                {/* <button onClick={() => {this.setState({show:false})}} >Click Me</button> */}
                <button onClick={() => {this.setState({show: !this.state.show})}} >Toggle Me</button>
            
            </div>
        )
    }
}