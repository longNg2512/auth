import * as constants from '../constants'

const DEFAULT_STATE = {
    isLoading: false,
    dataFetched: false,
    error: false,
    listData: []
}

const authReducer = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case constants.ADD_USER_REQUEST:
            return {
                ...state,
                isLoading: true,
                dataFetched: false,
                error: false
            }
        case constants.ADD_USER_SUCCESS:
            return {
                ...state,
                isLoading: false,
                listData: action.payload.response,
                dataFetched: true,
                error: false
            }
        case constants.ADD_USER_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: true,
                dataFetched: false
            }
        default:
            return state
    }
}

export default authReducer
