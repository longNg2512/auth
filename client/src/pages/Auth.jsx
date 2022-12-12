import React, { Component } from 'react'
import AuthContainer from '../container/auth/AuthContainer'

export default class Auth extends Component {
    render() {
        return (
            <div style={{textAlign: 'center', marginTop: '150px'}}>
                <h2>LearnIT Now!</h2>
                <AuthContainer />
            </div>
        )
    }
}
