/* eslint-disable react/style-prop-object */
import React, { Fragment } from 'react'
import FirstSection from '../components/Home/FirstSection'
import SecondSection from '../components/Home/SecondSection'
import ThirdSection from '../components/Home/ThirdSection'

const Home = () => {
    return (
        <Fragment>
           <FirstSection/>
           <SecondSection/>
           <ThirdSection/>
        </Fragment>
    )  
}

export default Home
