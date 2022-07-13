import React from 'react'
import Hero from '../Hero/Hero'
import Navbar from '../navbar/Navbar'
import Posts from '../posts/Posts'

function LandingPage() {
    return (
        <div className=" landingPage container-fluid">
         <Navbar />
         <Hero />
         <Posts />
        </div>
    )
}

export default LandingPage
