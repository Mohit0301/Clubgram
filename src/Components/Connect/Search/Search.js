import React from 'react'
import { useRef, useState} from 'react'
import axios from 'axios';
import { UserList } from './UserList/UserList';
import './search.css'


export const Search = (props) => {
  const [usersFound, setUsersFound] = useState([]);

  const attribute = useRef();
  const [search, setSearch] = useState(false);
  const [searchUser, setSearchUser] = useState("");


  //Fetching list of students
  const submitHandler = (e) => {
    e.preventDefault();
    const SearchUser = {
      user_name: "",
      roll_number: "",
      year: "",
      branch: "",

    };
    if (attribute.current === "name") {
      SearchUser.user_name = searchUser;

    }
    if (attribute.current === "roll_number") {
      SearchUser.roll_number = searchUser;
    }
    if (attribute.current === "year") {
      SearchUser.year = searchUser;
    }
    if (attribute.current === "branch") {
      SearchUser.branch = searchUser;
    }
    console.log(attribute.current);
    try {
      axios.post("http://localhost:5000/users/search", SearchUser).then(res => {
        setUsersFound(res.data.user);
        console.log("Found!", usersFound.length);
      })
    }
    catch (err) {
      console.log(err);
    }
    setSearch(true);
  }

  return (
    <div className="container">
      <div className="card-header my-3">
      <div className="searchForm">
        <form class="d-flex mx-3">
          <select name="attribute" id="attribute" required onChange={(e) => { attribute.current = e.target.value; }}>
            <option value="Search by" default hidden>Search By</option>
            <option value="name">Name</option>
            <option value="branch">Branch</option>
            <option value="roll_number">Roll Number</option>
            <option value="year">Year</option>
          </select>
        </form>
        <form class="d-flex">
          <input class="form-control me-2" type="search" onChange={(e) => { setSearchUser(e.target.value); setSearch(false) }} placeholder="Search" aria-label="Search" />
          <button class="btn btn-success" onClick={(e) => { submitHandler(e) }} type="submit">Search</button>
        </form>
      </div>
      </div>
      {usersFound.length !== 0 ? <UserList users={usersFound} currentUser={props.user}></UserList> : ""}
    </div>
  )
}
