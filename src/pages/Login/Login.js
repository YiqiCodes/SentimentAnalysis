import React, { useState, useEffect } from "react";
import axios from "axios";

import { useHistory } from "react-router-dom";
import Input from "../../components/Input/Input";

const Login = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [userExists, setUserExists] = useState(true);
  const [userExistsRegister, setUserExistsRegister] = useState(false);
  const history = useHistory();

  const getUser = async () => {
    const user = await localStorage.getItem("username");
    if (user) history.push("/home");
  };

  useEffect(() => {
    getUser();
  }, []);

  useEffect(() => {
    if (loggedIn) history.push("/home");
  }, [loggedIn]);

  function register() {
    console.log("register");
    console.log("username", username);
    Promise.all([
      axios.put(`http://localhost:3000/users/register`, { username }),
    ])
      .then((response) => {
        if (response[0].headers["content-length"] === "20")
          console.log("No input but still in DB");
        else setLoggedIn(true);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function login() {
    Promise.all([axios.get(`http://localhost:3000/users/${username}`)])
      .then((response) => {
        if (response[0].data.length === 0) {
          setUserExists(false);
        } else {
          const userLogin = response[0].data;
          localStorage.setItem("Username", userLogin.name);
          localStorage.setItem("ID", userLogin.id);
          setLoggedIn(true);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const handleOnChangeUsername = (e) => {
    setUsername(e.target.value);
  };

  return (
    <>
      <Input value={username} handleOnChange={handleOnChangeUsername} />
      <button onClick={() => register()}>Register</button>
      <button onClick={() => login()}>Login</button>
      {!userExists ? (
        <p style={{ color: "red" }}>username does not exist please register</p>
      ) : null}
    </>
  );
};

export default Login;
