import { useState } from "react";
import { get, post, put } from "../../libs/api";

// import login from "../../components/Login/Login";

const useUsers = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState("");

  const getUserByID = (username) => {
    setError("");
    setLoading(true);
    return get(`/users/${username}`)
      .then((response) => {
        if (response.data) {
          setData(response.data);
          return response.data;
        }
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  };

  const createUser = (username) => {
    setError("");
    setLoading(true);
    return post(`/users/register`, {
      username,
    })
      .then((response) => {
        if (response.data) {
          setData(response.data);
          return response.data;
        }
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  };

  const updateUser = ({ username, userId }) =>
    put(`/user`, {
      username,
      userId,
    })
      .then((response) => {
        console.log("done", response.data);
        return response.data;
      })
      .catch((error) => console.log(error));

  const users = {
    loading,
    data,
    error,
  };

  return {
    users,
    getUserByID,
    createUser,
    updateUser,
  };
};

export default useUsers;
