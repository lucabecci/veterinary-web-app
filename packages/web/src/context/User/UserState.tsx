import React, {useReducer} from 'react'
import axios from 'axios'

import UserContext from './UserContext'
import UserReducer from './UserReducer'


import {USER_LOGGED, USER_LOGIN, USER_REGISTER, USER_LOGOUT} from '../types'

const UserState = (props: any) => {
    const proxy = 'http://localhost:4000/'
    const initialState = {
        token: "",
        user: {}
    }
    const [state, dispatch] = useReducer(UserReducer, initialState)

    const userLogged = async () => {
        let token = localStorage.getItem("auth-token")
        let data = {
            token: token,
            user:  null
        }
        if(token == null){
            localStorage.setItem("auth-token", "")
            token = ""
        }
        try{ 
            const tokenResponse = await axios.post(`${proxy}isLogged`, null, {
                    headers: {Authorization: "Bearer " +  token}
            })
            data = {
                token: token,
                user:  tokenResponse.data.user
            }
            dispatch({type: USER_LOGGED, payload: data})
        }
        catch(e){
            console.log(e.message)
            dispatch({type: USER_LOGGED, payload: data})
        }
    }

    const userLogin = async (email: string, password: string) => {
        let data = {
            token: "",
            user: null
        }
        try{
            const userToLogin = {
                email, 
                password
            }
            const userLogged = await axios.post(`${proxy}login`,userToLogin)
            const token  = userLogged.data.token
            const resp = await axios.post(`${proxy}isLogged`, null ,{
                headers: {Authorization: "Bearer " +  token}
            })
            data = {
                token,
                user: resp.data.user

            }
            localStorage.setItem("auth-token",  token)
            dispatch({type: USER_LOGIN, payload: data})
            return true
        }
        catch(e){
            dispatch({type: USER_LOGIN, payload: data})
            return false
        }
        
    }

    const userRegister = async () => {
        dispatch({type: USER_REGISTER, payload: {}})
    }

    const userLogout = () => {
        const data = {
            token: "",
            user: null
        }
        dispatch({type: USER_LOGOUT, payload: data})
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