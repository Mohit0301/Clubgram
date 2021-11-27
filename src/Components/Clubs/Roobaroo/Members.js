import React, { useEffect, useState } from 'react'
import Scrollbars from 'react-scrollbars-custom'
import { Image } from 'cloudinary-react'
import axios from 'axios'
export const Members = () => {

  const [members, setMembers] = useState();
  let count = 1, color = "";

  //Fetching list of members from Roobaroo
  useEffect(async () => {
    try {
      const data = {
        club: "Roobaroo"
      }
      const res = await axios.post("http://localhost:5000/member/find", data);
      setMembers(res.data);
    } catch (err) {
      console.log(err);
    }
  })

  
  return (
    <div className="container my-3">
      <div className="table">
        <Scrollbars style={{ height: 500 }}>
          <table class="table">

            <tbody>
              <tr className="headerColor">
                <th scope="row">#</th>
                <th scope="row">Name</th>
                <th scope="row">Year</th>
                <th scope="row">Branch</th>
                <th scope="row">Position</th>
                <th scopre="row"></th>
              </tr>
              {members?.map((member) => {
                if (count % 2 === 0) {
                  color = "colorLight";
                }
                else {
                  color = "colorDark";
                }
                return (
                  <tr className={color}>
                    <th scope="row">{count++}</th>
                    <td >{member.name}</td>
                    <td >{member.year}</td>
                    <td >{member.branch}</td>
                    <td >{member.position}</td>
                    <td ><Image className="memberImg" cloudName="dfhdwzrzh" public_id={member.image} /></td>


                  </tr>
                )
              })}




            </tbody>
          </table>
        </Scrollbars>
      </div>
    </div>
  )
}
