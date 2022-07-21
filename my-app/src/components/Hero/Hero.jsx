import React from 'react'
import './Hero.css'
import Header from './Header/Header'
import hero_image from '../../assets/hero_image.png'
import hero_image_back from '../../assets/hero_image_back.png'
import heart from '../../assets/heart.png'
import calories from '../../assets/calories.png'
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
        <div className="right-h">
            <button  className="btn">Join Now</button>


            <div className="heart-rate">
                <img src={heart} />
                <span>Heart Rate</span>
                <span>116 bpm</span>
            </div>

            {/*hero images */}

            <img src={hero_image}  className="hero-image" />
            <img src={hero_image_back}  className="hero-image_back" />

            {/*Calories */}

            <div className="calories">
            <img src={calories} />
            <div>
            <span>Calories burned</span>
            <span>220 kcal </span>
            </div>
            </div>

        </div>
    </div>
    )
}

export default Hero