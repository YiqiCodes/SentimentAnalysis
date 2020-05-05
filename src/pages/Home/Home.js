import React, { useState } from "react";
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
  const [username, setUsername] = useState(
    localStorage.getItem("Username") || null
  );
  const [userId, setUserId] = useState(localStorage.getItem("ID") || null);

  const handleChange = (event) => {
    setInputText(event.target.value);
  };

  let inputResult = sentiment.analyze(inputText);

  if (inputResult.score >= 4) inputResult.score = 4;
  if (inputResult.score <= -4) inputResult.score = -4;

  const score = inputResult.score.toString();

  function onSubmit(e) {
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
  }

  function logout() {
    localStorage.clear();
    setUsername(null);
    setUserId(null);
  }

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
