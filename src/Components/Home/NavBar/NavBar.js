import React from 'react'
import { Link } from 'react-router-dom';
import { Profile } from './Profile';
import './NavBar.css'
export const NavBar = (props) => {

  return (
    <div>

      <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid">
          <Link class="navbar-brand" to="/"><div className="color">Clubgram</div></Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/"><div className="color">Home</div></Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/LiveEvents"><div className="color">Live events</div></Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/UpcomingEvents"><div className="color">Upcoming events</div></Link>
              </li>
              <li class="nav-item">
                {props.user.privileges ? <Link class="nav-link" to="/AddEvent"><div className="color">Add events</div></Link> : ""}
              </li>
              <li class="nav-item">
                {props.user.privileges ? <Link class="nav-link" to="/AddMembers"><div className="color">Add members</div></Link> : ""}
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/Feed"><div className="color">Posts</div></Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/Connect"><div className="color">Connect with peers</div></Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/Search"><div className="color">Search</div></Link>
              </li>
              <li class="nav-item dropdown">

                <Link class="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Clubs
                </Link>

                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  {props.clubData.map((clubData, index) => {
                    let route = "/" + clubData.clubName;
                    return (
                      <li><Link class="dropdown-item" to={route}>{clubData.clubName}</Link></li>
                    )
                  })}
                </ul>

              </li>

            </ul>

            {/* Profile picture and user name */}
            <Profile user={props.user} updateUser={props.updateUser}></Profile>
            <div className="name">{props.user.user_name}&nbsp;</div>
            <div className="nav-item">
              <button className="btn btn-danger" onClick={() => { props.updateUser({}) }}>Logout</button>
            </div>
          </div>
        </div>
      </nav>
    </div>

  )
}
