import React, { Fragment, useState } from 'react'

const Navbar:React.FC = () => {
    const [toggle, setToggle] = useState('hidden')

    const changeToggle = (e: any) => {
        e.preventDefault()
        if(toggle === ''){
            setToggle('hidden')
            return
        }
        setToggle('')
    }
    return (
        <Fragment>
            <nav className='relative select-none bg-gray-800 lg:flex lg:items-stretch w-full'>
                <div className='flex flex-no-shrink items-stretch h-12'>
                    <h2 className='font-semibold flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center hover:bg-gray-700 transition duration-500'>VETERINARY</h2>
                    <button 
                        onClick={(e) => changeToggle(e)}
                        className="block lg:hidden cursor-pointer ml-auto relative w-12 h-12 p-4">
                        {toggle === 'hidden' ?
                            (
                                <svg className="fill-current text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                            ):
                            (
                                <svg className="fill-current text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"/></svg>
                            )
                        }
                        
                    </button>
                </div>
                <div className={`lg:flex lg:items-stretch lg:flex-no-shrink lg:flex-grow ${toggle}`}>
                    <div className="lg:flex lg:items-stretch lg:justify-end ml-auto">
                    <a className="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center hover:bg-grey-dark hover:bg-gray-700 transition duration-500 font-light">SERVICES</a>
                    <a className="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center hover:bg-grey-dark hover:bg-gray-700 transition duration-500 font-light">LOGIN</a>
                    <a className="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center hover:bg-grey-dark hover:bg-gray-700 transition duration-500 font-light">REGISTER</a>
                    </div>
                </div>
            </nav>
        </Fragment>
    )
}

export default Navbar
