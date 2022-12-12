import React, { Component } from 'react'

export default class RegisterForm extends Component {
    state = {
        username: '',
        password: '',
        confirmPassword: ''
    }

    onChangeRegisterForm = e =>
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        })

    onClickBtnRegister = () => {
        if (
            this.state.username === '' ||
            this.state.password === '' ||
            this.state.confirmPassword === ''
        ) {
            alert('Please enter in the blank !!!')
            return
        } else if (this.state.password !== this.state.confirmPassword) {
            alert('Passwords do not match !!!')
            return
        } else {
            this.props.addUser({
                username: this.state.username,
                password: this.state.password
            })
        }
    }

    render() {
        return (
            <div>
                <h4>Create your account !</h4>
                <form>
                    <input
                        type={'text'}
                        placeholder={'Username'}
                        name={'username'}
                        required
                        value={this.state.username}
                        onChange={this.onChangeRegisterForm}
                    />
                    <br />
                    <input
                        type={'password'}
                        placeholder={'Password'}
                        name={'password'}
                        required
                        value={this.state.password}
                        onChange={this.onChangeRegisterForm}
                    />
                    <br />
                    <input
                        type={'password'}
                        placeholder={'Confirm Password'}
                        name={'confirmPassword'}
                        required
                        value={this.state.confirmPassword}
                        onChange={this.onChangeRegisterForm}
                    />
                </form>
                <br />
                <button onClick={this.onClickBtnRegister}>Register!</button>
                <p>Already have an account?</p>
                <button>Login</button>
            </div>
        )
    }
}
