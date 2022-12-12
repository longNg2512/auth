import { takeEvery, put } from 'redux-saga/effects'
import * as constants from '../constants'
import * as API from '../api/authAPI'
import * as actions from '../actions/authAction'

function* handleAddUser(action) {
    try {
        const response = yield API.addUser(action.payload)
        if (response.success !== true) {
            throw new Error(response.message)
        }
        yield put(actions.addUserSuccess({ response }))
    } catch (error) {
        yield put(actions.addUserFailure(error))
    }
}

const authSaga = [takeEvery(constants.ADD_USER_REQUEST, handleAddUser)]

export default authSaga
