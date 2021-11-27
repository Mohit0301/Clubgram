import React from 'react'
import { useState } from 'react'
import axios from 'axios';
import './AddEvent.css'
export const AddEvent = (props) => {
  const [eventName, setEventName] = useState();
  const [eventDesc, setEventDesc] = useState();
  const [startDate, setStartDate] = useState();
  const [startTime, setStartTime] = useState();
  const [endDate, setEndDate] = useState();
  const [endTime, setEndTime] = useState();
  const [eventInfo, setEventInfo] = useState();
  const [platform, setPlatform] = useState();


  //Adding event
  const submitHandler = (e) => {
    e.preventDefault();
    const newEvent = {
      eventName: eventName,
      eventDesc: eventDesc,
      startDate: startDate,
      endDate: endDate,
      startTime: startTime,
      endTime: endTime,
      platform: platform,
      clubName: props.user.user_name,
      eventInfo: eventInfo,
    }
    console.log(newEvent);
    setEventName("");
    setEventDesc("");
    setStartDate("");
    setStartTime("");
    setEndDate("");
    setEndTime("");
    setEventInfo("");
    setPlatform("");

    //Request to API
    try {
      axios.post("http://localhost:5000/events/add", newEvent).then(res => alert(res.data.message));

    }
    catch (err) {
      console.log(err);
    }

  }
  return (
    <div className="container my-3">
      <div className="card bodyColor">
        <div className="card-header header">
          <h3>Add event!</h3>
        </div>
        <div className="container my-3 form ">

          <form>
            <div className="container my-3">
              <div class="form-group">
                <label for="exampleInputEmail1" className="label">Event name</label>
                <input type="text" class="form-control" id="eventName" aria-describedby="emailHelp" value={eventName} onChange={(e) => { setEventName(e.target.value) }} placeholder="Enter event name" />
              </div>
              <div class="form-group">
                <label for="exampleInputEmail1" className="label">Event Description</label>
                <input type="text" class="form-control" id="eventDesc" aria-describedby="emailHelp" value={eventDesc} onChange={(e) => setEventDesc(e.target.value)} placeholder="Enter event description" />
              </div>
              <div class="form-group">
                <label for="exampleInputEmail1" className="label">Important information</label>
                <textarea class="text-area text-box multi-line" data-val="true" value={eventInfo} data-val-length="Maximum = 5000 characters" data-val-length-max="5000" id="info" name="info" cols="40" rows="3" onChange={(e) => { setEventInfo(e.target.value) }} placeholder="Enter event description"></textarea>
              </div>
              <div class="form-group">
                <div className="dateTimeLabel">
                  <label for="exampleInputEmail1" className="label">Start date</label>
                  <label for="exampleInputEmail1" className="label">Start time</label>
                </div>
                <div className="dateTime">
                  <input type="date" class="form-control" value={startDate} id="startDate" aria-describedby="emailHelp" onChange={(e) => { setStartDate(e.target.value) }} placeholder="Enter start date" />

                  <input type="time" class="form-control" value={startTime} id="startTime" aria-describedby="emailHelp" onChange={(e) => { setStartTime(e.target.value) }} placeholder="Enter start time" />
                </div>
              </div>
              <div class="form-group">
                <div className="dateTimeLabel">
                  <label for="exampleInputEmail1" className="label">End date</label>
                  <label for="exampleInputEmail1" className="label">End time</label>
                </div>
                <div className="dateTime">
                  <input type="date" class="form-control" value={endDate} id="endDate" aria-describedby="emailHelp" onChange={(e) => { setEndDate(e.target.value) }} placeholder="Enter end date" />

                  <input type="time" class="form-control" value={endTime} id="endTime" aria-describedby="emailHelp" onChange={(e) => { setEndTime(e.target.value) }} placeholder="Enter end time" />
                </div>
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1" className="label">Platform</label>
                <input type="text" class="form-control" value={platform} id="platform" onChange={(e) => { setPlatform(e.target.value) }} placeholder="Platform" />
              </div>
              <div className=" container">
                <div className="addBtn">
                  <button type="submit" class="btn btn-primary my-3" onClick={submitHandler}>Add Event</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
