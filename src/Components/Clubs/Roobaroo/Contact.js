import React, { useState } from 'react'
import axios from 'axios';
import './Drishtant.css'
export const Contact = () => {

  let defaultUrl = "http://localhost:5000";
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [query, setQuery] = useState();

  //Sending query
  const submitHandler = async (e) => {
    e.preventDefault();
    const email_body = " Query: " + query;
    console.log(email_body);
    const request = {
      subject: "Query from " + email,
      to: "roobaroo2021@gmail.com",

      text: email_body,
    }
    setName("");
    setEmail("");
    setQuery("");
    try {
      // Sending mail through API call
      const res = await axios.post(defaultUrl + '/mail/query/', request);
      console.log(res.data);
      alert("Query sent!");
    }
    catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="container">
      <div className="card">
        <form className="formWrapper" >
          <div class="form-group">
            <label for="exampleInputEmail1">Name</label>
            <input type="text" class="form-control" id="exampleInputEmail1" value={name} onChange={(e) => setName(e.target.value)} aria-describedby="emailHelp" placeholder="Enter name" />

          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Email</label>
            <input type="text" class="form-control" id="exampleInputEmail1" value={email} onChange={(e) => setEmail(e.target.value)} aria-describedby="emailHelp" placeholder="Enter Email ID" />

          </div>
          <br />
          <div class="form-group">
            <label for="exampleInputEmail1">Query</label>
            <input type="text" class="form-control" id="exampleInputEmail1" value={query} onChange={(e) => setQuery(e.target.value)} aria-describedby="emailHelp" placeholder="Enter query" />

          </div>

          <br />
          <button type="submit" class="btn btn-primary" onClick={(e) => submitHandler(e)}>Send</button>
        </form>
      </div>
    </div>
  )
}
