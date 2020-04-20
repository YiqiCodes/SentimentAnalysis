import styled, { keyframes } from "styled-components";

// Keyframes animation
const animationName = keyframes`{
  0%{background-position:0% 50%}
  50%{background-position:100% 50%}
  100%{background-position:0% 50%}
}`;

export const BackgroundAnimation = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  position: absolute;
  min-height: 100vh;
  min-width: 100%;
  z-index: -1;
  background: ${(props) =>
    props.background
      ? props.background
      : "linear-gradient(270deg, #000000, #ffffff)"};
  color: white;
  background-size: 400% 400%;
  animation: ${animationName} 10s ease infinite;
`;
