import { useState } from "react";
import axios from "axios";

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

  const createUser = () => {};

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
