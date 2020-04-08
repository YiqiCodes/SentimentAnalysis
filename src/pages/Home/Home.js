import React, { useState } from "react";
import Sentiment from "sentiment";
import {
  PageWrapperMinusFour,
  PageWrapperMinusThree,
  PageWrapperMinusTwo,
  PageWrapperMinusOne,
  PageWrapperZero,
  PageWrapperOne,
  PageWrapperTwo,
  PageWrapperThree,
  PageWrapperFour,
} from "../../App.styles";

const sentiment = new Sentiment();

const Home = () => {
  const [inputText, setInputText] = useState("");

  const handleChange = (event) => {
    setInputText(event.target.value);
  };

  const inputResult = sentiment.analyze(inputText);

  return (
    <>
      <h1>Analyze Your Sentiment: </h1>
      <input
        style={{
          minWidth: "20rem",
          minHeight: "3rem",
          border: "none",
          background: "transparent",
          // borderBottom: "2px solid white",
          textAlign: "center",
          fontSize: "large",
          outline: "none",
        }}
        value={inputText}
        onChange={handleChange}
      />
      {inputResult.score <= -4 ? (
        <>
          <span style={{ fontSize: "5rem", paddingLeft: "1rem" }}>
            {" "}
            &#129324;
          </span>
          <PageWrapperMinusFour className="test" />
        </>
      ) : null}
      {inputResult.score === -3 ? (
        <>
          <span style={{ fontSize: "5rem", paddingLeft: "1rem" }}>
            {" "}
            &#128545;
          </span>
          <PageWrapperMinusThree />
        </>
      ) : null}
      {inputResult.score === -2 ? (
        <>
          <span style={{ fontSize: "5rem", paddingLeft: "1rem" }}>
            {" "}
            &#128544;
          </span>
          <PageWrapperMinusTwo />
        </>
      ) : null}
      {inputResult.score === -1 ? (
        <>
          <span style={{ fontSize: "5rem", paddingLeft: "1rem" }}>
            {" "}
            &#128542;
          </span>
          <PageWrapperMinusOne />
        </>
      ) : null}
      {inputResult.score === 0 ? (
        <>
          <PageWrapperZero />
        </>
      ) : null}
      {inputResult.score === 1 ? (
        <>
          <span style={{ fontSize: "5rem", paddingLeft: "1rem" }}>
            {" "}
            &#128578;
          </span>
          <PageWrapperOne />
        </>
      ) : null}
      {inputResult.score === 2 ? (
        <>
          <span style={{ fontSize: "5rem", paddingLeft: "1rem" }}>
            {" "}
            &#128512;
          </span>
          <PageWrapperTwo />
        </>
      ) : null}
      {inputResult.score === 3 ? (
        <>
          <span style={{ fontSize: "5rem", paddingLeft: "1rem" }}>
            {" "}
            &#128513;
          </span>
          <PageWrapperThree />
        </>
      ) : null}
      {inputResult.score >= 4 ? (
        <>
          <span style={{ fontSize: "5rem", paddingLeft: "1rem" }}>
            {" "}
            &#128526;
          </span>
          <PageWrapperFour />
        </>
      ) : null}
    </>
  );
};

export default Home;

// -4 fuck
// -3 abhor
// -2 ache
// -1 admit
// 0
// 1 jesus
// 2 ally
// 3 xoxo
// 4 xoxoxo
