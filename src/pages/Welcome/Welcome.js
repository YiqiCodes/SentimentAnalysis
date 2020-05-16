import React from "react";
import ReactPlayer from "react-player";
import myVideo from "../../assets/img/WelcomeVideo.mp4";
import Login from "./../Login/Login";
import { LoginBox } from "./Welcome.styles.js";

function Welcome(props) {
  return (
    <>
      <LoginBox>
        <Login />
      </LoginBox>
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
    </>
  );
}

export default Welcome;
