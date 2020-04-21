import React, { useState } from "react";
import Sentiment from "sentiment";

// Styles
import { SentimentInput } from "./Home.styles.js";
import Emoji from "../../components/Emoji.js";
import Background from "../../components/Background.js";

const sentiment = new Sentiment();

const Home = () => {
  const [inputText, setInputText] = useState("");

  const handleChange = (event) => {
    setInputText(event.target.value);
  };

  let inputResult = sentiment.analyze(inputText);

  if (inputResult.score >= 4) inputResult.score = 4;
  if (inputResult.score <= -4) inputResult.score = -4;

  const score = inputResult.score.toString();

  return (
    <>
      <h2>Analyze My Sentiment: </h2>
      <SentimentInput value={inputText} onChange={handleChange} />
      <Emoji score={score} />
      <Background score={score} />
    </>
  );
};

export default Home;
