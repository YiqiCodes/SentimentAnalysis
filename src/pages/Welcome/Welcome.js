import React from "react";
import ReactPlayer from "react-player";
import myVideo from "../../assets/img/WelcomeVideo.mp4";
import Login from "../../components/Login";
import {
  WelcomeOutterContainer,
  WelcomeOutterDiv,
  WelcomeTitleContainer,
  WelcomeTitle,
  WelcomeTitleText,
  VideoWrapper,
  LoginBox,
} from "./Welcome.styles.js";

function Welcome(props) {
  return (
    <>
      <WelcomeOutterContainer>
        <WelcomeOutterDiv>
          <WelcomeTitleContainer>
            <WelcomeTitle>
              <WelcomeTitleText>Analyze My Sentiment</WelcomeTitleText>
            </WelcomeTitle>
            <LoginBox>
              <Login />
            </LoginBox>
          </WelcomeTitleContainer>
        </WelcomeOutterDiv>
        <VideoWrapper>
          <ReactPlayer
            className="react-player"
            url={myVideo}
            width="100%"
            height="100%"
            playing={true}
            loop={true}
            playsinline={true}
            muted={true}
          />
        </VideoWrapper>
      </WelcomeOutterContainer>
    </>
  );
}

export default Welcome;
