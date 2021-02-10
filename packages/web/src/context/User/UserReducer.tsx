import {USER_LOGGED, USER_LOGIN, USER_REGISTER, USER_LOGOUT} from '../types'

// eslint-disable-next-line import/no-anonymous-default-export
export default (state: any, action: { payload: any; type: any }) => {
    const {payload, type} = action

    switch(type) {
        case USER_LOGGED:
            return {
                ...state,
                token: payload.token,
                user: payload.user
            }
        case USER_LOGIN:
            return {
                ...state,
                token: payload.token,
                user: payload.user
            }
        case USER_REGISTER:
            return {
                ...state,
                token: payload.token,
                user: payload.user
            }
        case USER_LOGOUT:
            return {
                ...state,
                token: payload.token,
                user: payload.user
            }
    }
}