import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const initialState = {
    username: "",
    password: ""
  }

  const [credentials, setCredentials] = useState(initialState);
  const { push } = useHistory();

  const handleChange = e => {
    e.preventDefault();
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
      .post(`/api/login`, credentials)
      .then(res => {
        console.log({ res })
        localStorage.setItem("token", JSON.stringify(res.data.payload))
        push("/bubble-page")
      })
      .catch(err => {
        console.log({ err })
      })
  }

  return (
    <div className="loginDiv">
      <h1>LOG IN</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username
          <input 
            name="username"
            type="text"
            value={credentials.username}
            onChange={handleChange}
          />
        </label>
        <label>
          Password
          <input 
            name="password"
            type="password"
            value={credentials.password}
            onChange={handleChange}
          />
        </label>
        <button>Log In</button>
      </form>
    </div>
  );
};

export default Login;
