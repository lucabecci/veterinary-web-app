import React, {useReducer} from 'react'
import axios from 'axios'

import UserContext from './UserContext'
import UserReducer from './UserReducer'


import {USER_LOGGED, USER_LOGIN, USER_REGISTER} from '../types'

const UserState = (props: any) => {
    const initialState = {
        token: "",
        user: {}
    }
    const [state, dispatch] = useReducer(UserReducer, initialState)

    const userLogged = async () => {
        let token = localStorage.getItem("auth-token")
        if(token == null){
            localStorage.setItem("auth-token", "")
            token = ""
        }
        try{ 
            const tokenResponse = await axios.post("http://localhost:4000/isLogged", null, {
                    headers: {Authorization: "Bearer " +  token}
            })
            const data = {
                token: token,
                user:  tokenResponse.data.user
            }
            dispatch({type: USER_LOGGED, payload: data})
        }
        catch(e){
            console.log(e.message)
            const data = {
                token: token,
                user:  null
            }
            dispatch({type: USER_LOGGED, payload: data})
        }
    }

    const userLogin = async (email: string, password: string) => {
        dispatch({type: USER_LOGIN, payload: {}})
    }

    const userRegister = async () => {
        dispatch({type: USER_REGISTER, payload: {}})
    }

    const userLogout = () => {
        const data = {
            token: "",
            user: null
        }
        dispatch({type: USER_REGISTER, payload: data})
    }

    return (
        <UserContext.Provider
            value={{
                token: state.token,
                user: state.user,
                userLogged,
                userLogin,
                userRegister,
                userLogout
            }}
        >
            {props.children}
        </UserContext.Provider>
    )
}

export default UserState