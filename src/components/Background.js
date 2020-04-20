import React from "react";
import PropTypes from "prop-types";

// Styles
import { BackgroundAnimation } from "./Background.styles";

export const scoreToBackground = {
  "4": "linear-gradient(60deg, #fbbcbc, #fb1f1f)",
  "3": "linear-gradient(270deg, #ff7200, #f9cb7f)",
  "2": "linear-gradient(270deg, #1bb928, #dcfbd2)",
  "1": "linear-gradient(270deg, #84b9b5, #d6f6f9)",
  "0": "linear-gradient(270deg, #000000, #ffffff)",
  "-1": "linear-gradient(225deg, #000000, #84b9b5, #d6f6f9)",
  "-2": " linear-gradient(45deg, #dcfbd2, #6fb075, #000000)",
  "-3": "linear-gradient(270deg, #000000, #fd9a4a, #000000)",
  "-4": "linear-gradient(270deg, #000000, #630101, #000000)",
};

const Background = ({ score }) => {
  return <BackgroundAnimation background={scoreToBackground[score]} />;
};

Background.propTypes = {
  score: PropTypes.string.isRequired,
};

export default Background;
