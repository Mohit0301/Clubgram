import React from 'react'
import fairImg from "../Roobaroo/images/clubfairjpg.jpg"
import eventImg from '../Roobaroo/images/pure-romance.jpg'
import './Drishtant.css'

export const About = () => {
    return (

        <div className="container">
            <div className="card">
                <div className="topWrapper">
                    <div className="about-us">

                        <p className="aboutText">Roobaroo is the cultural club of MANIT Bhopal. ROOBAROO is the Cultural Society of NIT, Bhopal.
                            Gives you a reason to find your hidden talents & dedication towards your caliber.
                            <br /><br />
                            If you are talented or interested in music, dancing and singing then this society is perfect for you. This society is full of talented people and you can learn a lot from them and even gain recognition among the crowd.
                            It conducts several cultural events in a year where its members perform to woo the crowd. You can also get a chance to perform in Maffick, which is th annual cultural fest of MANIT Bhopal.</p>
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
                        <p className="aboutText2">Roobaroo helps you find your hidden talents you never thought you could have! It also hones your event management skills when it organizes GIGA Nights on a large scale during Maffick.
                            Not to mention, Roobaroo consists of over 100 members and a ticket to roobaroo will for sure ensure your connection with alot of your peers and make your college life a great experience altogether.
                            <br /><br />
                            A ticket to Roobaroo is an event conducted in the start of every even semester to allow entries mainly for first year students. However, anyone is allowed to participate
                            <br />
                            So don't miss out, stay tuned to know more about the upcoming events!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
