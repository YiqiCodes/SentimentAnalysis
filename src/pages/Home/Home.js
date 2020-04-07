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
      {inputResult.score === 1 ? (
        <>
          <PageWrapper
            style={{
              position: "absolute",
              minWidth: "100%",
              zIndex: -1,
              backgroundColor: "red",
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
              backgroundColor: "blue",
            }}
          ></PageWrapper>
        </>
      ) : null}
    </>
  );
};

export default Home;
