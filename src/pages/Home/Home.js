import React, { useState } from "react";
import Sentiment from "sentiment";

import { PageWrapper } from "../../App.styles";

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
      {inputResult.score === -4 ? (
        <>
          <PageWrapper
            style={{
              position: "absolute",
              minWidth: "100%",
              zIndex: -1,
              background: "linear-gradient(270deg, #2812ff, #2164ff)",
            }}
          ></PageWrapper>
        </>
      ) : null}
      {inputResult.score === -3 ? (
        <>
          <PageWrapper
            style={{
              position: "absolute",
              minWidth: "100%",
              zIndex: -1,
              background: "linear-gradient(270deg, #1265ff, #2195ff)",
            }}
          ></PageWrapper>
        </>
      ) : null}
      {inputResult.score === -2 ? (
        <>
          <PageWrapper
            style={{
              position: "absolute",
              minWidth: "100%",
              zIndex: -1,
              background: "linear-gradient(270deg, #4caef8, #21e4ff)",
            }}
          ></PageWrapper>
        </>
      ) : null}
      {inputResult.score === -1 ? (
        <>
          <PageWrapper
            style={{
              position: "absolute",
              minWidth: "100%",
              zIndex: -1,
              background: "linear-gradient(270deg, #4ce3f8, #ccfffc)",
            }}
          ></PageWrapper>
        </>
      ) : null}
      {inputResult.score === 1 ? (
        <>
          <PageWrapper
            style={{
              position: "absolute",
              minWidth: "100%",
              zIndex: -1,
              background: "linear-gradient(270deg, #9ce344, #4db640)",
            }}
          ></PageWrapper>
        </>
      ) : null}
      {inputResult.score === 2 ? (
        <>
          <PageWrapper
            style={{
              position: "absolute",
              minWidth: "100%",
              zIndex: -1,
              background: "linear-gradient(270deg, #e3d644, #b3dc46)",
            }}
          ></PageWrapper>
        </>
      ) : null}
      {inputResult.score === 3 ? (
        <>
          <PageWrapper
            style={{
              position: "absolute",
              minWidth: "100%",
              zIndex: -1,
              background: "linear-gradient(270deg, #ff8343, #f0b962)",
            }}
          ></PageWrapper>
        </>
      ) : null}
      {inputResult.score === 4 ? (
        <>
          <PageWrapper
            style={{
              position: "absolute",
              minWidth: "100%",
              zIndex: -1,
              background: "linear-gradient(270deg, #ff1d1d, #ff935b)",
            }}
          ></PageWrapper>
        </>
      ) : null}
    </>
  );
};

export default Home;
