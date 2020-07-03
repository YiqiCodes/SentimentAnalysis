import { useState } from "react";
import { get, post } from "../../libs/api";

const useScores = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  const getScores = (userId) => {
    setLoading(true);
    return get(`/users/${userId}/scores`)
      .then((response) => {
        setLoading(false);
        setData(response.data);
        return response.data;
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  };

  const createScore = (body) => {
    const { userId, text, score } = body;

    setLoading(true);
    return post(`/users/${userId}/scores`, {
      userId,
      text,
      score,
    })
      .then((response) => {
        setLoading(false);
        setData([response.data]);
        return response.data;
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  };

  const scores = {
    loading,
    data,
    error,
  };

  return {
    scores,
    getScores,
    createScore,
  };
};

export default useScores;
