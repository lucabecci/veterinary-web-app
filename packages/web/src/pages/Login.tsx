import React, { Fragment, useContext, useEffect } from 'react'
import MainSection from '../components/Login/MainSection'
import UserContext from '../context/User/UserContext';

function Login() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const userContext = useContext(UserContext);

    useEffect(() => {
        userContext.userLogin('hello')
    }, [])
    return (
        <Fragment>
            <MainSection/>
        </Fragment>
    )
}

export default Login
