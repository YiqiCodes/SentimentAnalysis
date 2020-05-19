import React, { useState, useEffect } from "react";
import axios from "axios";
import Sentiment from "sentiment";

// Components
import { Input, Button } from "antd";
import NavBar from "../../components/NavBar";
import Emoji from "../../components/Emoji";

// Styles
import { InputWrapper } from "./Home.styles.js";

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
      axios.put(`https://analyzemysentiment.herokuapp.com/users/update`, {
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

  return (
    <>
      <NavBar />
      <h2>{`Welcome, ${username}`}</h2>
      <InputWrapper>
        <Input.TextArea
          value={inputText}
          onChange={handleChange}
          onPressEnter={onSubmit}
        />
      </InputWrapper>
      <Emoji score={score} />
      <form onSubmit={onSubmit}>
        <Button>Save</Button>
      </form>
    </>
  );
};

export default Home;
