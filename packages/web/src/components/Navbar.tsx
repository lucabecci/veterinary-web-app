import React, { Fragment, useContext, useState } from 'react'
import {useHistory} from 'react-router-dom'
import UserContext from '../context/User/UserContext'
const Navbar:React.FC = () => {
    const [toggle, setToggle] = useState('hidden')
    const userContext = useContext(UserContext)
    const history = useHistory()
    const changeToggle = (e: any) => {
        e.preventDefault()
        if(toggle === ''){
            setToggle('hidden')
            return
        }
        setToggle('')
    }
    const logout = (e: any) => {
        e.preventDefault()
        localStorage.setItem("auth-token", "")
        userContext.userLogout()
        history.push('/')
    }
    return (
        <Fragment>
            <nav className='relative select-none bg-white lg:flex lg:items-stretch w-full'>
                <div className='flex flex-no-shrink items-stretch h-12'>
                    <h2 
                        className='text-gray-900 font-semibold flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center hover:font-bold transition duration-300 hover:text-blue-600'
                        onClick={() => history.push('/')}
                    >MORO VETERINARY</h2>
                    <button 
                        onClick={(e) => changeToggle(e)}
                        className="block lg:hidden cursor-pointer ml-auto relative w-12 h-12 p-4">
                        {toggle === 'hidden' ?
                            (
                                <svg className="fill-current text-gray-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                            ):
                            (
                                <svg className="fill-current text-gray-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"/></svg>
                            )
                        }
                        
                    </button>
                </div>
                <div className={`lg:flex lg:items-stretch lg:flex-no-shrink lg:flex-grow ${toggle}`}>
                    <div className="lg:flex lg:items-stretch lg:justify-end ml-auto">
                    <p 
                        className="font-light text-gray-900 flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center transition duration-300 hover:text-blue-600"
                        onClick ={() => history.push('/services')}
                    >SERVICES</p>
                    {userContext.user ? (
                        <Fragment>
                            <p 
                                className="font-light text-gray-900 flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center transition duration-300 hover:text-blue-600"
                                onClick ={() => history.push('/pets')}
                            >PETS</p>
                            <p 
                                className="font-light text-gray-900 flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center transition duration-300 hover:text-blue-600"
                                onClick ={() => history.push('/consults')}
                            >CONSULTS</p>
                            <p 
                                className="font-light text-gray-900 flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center transition duration-300 hover:text-blue-600"
                                onClick ={(e) => logout(e)}
                            >LOGOUT</p>
                        </Fragment>
                    ) : (
                        <Fragment>
                            <p 
                                className="font-light text-gray-900 flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center transition duration-300 hover:text-blue-600"
                                onClick ={() => history.push('/login')}
                            >SIGN IN</p>
                            <p 
                                className="font-light text-gray-900 flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center transition duration-300 hover:text-blue-600"
                                onClick ={() => history.push('/register')}
                            >SIGN UP</p>
                        </Fragment>
                    )}
                    </div>
                </div>
            </nav>
        </Fragment>
    )
}

export default Navbar
