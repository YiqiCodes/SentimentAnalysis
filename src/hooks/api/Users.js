import { useState } from "react";
import axios from "axios";

// import login from "../../components/Login/Login";

const useUsers = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState("");

  const getUsers = (username) => {
    setLoading(true);
    return axios
      .get(`https://analyzemysentiment.herokuapp.com/users/${username}`)
      .then((response) => {
        if (response.data) {
          setData(response.data);
          return response.data;
        }
        if (!response.data) return null;
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  };

  const createUser = (username) => {
    setLoading(true);
    return axios
      .put(`https://analyzemysentiment.herokuapp.com/users/register`, {
        username,
      })
      .then((response) => {
        if (response.data) {
          setData(response.data);
          return response.data;
        }
        if (!response.data) return null;
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  };

  const updateUser = () => {};

  const users = {
    loading,
    data,
    error,
  };

  return {
    users,
    getUsers,
    createUser,
    updateUser,
  };
};

export default useUsers;
