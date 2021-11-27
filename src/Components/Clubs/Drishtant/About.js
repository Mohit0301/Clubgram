import React from 'react'
import fairImg from "../Drishtant/images/clubfairjpg.jpg"
import eventImg from '../Drishtant/images/pure-romance.jpg'
import './Drishtant.css'

export const About = () => {
    return (

        <div className="container">
            <div className="card">
                <div className="topWrapper">
                    <div className="about-us">

                        <p className="aboutText">Drishtant is the only literary society of MANIT, Bhopal. Since its very inception in 1996, Drishtant has been aiming at improving the overall literary persona of students. The mission of Drishtant has been manifold. Transforming students from being shy and introverted PCM nerds to loquacious entrepreneurs and engineers of tomorrow. ‘D’ has always strived for inculcating effective communication skills in students. To rescue you from the clutches of intense academic pressure, D events are peppy and fun. Be it ‘Technosearch – Illuminati’, ‘Maffick – Ripple’ or any weekly event, D events have left participants both satisfied and gasping for more.</p>
                    </div>
                    <div >
                        <img class="aboutImg" src={fairImg} alt=""></img>
                    </div>
                </div>

                <div className="bottomWrapper">
                    <div >
                        <img className="aboutImg2" src={eventImg} alt=""></img>
                    </div>
                    <div className="about-us">
                        <p className="aboutText2">Drishtant organizes 2 major events
                            <br />
                            <ul>
                                <li>Illuminati</li>
                                <li>Ripple</li>
                            </ul>
                            Each of these events consists of themed literary-cum-fun events which have massive turnouts every year. In addition to this, various fun events are conducted on instagram such as Stalkathon and Murder Mysteries.
                            <br />
                            <br />
                            Drishtant has not limited itself to being a society. It has helped students hone their communication skills, organize events and
                            manage the soceity which in turn enhance your managerial skills.
                            <br />
                            <br />
                            Hence, we would suggest you to shed away your hesitance and try to participate in activities that aim at grooming your personalities and nurture in you the much-needed confidence required to face the real world.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
