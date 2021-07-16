import React from 'react'

export default class State extends React.Component
{
    constructor()
    {
      super();
      this.state = {    
        name : 'Ankit Meshram',
        email: 'ankitdm69@gmail.com',
        count: 0
      }
    }

    updateState()
    {
      this.setState({
        name: 'Karan Meshram',
        count: this.state.count+1
      })
    }

    render()
    {
      console.warn("render")
        return(
            <div>
                <h1>Hello {this.state.name}</h1>
                <h1>Email: {this.state.email}</h1>
                <h3>Count: {this.state.count}</h3>
                <button onClick={() => {this.updateState()}}>Update Name</button>
            </div>
        )
    }
}