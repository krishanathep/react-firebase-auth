import React, { Component } from 'react'

export class NoMatch extends Component {
    render() {
        return (
            <div className='No Match container' align='center'>
                <h1 className='text-danger'>400 - BAD REQUEST</h1>
                <p>Your browser sent an invalid request.</p>
                <hr></hr>
                <p>nginx</p>
            </div>
        )
    }
}

export default NoMatch
