import React, { Fragment } from 'react'
import FirstSection from '../components/Pets/FirstSection'
import SecondSection from '../components/Pets/SecondSection'

const Pets = () => {
    return (
        <Fragment>
            
            <section className="bg-white body-font ">
                <div className="container px-5 py-10 mx-auto">
                    <FirstSection/>
                    <SecondSection/>
                </div>
            </section>
        </Fragment>
    )
}

export default Pets
