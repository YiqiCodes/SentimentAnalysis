import React, { useState, useEffect } from "react";
import axios from "axios";

import { useHistory } from "react-router-dom";
import Input from "../../components/Input/Input";

// const baseUrl = process.env.REACT_APP_BASE_URL;
// console.log("base", baseUrl);

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

  const register = () => {
    Promise.all([
      axios.put(`https://analyzemysentiment.herokuapp.com/users/register`, {
        username,
      }),
    ])
      .then((response) => {
        if (response[0].headers["content-length"] === "20") {
          setUserExistsRegister(true);
        } else {
          login();
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const login = () => {
    Promise.all([
      axios.get(`https://analyzemysentiment.herokuapp.com/users/${username}`),
    ])
      .then((response) => {
        if (response[0].data.length === 0) {
          setUserExists(false);
        } else {
          const userLogin = response[0].data;
          localStorage.setItem("Username", userLogin.username);
          localStorage.setItem("ID", userLogin.id);
          setLoggedIn(true);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleOnChangeUsername = (e) => {
    setUsername(e.target.value);
  };

  return (
    <>
      <Input value={username} handleOnChange={handleOnChangeUsername} />
      <button onClick={() => register()}>Register</button>
      <button onClick={() => login()}>Login</button>
      {!userExists ? (
        <p style={{ color: "red" }}>Username does not Exist Please Register</p>
      ) : null}
      {userExistsRegister ? (
        <p style={{ color: "red" }}>
          User Already Exists or Invalid Name - Try Again
        </p>
      ) : null}
    </>
  );
};

export default Login;
