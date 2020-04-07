import React, { useState } from "react";
import Sentiment from "sentiment";
import { Link } from "react-router-dom";

const sentiment = new Sentiment();

const Home = () => {
  const [inputText, setInputText] = useState("");

  const handleChange = (event) => {
    setInputText(event.target.value);
  };

  const inputResult = sentiment.analyze(inputText);
  console.log(inputResult);

  return (
    <>
      Say Something: <input value={inputText} onChange={handleChange} />
      <div>{inputResult.score}</div>
      <Link to="/sentiment-input-page2">go to page 2</Link>
    </>
  );
};

export default Home;
