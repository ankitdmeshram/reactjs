import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Contructor extends Component {
    constructor()
    {
        super();
        this.state={
            data : "Ankit"
        }
    }

    render() {

        return (
            <div>
                <h1>Constructor</h1>
                <p>{this.state.data}</p>
            </div>
        )
    }
}
