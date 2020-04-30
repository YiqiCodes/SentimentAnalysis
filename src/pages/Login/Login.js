import React, { useState } from "react";
import axios from "axios";

import { Link } from "react-router-dom";
import { Form, FormControl } from "react-bootstrap";

const Login = () => {
  const [loggedIn, setLoggedIn] = useState({ name: null, id: null });
  const [userExists, setUserExists] = useState(true);
  const [userExistsRegister, setUserExistsRegister] = useState(false);
  const [username, setUsername] = useState(
    localStorage.getItem("username") || null
  );

  function handleChangeName(event) {
    setUsername(event.target.value);
  }

  function register() {
    console.log("register");
    console.log("username", username);
    Promise.all([
      axios.put(`http://localhost:3000/users/register`, { username }),
    ])
      .then((response) => {
        if (response[0].status === 200) {
          setUserExistsRegister(true);
        } else {
          // localStorage.setItem("newUser", true);
          login();
          console.log("else");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function login() {
    Promise.all([axios.get(`http://localhost:3000/users/${username}`)])
      .then((response) => {
        if (response[0].data.length === 0) {
          console.log("response", response);
          setUserExists(false);
        } else {
          console.log("response2", response);
          setUserExists(true);
          const userz = response[0].data[0];
          localStorage.setItem("username", userz.name);
          localStorage.setItem("id", userz.id);
          setLoggedIn({ name: userz.name, id: userz.id });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <>
      <Form inline>
        <FormControl
          type="text"
          placeholder="Register"
          onChange={handleChangeName}
        />
        <Link to="/home">
          <button onClick={() => register()}>Register</button>
        </Link>
      </Form>
      <Form inline>
        <FormControl
          type="text"
          placeholder="Login"
          onChange={handleChangeName}
        />
        <button onClick={() => login()}>Login</button>
      </Form>
    </>
  );
};

export default Login;
