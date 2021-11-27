import React, { useRef } from 'react'
import axios from 'axios';
import { useHistory } from 'react-router-dom'
import './register.css'
export const Register = () => {
    const history = useHistory();
    const name = useRef();
    const roll_number = useRef();
    const year = useRef();
    const branch = useRef();
    const email_id = useRef();
    const password = useRef();
    const re_password = useRef();

    //Adding new user
    const submitHandler = (e) => {
        e.preventDefault();

        {
            const newUser = {
                user_name: name.current,
                roll_number: roll_number.current,
                branch: branch.current,
                year: year.current,
                email_id: email_id.current,
                password: password.current,
            }
            console.log(newUser);
            try {
                axios.post("http://localhost:5000/users/register", newUser).then(res => { alert(res.data.message); });
                history.push('/');

            } catch (err) {
                console.log(err);
            }
        }
    }
    return (

        <div class="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto">
            <div class="card card0 border-0">
                <div class="row d-flex">
                    <div class="col-lg-6">
                        <div class="card1 pb-5">

                            <div class="row px-3 justify-content-center mt-4 mb-5 border-line"> <img src="https://i.imgur.com/uNGdWHi.png" class="image" alt=""/> </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="card2 card border-0 px-4 py-5">

                            <div class="row px-3"> <label class="mb-1">
                                <h6 class="mb-0 text-sm">Full Name</h6>
                            </label> <input class="mb-4" type="text" name="name" ref={name} onChange={(e) => { name.current = e.target.value; }} placeholder="Enter your full name" /> </div>
                            <br />
                            <div class="row px-3"> <label class="mb-1">
                                <h6 class="mb-0 text-sm">Roll number</h6>
                            </label> <input class="mb-4" type="text" name="roll_numer" ref={roll_number} onChange={(e) => { roll_number.current = e.target.value; }} placeholder="Enter your roll number" /> </div>
                            <br />
                            <div class="row px-3"> <label class="mb-1">
                                <h6 class="mb-0 text-sm">Branch</h6>
                            </label> <input class="mb-4" type="text" name="branch" ref={branch} onChange={(e) => { branch.current = e.target.value; }} placeholder="Enter your branch" /> </div>
                            <br />
                            <div className="col-lg-auto">
                                <label htmlFor="attribute" className="form-label">
                                    Choose year
                                </label>
                                <select
                                    className="form-control "
                                    // className="form-select"
                                    name="attribute"
                                    id="attribute"
                                    defaultValue="Year"
                                    required
                                    ref={year}
                                    onChange={(e) => {
                                        year.current = e.target.value;
                                    }}

                                >
                                    <option value="Year" disabled hidden>
                                        Choose year
                                    </option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                            </div>
                            <br />
                            <div class="row px-3"> <label class="mb-1">
                                <h6 class="mb-0 text-sm">Email Address</h6>
                            </label> <input class="mb-4" type="text" name="email" ref={email_id} onChange={(e) => { email_id.current = e.target.value; }} placeholder="Enter a valid email address" /> </div>

                            <div class="row px-3"> <label class="mb-1">

                                <h6 class="mb-0 text-sm">Password</h6>
                            </label> <input type="password" name="password" ref={password} onChange={(e) => { password.current = e.target.value; }} placeholder="Enter password" /> </div>
                            <br />
                            <div class="row px-3"> <label class="mb-1">
                                <h6 class="mb-0 text-sm">Confirm Password</h6>
                            </label> <input type="password" name="re_password" ref={re_password} onChange={(e) => { re_password.current = e.target.value; }} placeholder="Re-enter password" /> </div>
                            <br />

                            <div class="row mb-3 px-3"> <button type="submit" onClick={submitHandler} class="btn btn-blue text-center">Register</button> </div>
                        </div>
                    </div>
                </div>
                <div class="bg-blue py-4">
                    <div class="row px-3"> <small class="ml-4 ml-sm-5 mb-2">Copyright &copy; 2019. All rights reserved.</small>
                        <div class="social-contact ml-4 ml-sm-auto"> <span class="fa fa-facebook mr-4 text-sm"></span> <span class="fa fa-google-plus mr-4 text-sm"></span> <span class="fa fa-linkedin mr-4 text-sm"></span> <span class="fa fa-twitter mr-4 mr-sm-5 text-sm"></span> </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
