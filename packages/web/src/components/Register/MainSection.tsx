import React, { Fragment, useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import UserContext from "../../context/User/UserContext";
import ErrorAlert from "../Alerts/ErrorAlert";
import GoogleAuth from "../GoogleAuth";
import { checkEmail, checkPassword, comparePassword } from "../helpers/RegisterHelpers";

type RegisterInputs = {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const MainSection = () => {
  const userContext = useContext(UserContext)
  const { register, handleSubmit } = useForm<RegisterInputs>();
  const history = useHistory()
  const [error, setError] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>("false");

  const SubmitData = async (data: RegisterInputs, e: any): Promise<void> => {
    e.preventDefault();
    setError(false)
    if(!data){
        setErrorMsg("Please send all camps")
        setError(true)
        return 
    }
    const emailChecked = checkEmail(data.email)
    if(emailChecked){
        setErrorMsg("Please send a valid email")
        setError(true)
        return 
    }
    const passwordChecked = checkPassword(data.password)
    if(passwordChecked){
        setErrorMsg("Password invalid")
        setError(true)
        return 
    }
    const passwordCompared = comparePassword(data.password, data.confirmPassword)
    if(passwordCompared){
        setErrorMsg("Password not equals")
        setError(true)
        return 
    }
    const resp = await userContext.userRegister(data)
    if(resp.success === false){
        setErrorMsg(resp.message)
        setError(true)
        return
    }
    if(resp){
        history.push('/')
        return
    }
  };

  return (
    <Fragment>
      <div className="min-h-screen flex items-center justify-center bg-gray-90 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Sign up in the best veterinary of the world
            </h2>
          </div>
          {error ? <ErrorAlert message={errorMsg} /> : null}
          <GoogleAuth />
          <form className="mt-8 space-y-6" onSubmit={handleSubmit(SubmitData)}>
            
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="firstname" className="sr-only">
                  Firstname
                </label>
                <input
                  id="firstname"
                  name="firstname"
                  type="text"
                  autoComplete="text"
                  required
                  className="appearance-none rounded-none relative mb-2  block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Firstname"
                  ref={register({required: true})}    
                ></input>
              </div>
              <div>
                <label htmlFor="lastname" className="sr-only">
                  Lastname
                </label>
                <input
                  name="lastname"
                  type="text"
                  autoComplete="lastname"
                  required
                  className="appearance-none rounded-none relative mb-2  block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Lastname"
                  ref={register({required: true})}    
                ></input>
              </div>
              <div>
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  autoComplete="text"
                  required
                  className="appearance-none rounded-none relative mb-2  block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email"
                  ref={register({required: true})}    
                ></input>
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  name="password"
                  type="password"
                  required
                  className="appearance-none rounded-none relative mb-2  block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                  ref={register({required: true})}    
                ></input>
              </div>
              <div>
                <label htmlFor="confirmPassword" className="sr-only">
                  Confirm Password
                </label>
                <input
                  name="confirmPassword"
                  type="password"
                  autoComplete="confirm-password"
                  required
                  className="appearance-none rounded-none relative  block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Confirm password"
                  ref={register({required: true})}    
                ></input>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="group relative mb-2  w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <svg
                    className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default MainSection;
