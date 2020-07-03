import React, { useState, useEffect } from "react";

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
  const history = useHistory();
  const { users, getUserByID, createUser } = useUsers();

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
    console.log("users.error", users.error);
    if (users.error) notification.error("Error", users.error);
  }, [users.error]);

  const register = () => {
    if (username) {
      createUser(username).then((user) => {
        if (user) login();
        else {
          return notification.error({
            message: "Error",
            description: "Please register with a unique username",
          });
        }
      });
    } else {
      return notification.error({
        message: "Error",
        description: "Please enter a unique username",
      });
    }
  };

  const login = () => {
    if (username) {
      getUserByID(username).then((user) => {
        if (!user) {
          return notification.error({
            message: "Error",
            description: "User does not exist, please register",
          });
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
      <LoginButton style={{ background: "cadetblue" }} onClick={() => login()}>
        Login
      </LoginButton>
      <LoginButton
        style={{ background: "darkslategray" }}
        onClick={() => register()}
      >
        Register
      </LoginButton>
    </>
  );
};

export default Login;
