import axios from 'axios';
import React, { useState, useRef } from 'react'
import Axios from 'axios';
export const AddMember = () => {
  const [name, setName] = useState();
  const [year, setYear] = useState();
  const [branch, setBranch] = useState();
  const [position, setPosition] = useState();
  const [club, setClub] = useState();
  const [file, setFile] = useState();
  const url = useRef()

  //Adding member
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      console.log(file);
      const data = new FormData();
      data.append("file", file);
      data.append("upload_preset", "zxohhc3u");
      console.log(file);

      //Uploading image on cloudinary
      await Axios.post("https://api.cloudinary.com/v1_1/dfhdwzrzh/image/upload", data).then((res) => { console.log(res); url.current = res.data.secure_url; });
      const newMember = {
        name: name,
        branch: branch,
        year: year,
        position: position,
        club: club,
        file: url.current,
      }
      console.log(newMember);
      setName("");
      setBranch("");
      setYear("");
      setPosition("");
      setClub("");
      setFile("");

      //Adding member to the database
      await axios.post("http://localhost:5000/member/add", newMember).then((res) => console.log(res));
      alert("Member has been added!");

    }
    catch (err) {
      console.log(err);
    }
  }
  return (
    // Add member form
    <div className="container my-3">
      <div className="card bodyColor">
        <div className="card-header header">
          <h3>Add member!</h3>
        </div>
        <div className="container my-3 form ">

          <form>
            <div className="container my-3">
              <div class="form-group">
                <label for="exampleInputEmail1" className="label">Member name</label>
                <input type="text" class="form-control" id="memberName" aria-describedby="emailHelp" value={name} onChange={(e) => { setName(e.target.value) }} placeholder="Enter member name" />
              </div>
              <div class="form-group">
                <label for="exampleInputEmail1" className="label">Year</label>
                <input type="text" class="form-control" id="year" aria-describedby="emailHelp" value={year} onChange={(e) => { setYear(e.target.value) }} placeholder="Enter year" />
              </div>
              <div class="form-group">
                <label for="exampleInputEmail1" className="label">Branch</label>
                <input type="text" class="form-control" id="branch" aria-describedby="emailHelp" value={branch} onChange={(e) => { setBranch(e.target.value) }} placeholder="Enter branch" />
              </div>
              <div class="form-group">
                <label for="exampleInputEmail1" className="label">Club name</label>
                <input type="text" class="form-control" id="club" aria-describedby="emailHelp" value={club} onChange={(e) => { setClub(e.target.value) }} placeholder="Enter clubname" />
              </div>
              <div class="form-group">
                <label for="exampleInputEmail1" className="label">Position</label>
                <input type="text" class="form-control" id="position" aria-describedby="emailHelp" value={position} onChange={(e) => { setPosition(e.target.value) }} placeholder="Enter branch" />
              </div>

              <div class="form-group">
                <label for="exampleInputEmail1" className="label">Upload Image</label>
                <input type="file" id="file" accept=".png,.jpg,.jpeg,.PNG,.jfif" onChange={(e) => setFile(e.target.files[0])} /></div>
              <div className=" container">
                <div className="addBtn">
                  <button type="submit" class="btn btn-primary my-3" onClick={(e) => { submitHandler(e) }}>Add Member</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
