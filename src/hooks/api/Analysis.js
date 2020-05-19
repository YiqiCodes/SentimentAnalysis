import { useState } from "react";
import axios from "axios";

const useAnalysis = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState("");

  const createAnalysis = (userID, text, score) => {
    setLoading(true);
    axios
      .post(`create-analysis`, {
        userID,
        text,
        score,
      })
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

  const analysis = {
    loading,
    data,
    error,
  };

  return {
    analysis,
    createAnalysis,
  };
};

export default useAnalysis;
