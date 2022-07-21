import React from 'react'
import './Hero.css'
import Header from './Header/Header'
const Hero = () => {
    return (
    <div className="hero">
        <div className="left-h">
            <Header/>
        {/* the best add */}
            <div className="the-best-add">
                <div></div>
                <span>The best fitness club in the town</span>
            </div>
        {/* Hero heading*/}
        <div className="hero-text">
            <div>
                <span className="stroke-text">shape </span>
                <span>your</span>
            </div>
            <div>
            <span> ideal body</span>
            </div>
            <div>
                <span>In here we will help you to shape and build your 
                ideal body and live up your life to fullest</span>
            </div>
        </div>

        {/*figures */}
        <div className="figures">
            <div>
                <span>+ 140</span>
                <span>EXPERT COACHES</span>
            </div>
            <div>
                <span>+ 978</span>
                <span>MEMBERS JOINED</span>
            </div>
            <div>
                <span>+ 50</span>
                <span>FITNESS PROGRAMS</span>
            </div>
        </div>

        {/*hero buttons */}

        <div className="hero-button">
            <button  className="btn">Get Started</button>
            <button  className="btn">Learn More</button>

        </div>
        </div>
        <div className="rifht-h">right side</div>
    </div>
    )
}

export default Hero