import React from 'react'
import { format } from "timeago.js";
import axios from 'axios';
import { useState } from 'react';
import Scrollbars from 'react-scrollbars-custom'
import './card.css'

export const Card = (props) => {
  console.log(props);
  const [attend, setAttend] = useState(props.eventData?.attend.includes(props.user?._id));
  const [eventData, setEventData] = useState(props.eventData);
  const [showInfo, setShowInfo] = useState(false);
  let defaultUrl = "http://localhost:5000";


  //Adding user to the list of attendees in the database for a particular event
  const attendHandler = async (e) => {
    e.preventDefault();

    const user = {
      user_id: props.user._id
    }
    try {
      const res = await axios.post(defaultUrl + '/events/' + props.eventData._id + '/attend', user);
      setEventData(res.data);
      setAttend(true);
    }
    catch (err) {
      console.log(err);
    }


  }


  //Scheduling mail to be sent as a reminder
  const remindHandler = async (e) => {
    e.preventDefault();
    const request = {
      to: props.user.email_id,
      date: props.eventData.startDate,
      time: props.eventData.startTime,
    }
    alert("You will receive a reminder 2 hours before the event!");
    try {
      // 
      const res = await axios.post(defaultUrl + '/mail/send/', request);

      console.log(res.data);
    }
    catch (err) {
      console.log(err);
    }


  }

  return (
    <div>
      <div class="card text-center">
        <div class="card-header">
          {props.eventData.clubName}
        </div>
        <div class="card-body bodyColor">
          <h5 class="card-title">{props.eventData.eventName}</h5>
          <p class="card-text">{props.eventData.eventDesc}</p>
          <p class="card-text">Starts on {props.eventData.startDate} at {props.eventData.startTime}</p>
          <p class="card-text">Ends on {props.eventData.endDate} at {props.eventData.endTime}</p>
          {!attend || props.user.privileges === true ? <><button href="#" class="btn btn-success" onClick={(e) => { attendHandler(e)}}>{props.user.privileges === true ? <>({eventData.attend.length}) Expected Attendance</> : <>Attend</>} </button></> : <button href="#" class="btn btn-success" disabled>Attend</button>}
          <> <button href="#" class="btn btn-danger" onClick={(e) => { remindHandler(e) }}>Remind me</button></>
          {eventData.eventInfo ? <> <button className="btn btn-primary" onClick={() => setShowInfo(!showInfo)}>Info</button></> : <> <button className="btn btn-primary" disabled>Info</button></>}

        </div>
        <div class="card-footer text-muted">
          {format(props.eventData.startDate)}
        </div>
        {showInfo ?

          <div className="card" id="popup-1">
            <div className="overlay"></div>
            <Scrollbars style={{ height: 300 }}>
              <div className="card-body ">
                <h1>Information</h1>
                <p>{eventData.eventInfo}</p>
              </div>
            </Scrollbars>

          </div> : ""}
      </div>
    </div>
  )
}
