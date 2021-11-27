import React from 'react'
import { Card } from '../EventCard/Card'
import { format } from "timeago.js";
import { useEffect, useState } from 'react'
import "../UpcomingEvent/Event.css"
export const LiveEvent = (props) => {
    // fetch events
    let defaultUrl = "http://localhost:5000";
    const [eventData, setEventData] = useState([]);
    let count = 0;

    //Fetching list of all events
    useEffect(() => {
        let url = defaultUrl + "/events/";
        let unmounted = false;


        fetch(url).then((response) => {
            if (!unmounted) {
                if (response.ok) {
                    response.json().then((data) => {
                        setEventData(data.sort((e1, e2) => {
                            return new Date(e1.endDate) - new Date(e2.endDate);
                        }));
                    })
                }
                else {
                    console.log("Error");
                }
            }
        })
            .catch((e) => {
                if (!unmounted) {
                    alert("response ERROR" + e);

                }
            });
        return function cleanup() {
            unmounted = true;
        };
    }, [])

    return (

        <div>
            {/* Checking if the Event is ongoing and rendering it */}
            {eventData.map((eventData, index) => {
                if (format(eventData.startDate).split(" ")[0] !== "in" && format(eventData.endDate).split(" ")[0] === "in") {
                    count = count + 1;
                }
                return (
                    <div className="container my-3">
                        {format(eventData.startDate).split(" ")[0] !== "in" && format(eventData.endDate).split(" ")[0] === "in" ? <Card eventData={eventData} user={props.user} /> : ""}
                    </div>
                )
            })}
            <div className="noEvents">
                {count === 0 ? <div className="noEvents">No upcoming events!</div> : ""}</div>
        </div>

    )
}
