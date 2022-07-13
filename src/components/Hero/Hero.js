import React from 'react'
import bgImg from '../../assets/HeroLanding.png'
import '../../components/Hero/Hero.css'


function Hero() {
    return (
        <div className="hero container-fluid mb-5">
           <div className="hero-img">
           <div className="overlay">
           <div className="hero-contents d-flex align-items-start justify-items-start flex-column">
               <h1>Computer Engineering</h1>
               <p>142,765 Computer Engineers follow this</p>
           </div>
           </div>
             <img src={bgImg} class="img-fluid" alt=""/>
            
           </div>
       
        </div>
    )
}

export default Hero
