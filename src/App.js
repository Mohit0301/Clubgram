import { useState, useEffect } from "react";
import './App.css';
import { Login } from "./Components/login/Login";
import { Register } from "./Components/register/Register";
import { Home } from "./Components/Home/Home/Home";
import { LiveEvent } from "./Components/Events/LiveEvent/LiveEvent";
import { NavBar } from "./Components/Home/NavBar/NavBar";
import { Messenger } from "./Components/Connect/messenger/Messenger"
import { AddMember } from "./Components/AddMember/AddMember";
import { Drishtant } from "./Components/Clubs/Drishtant/Drishtant";
import { Roobaroo } from "./Components/Clubs/Roobaroo/Roobaroo";
import { Aaroha } from './Components/Clubs/Aaroha/Aaorha';
import { Feed } from "./Components/Post/Feed/Feed";
import { AddEvent } from "./Components/AddEvent/AddEvent";
import { Event } from "./Components/Events/UpcomingEvent/Event"
import { Search } from "./Components/Connect/Search/Search";
import { Footer } from "./Components/Footer/Footer";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  let defaultUrl = "http://localhost:5000";
  const [clubData, setClubData] = useState([]);
  const [userData, setUserData] = useState([]);
  const [user, setLoginUser] = useState({});

  useEffect(() => {
    setLoginUser(JSON.parse(localStorage.getItem("MyUser")));
  }, [])

  //Updating user
  const updateUser = (user) => {
    localStorage.setItem("MyUser", JSON.stringify(user));
    setLoginUser(user);
  }


  // fetch users
  useEffect(() => {
    let url = defaultUrl + "/users/";
    let unmounted = false;
    fetch(url).then((response) => {
      if (!unmounted) {
        if (response.ok) {
          response.json().then((data) => {

            setUserData(data);
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


  //  fetch clubs
  useEffect(() => {
    let url = defaultUrl + "/clubs/";
    let unmounted = false;
    fetch(url).then((response) => {
      if (!unmounted) {
        if (response.ok) {
          response.json().then((data) => {
            setClubData(data);
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
      <div className="main-container">
        <Router>
          {user && user._id ? <NavBar clubData={clubData} user={user} updateUser={updateUser}></NavBar> : ""}
          <Switch>
            <Route exact path="/">
              {user && user._id ? <Home user={user} updateUser={updateUser} /> : <Login updateUser={updateUser} />}
            </Route>

            <Route exact path="/LiveEvents">
              {user && user._id ? <LiveEvent user={user}></LiveEvent> : <Login updateUser={updateUser} />}
            </Route>

            <Route exact path="/Connect">
              {user && user._id ? <Messenger user={user}></Messenger> : <Login updateUser={updateUser} />}
            </Route>

            <Route exact path="/AddMembers">
              {user && user._id ? <AddMember></AddMember> : <Login updateUser={updateUser} />}
            </Route>

            <Route exact path="/Drishtant">
              {user && user._id ? <Drishtant></Drishtant> : <Login updateUser={updateUser} />}
            </Route>

            <Route exact path="/UpcomingEvents">
              {user && user._id ? <Event user={user}></Event> : <Login updateUser={updateUser} />}
            </Route>

            <Route exact path="/Roobaroo">
              {user && user._id ? <Roobaroo></Roobaroo> : <Login updateUser={updateUser} />}
            </Route>

            <Route exact path="/Feed">
              {user && user._id ? <div className="feed-container"> <Feed userData={userData} user={user} ></Feed></div> : <Login updateUser={updateUser} />}
            </Route>

            <Route exact path="/AddEvent" >
              {user && user._id ? <AddEvent user={user} /> : <Login updateUser={updateUser} />}
            </Route>

            <Route exact path="/Search">
              {user && user._id ? <Search user={user} /> : <Login updateUser={updateUser} />}
            </Route>

            <Route exact path="/AddMembers">
              {user && user._id ? <AddMember></AddMember> : <Login updateUser={updateUser} />}
            </Route>

            <Route exact path="/Aaroha">
              {user && user._id ? <Aaroha></Aaroha> : <Login updateUser={updateUser} />}
            </Route>

            <Route exact path="/Register">
              <Register></Register>
            </Route>

          </Switch>
        </Router>



      </div>

      <Footer />
    </div>

  );
}

export default App;
