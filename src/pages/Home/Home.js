import React, { useState, useEffect } from "react";

import Sentiment from "sentiment";

// Components
import { Input, Button, notification, Timeline } from "antd";
import NavBar from "../../components/NavBar";
import Emoji from "../../components/Emoji";

// Styles
import { PageContainer, InputWrapper, TimelineWrapper } from "./Home.styles.js";

// Hooks
import useScores from "../../hooks/api/Scores";

const sentiment = new Sentiment();

const Home = () => {
  const [text, setText] = useState("");
  const [username, setUsername] = useState(null);
  const [userId, setUserId] = useState(null);
  const { scores, getScores, createScore } = useScores();
  const { error } = scores;

  useEffect(() => {
    const username = localStorage.getItem("Username");
    const userId = localStorage.getItem("ID");
    setUsername(username);
    setUserId(userId);
    getScores(userId);
  }, []);

  useEffect(() => {
    console.log(error);
    // if (error) notification.error({ type: "error", message: error });
  }, [error]);

  const handleChange = (event) => {
    setText(event.target.value);
  };

  let inputResult = sentiment.analyze(text);

  if (inputResult.score >= 4) inputResult.score = 4;
  if (inputResult.score <= -4) inputResult.score = -4;

  const score = inputResult.score.toString();

  const onSaveScore = async () => {
    await createScore({
      userId,
      score: inputResult.score,
      text,
    });

    await getScores(userId);
  };

  const scoreTimeline = scores.data.map((score, index) => (
    <Timeline.Item
      key={index}
    >{`${score.text} - ${score.sentiment_score}`}</Timeline.Item>
  ));

  return (
    <PageContainer>
      <NavBar />
      <h2>{`Welcome, ${username}`}</h2>
      <InputWrapper>
        <Input.TextArea
          value={text}
          onChange={handleChange}
          onPressEnter={onSaveScore}
        />
      </InputWrapper>
      <Emoji score={score} />
      <Button onClick={onSaveScore}>Save</Button>

      <TimelineWrapper>
        <Timeline style={{ paddingTop: "1rem" }}>{scoreTimeline}</Timeline>
      </TimelineWrapper>
    </PageContainer>
  );
};

export default Home;
