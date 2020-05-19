import React from "react";
import PropTypes from "prop-types";

const scoreMap = {
  "4": "😎",
  "3": "😁",
  "2": "😀",
  "1": "🙂",
  "0": "😐",
  "-1": "😞",
  "-2": "😠",
  "-3": "😡",
  "-4": "🤬",
};

const Emoji = ({ score }) => {
  return (
    <span style={{ fontSize: "5rem", paddingTop: "1rem" }} role="img">
      {scoreMap[score]}
    </span>
  );
};

Emoji.propTypes = {
  score: PropTypes.string.isRequired,
};

export default Emoji;
