import React, { Fragment } from 'react'
import GoogleAuth from '../GoogleAuth'

const MainSection = () => {

    const onSubmit = (e: any) => {
        e.preventDefault()
        console.log('sending')
    }

    return (
        <Fragment>
             <div className="min-h-screen flex items-center justify-center bg-gray-90 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-8">
                    <div>
                    
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                        Sign up in the best veterinary of the world
                    </h2>
                    </div>
                    <GoogleAuth/>
                    <form className="mt-8 space-y-6" onSubmit={(e) => onSubmit(e)}>
                    <input type="hidden" name="remember" value="true"></input>
                    <div className="rounded-md shadow-sm -space-y-px">
                    <div>
                        <label htmlFor="firstname" className="sr-only">Firstname</label>
                        <input id="firstname" name="firstname" type="text" autoComplete="text" required className="appearance-none rounded-none relative mb-2  block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Firstname"></input>
                    </div>
                    <div>
                        <label htmlFor="lastname" className="sr-only">Lastname</label>
                        <input id="lastname" name="lastname" type="text" autoComplete="lastname" required className="appearance-none rounded-none relative mb-2  block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Lastname"></input>
                    </div>
                    <div>
                        <label htmlFor="email" className="sr-only">Email</label>
                        <input id="email" name="email" type="email" autoComplete="text" required className="appearance-none rounded-none relative mb-2  block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email"></input>
                    </div>
                    <div>
                        <label htmlFor="password" className="sr-only">Password</label>
                        <input id="password" name="password" type="password"  required className="appearance-none rounded-none relative mb-2  block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password"></input>
                    </div>
                    <div>
                        <label htmlFor="confirm-password" className="sr-only">Confirm Password</label>
                        <input id="confirm-password" name="confirm-password" type="password" autoComplete="confirm-password" required className="appearance-none rounded-none relative  block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Confirm password"></input>
                        </div>
                    </div>
                    <div>
                        <button type="submit" className="group relative mb-2  w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                            <svg className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                            </svg>
                        </span>
                        Sign in
                        </button>
                    </div>
                    </form>
                </div>
                </div>
        </Fragment>
    )
}

export default MainSection
