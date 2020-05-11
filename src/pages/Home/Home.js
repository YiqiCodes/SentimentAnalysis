import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Sentiment from "sentiment";

// Styles
import { SentimentInput } from "./Home.styles.js";
import Emoji from "../../components/Emoji.js";
import Background from "../../components/Background.js";

const sentiment = new Sentiment();

const Home = () => {
  const [inputText, setInputText] = useState("");
  const [username, setUsername] = useState(null);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const username = localStorage.getItem("Username");
    const userId = localStorage.getItem("ID");
    setUsername(username);
    setUserId(userId);
  }, []);

  const handleChange = (event) => {
    setInputText(event.target.value);
  };

  let inputResult = sentiment.analyze(inputText);

  if (inputResult.score >= 4) inputResult.score = 4;
  if (inputResult.score <= -4) inputResult.score = -4;

  const score = inputResult.score.toString();

  const onSubmit = (e) => {
    e.preventDefault();
    const sentiment_score = inputResult.score;

    Promise.all([
      axios.put(`http://localhost:3000/users/update`, {
        sentiment_score,
        username,
        userId,
      }),
    ])
      .then(() => {
        console.log("done");
      })
      .catch((error) => console.log(error));
  };

  const logout = () => {
    localStorage.clear();
    setUsername(null);
    setUserId(null);
  };

  return (
    <>
      <h2>Analyze My Sentiment: </h2>
      <SentimentInput value={inputText} onChange={handleChange} />
      <Emoji score={score} />
      <Background score={score} />
      <form onSubmit={onSubmit}>
        <button>Submit</button>
      </form>
      <Link to="/">
        <button onClick={() => logout()}>Logout</button>
      </Link>
    </>
  );
};

export default Home;
