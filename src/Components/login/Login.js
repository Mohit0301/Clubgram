import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import { useRef } from 'react'
import './login.css'
export const Login = (props) => {
    const history = useHistory();
    const email_id = useRef(null);
    const password = useRef(null);

    //Checking if login credentials are right
    const submitHandler = (e) => {
        e.preventDefault();
        if (email_id.current && password.current) {
            const user = {

                email_id: email_id.current,
                password: password.current,
            }

            try {
                axios.post("http://localhost:5000/users/login", user).then(res => {
                    alert(res.data.message)
                    props.updateUser(res.data.user)
                    history.push("/"); console.log(history)
                })

            } catch (err) {
                console.log(err);
            }
        }

        else {
            alert("Invalid input!");
        }
    }
    
    return (
        <div class="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto">
            <div class="card card0 border-0">
                <div class="row d-flex">
                    <div class="col-lg-6">
                        <div class="card1 pb-5">
                            <div class="row px-3 justify-content-center mt-4 mb-5 border-line"> <img src="https://i.imgur.com/uNGdWHi.png" alt="" className="image" /> </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="card2 card border-0 px-4 py-5">
                            <div class="row px-3"> <label class="mb-1">
                                <h6 class="mb-0 text-sm">Email Address</h6>
                            </label> <input class="mb-4" type="text" name="email" onChange={(e) => { email_id.current = e.target.value }} placeholder="Enter a valid email address" /> </div>
                            <div class="row px-3"> <label class="mb-1">
                                <h6 class="mb-0 text-sm">Password</h6>
                            </label> <input type="password" name="password" onChange={(e) => { password.current = e.target.value }} placeholder="Enter password" /> </div>
                            <br />
                            <div class="row mb-3 px-3"> <button type="submit" class="btn btn-blue text-center" onClick={submitHandler}>Login</button> </div>
                            <div class="row mb-4 px-3"> <small class="font-weight-bold">Don't have an account?
                                <Link to="/Register" class="text-danger ">Register</Link>
                            </small> </div>
                        </div>
                    </div>
                </div>
                <div class="bg-blue py-4">
                    <div class="row px-3"> <small class="ml-4 ml-sm-5 mb-2">Copyright &copy; 2021. All rights reserved.</small>
                        <div class="social-contact ml-4 ml-sm-auto"> <span class="fa fa-facebook mr-4 text-sm"></span> <span class="fa fa-google-plus mr-4 text-sm"></span> <span class="fa fa-linkedin mr-4 text-sm"></span> <span class="fa fa-twitter mr-4 mr-sm-5 text-sm"></span> </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
