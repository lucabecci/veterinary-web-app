import React, { Fragment } from 'react'

const FirstSection = () => {
    return (
        <Fragment>
            <section className="text-gray-400 bg-white body-font">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 className="title-font sm:text-5xl text-2xl mb-4 font-medium text-gray-900">A place to relax and have a good deal
                </h1>
                <p className="mb-8 leading-relaxed text-gray-500">Come have a good deal with your pet. We will make your pet and you feel very comfortable, since the client can relax in the relaxation area and your pet will be treated by the best.</p>
                <div className="flex justify-center">
                    <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">Start now</button>
                </div>
                </div>
                <div className="lg:max-w-lg lg:w-3/6 md:w-4/6 w-4/6">
                <img className="object-cover object-center rounded" alt="hero" src="https://ouch-cdn.icons8.com/preview/66/dbd7e350-2ea6-4e83-9a5d-37dd44893b0b.png">               
                </img>
                </div>
            </div>
            </section>
        </Fragment>
    )
}

export default FirstSection
