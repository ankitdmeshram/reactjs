import React from 'react'

export default class State extends React.Component
{
    constructor()
    {
      super();
      this.state = {    
        name : 'Ankit Meshram'
      }
    }
  


    render()
    {
        return(
            <div>
                <h1>Hello {this.state.name}</h1>
            </div>
        )
    }
}