import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faCalendar, faInfoCircle, faCommentDots, faHashtag, faCalendarDay } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom";
export const Features = () => {
    return (
        <div>
            <div className="card-header header">Features</div>
            <div className="Work">
                <section id="team" className="Work" data-stellar-background-ratio="1">

                    <div className="row">



                        <div className="clearfix"></div>

                        <div className="col-md-4 col-sm-6">
                            <div className="team-thumb wow fadeInUp" data-wow-delay="0.2s">
                                <Link to="/Search"> <FontAwesomeIcon className="icon" icon={faSearch} /></Link>
                                <div className="team-contact-info" >
                                    <p>Search for your peers!</p>
                                </div>



                            </div>
                        </div>

                        <div className="col-md-4 col-sm-6">
                            <div className="team-thumb wow fadeInUp" data-wow-delay="0.6s">
                                <Link to="/UpcomingEvents"><FontAwesomeIcon className="icon" icon={faCalendar} /></Link>

                                <div className="team-contact-info" >
                                    <p>Don't miss out on any events!</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 col-sm-6">
                            <div className="team-thumb wow fadeInUp" data-wow-delay="0.6s">
                                <Link to="/" onClick={() => { alert("Head to the navigation-bar to choose the club") }}><FontAwesomeIcon className="icon" icon={faInfoCircle} /></Link>
                                <div className="team-contact-info">
                                    <p>Know more about your favorite club!</p>
                                </div>
                            </div>
                        </div>

                    </div>

                </section>
            </div>
            <div className="Work">
                <section id="team" className="Work" data-stellar-background-ratio="1">

                    <div className="row">



                        <div className="clearfix"></div>

                        <div className="col-md-4 col-sm-6">
                            <div className="team-thumb wow fadeInUp" data-wow-delay="0.2s">
                                <Link to="/Connect"><FontAwesomeIcon className="icon" icon={faCommentDots} /></Link>
                                <div className="team-contact-info" >
                                    <p>Chat with your peers!</p>
                                </div>



                            </div>
                        </div>

                        <div className="col-md-4 col-sm-6">
                            <div className="team-thumb wow fadeInUp" data-wow-delay="0.6s">
                                <Link to="/LiveEvents"><FontAwesomeIcon className="icon" icon={faCalendarDay} /></Link>


                                <div className="team-contact-info" >
                                    <p>Checkout the ongoing events!</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 col-sm-6">
                            <div className="team-thumb wow fadeInUp" data-wow-delay="0.6s">
                                <Link to="/Feed"><FontAwesomeIcon className="icon" icon={faHashtag} /></Link>
                                <div className="team-contact-info">
                                    <p>Check your feed to stay updated!</p>
                                </div>
                            </div>
                        </div>

                    </div>

                </section>
            </div>
        </div>
    )
}
