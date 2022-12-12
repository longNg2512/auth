import * as constants from '../constants'

export function addUserRequest(payload) {
    return {
        type: constants.ADD_USER_REQUEST,
        payload
    }
}

export function addUserSuccess(payload) {
    return {
        type: constants.ADD_USER_SUCCESS,
        payload
    }
}

export function addUserFailure(payload) {
    return {
        type: constants.ADD_USER_FAILURE,
        payload
    }
}
