import React, { useState, useEffect } from "react";
import axios from "axios";

// Components
import Input from "../Input";
import { notification } from "antd";
import { LoginButton } from "./Login.styles.js";

// Hooks
import useUsers from "../../hooks/api/Users";
import { useHistory } from "react-router-dom";

const Login = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [userExists, setUserExists] = useState(true);
  const [userExistsRegister, setUserExistsRegister] = useState(false);
  const history = useHistory();
  const { users, getUsers } = useUsers();

  const getLocalStorageUser = async () => {
    const user = await localStorage.getItem("username");
    if (user) history.push("/home");
  };

  useEffect(() => {
    getLocalStorageUser();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (loggedIn) history.push("/home");
    // eslint-disable-next-line
  }, [loggedIn]);

  useEffect(() => {
    if (users.error) notification.error("Error", users.error);
  }, [users.error]);

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
    if (username) {
      getUsers(username).then((user) => {
        if (!user) {
          setUserExists(false);
          return;
        }

        localStorage.setItem("Username", user.username);
        localStorage.setItem("ID", user.id);
        setLoggedIn(true);
      });
    } else {
      notification.error({
        message: "Error",
        description: "Please enter a username",
      });
    }
  };

  const handleOnChangeUsername = (e) => {
    setUsername(e.target.value);
  };

  return (
    <>
      <Input value={username} handleOnChange={handleOnChangeUsername} />
      <LoginButton onClick={() => login()}>Login</LoginButton>
      <LoginButton onClick={() => register()}>Register</LoginButton>
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
