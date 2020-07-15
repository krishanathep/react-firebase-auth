import React, { Component } from 'react'

export class NoMatch extends Component {
    render() {
        return (
            <div className='No Match container'>
                <h2 className='text-danger'>Error redirect url missmatch!</h2>
            </div>
        )
    }
}

export default NoMatch
