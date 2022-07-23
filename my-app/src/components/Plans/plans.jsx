import React from 'react'
import './plans.css'
import {plansData} from '../../data/plansData'
import whiteTicker from '../../assets/whiteTick.png'

const plans = () => {
    return (
        <div>
        <div className="plans-container">
            <div className="programs-header">
                <span className="stroke-text">READY TO START</span>
                <span>YOUR JOURNEY</span>
                <span className="stroke-text">NOW WITHUS</span>
            </div>

            <div className="plans">
                {plansData.map((plan, i) =>(
                    <div className="plan" key={i}>
                        {plan.icon}
                        <span>{plan.name}</span>
                        <span>$ {plan.price}</span>

                        <div className="features">
                            {plan.features.map((feature, i) =>(
                                <div className="feature" key={i}>
                                    <img src={whiteTicker} />
                                    <span key={i}>{feature}</span>
                                </div>
                            ))}
                        </div>

                        <div>
                            <span>See more benefits -> </span>
                        </div>
                            <button className="btn">Join Now</button>
                    </div>
                ))}
            </div>
        </div>
        </div>
  )
}

export default plans
