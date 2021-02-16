import React, { Fragment } from 'react'

interface Props {
    
}

const FirstSection = (props: Props) => {
    return (
        <Fragment>
                    <div className="flex flex-col text-center w-full mb-12">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Pets Section</h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-600">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep.</p>
                    </div>
                    <div className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:px-0 items-end sm:space-x-4 sm:space-y-0 space-y-0">
                    </div>
                
        </Fragment>
    )
}

export default FirstSection
