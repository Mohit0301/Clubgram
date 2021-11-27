import React from 'react'
import fairImg from "../Aaroha/images/clubfairjpg.jpg"
import eventImg from '../Aaroha/images/pure-romance.jpg'
import './Drishtant.css'

export const About = () => {
    return (

        <div className="container">
            <div className="card">
                <div className="topWrapper">
                    <div className="about-us">

                        <p className="aboutText">“Aaroha” came into existence with the thought of providing free basic education and a nurturing environment for the overall growth and development of the weaker and less privileged classes of our society. As the name suggests, the organization is committed to the cause of enlightening the lives of the poor children and driving them away from the darkness of illiteracy and ignorance.
                            <br /><br />
                            Aaroha is not a group of wealthy and resourceful people. Instead they are the students of various govt. and private colleges of Bhopal who have different aspirations, dreams and ambitions in life but share a common vision.</p>
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
                        <p className="aboutText2"><ul><li>Under Project 'AKSHAR',we survey,identify talent and provide them daily classes.</li>
                            <li>Under Project 'PATHSHALA' we join deserved kids into prestigious institutions.</li>
                            <li>Under Project 'AAKAR',we conduct events and workshops in focus of their overall growth.</li>
                            <li>Under Project 'PRADHAN',we provide them essential, educational and other kits.</li>
                            <li>Under Project 'AANAND',we take them on field trips,ignite and guide them to achieve dreams</li>
                            <li>Under Project 'AAHAR'',we provide the needy with food.

                            </li></ul></p>
                    </div>
                </div>
            </div>
        </div>
    )
}
