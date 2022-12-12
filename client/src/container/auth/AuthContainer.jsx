import React, { Component } from 'react'
import RegisterForm from '../../components/auth/RegisterForm'
import * as actions from '../../actions/authAction'
import { connect } from 'react-redux'

class AuthContainer extends Component {
    render() {
        return (
            <div>
                <RegisterForm {...this.props} />
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    addUser: data => {
        dispatch(actions.addUserRequest(data))
    }
})

const mapStateToProps = state => ({
    listData: state.authReducer.listData
})

export default connect(mapStateToProps, mapDispatchToProps)(AuthContainer)
