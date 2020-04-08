import styled, { keyframes } from "styled-components";

//keyframes animation
const animationName = keyframes`{
  0%{background-position:0% 50%}
  50%{background-position:100% 50%}
  100%{background-position:0% 50%}
}`;

//pagewrappers for all sentiment scores
export const PageWrapper = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  z-index: 1;
  background: black;
  color: white;
  background-size: 400% 400%;
  animation: ${animationName} 5s ease infinite;
`;

export const PageWrapperMinusFour = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  position: absolute;
  min-height: 100vh;
  min-width: 100%;
  z-index: -1;
  background: linear-gradient(270deg, #000000, #630101, #000000);
  color: white;
  background-size: 400% 400%;
  animation: ${animationName} 5s ease infinite;
`;

export const PageWrapperMinusThree = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  position: absolute;
  min-height: 100vh;
  min-width: 100%;
  z-index: -1;
  background: linear-gradient(270deg, #000000, #fd9a4a, #000000);
  color: white;
  background-size: 400% 400%;
  animation: ${animationName} 5s ease infinite;
`;

export const PageWrapperMinusTwo = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  position: absolute;
  min-height: 100vh;
  min-width: 100%;
  z-index: -1;
  background: linear-gradient(45deg, #dcfbd2, #6fb075, #000000);
  color: white;
  background-size: 400% 400%;
  animation: ${animationName} 5s ease infinite;
`;

export const PageWrapperMinusOne = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  position: absolute;
  min-height: 100vh;
  min-width: 100%;
  z-index: -1;
  background: linear-gradient(225deg, #000000, #84b9b5, #d6f6f9);
  color: white;
  background-size: 400% 400%;
  animation: ${animationName} 5s ease infinite;
`;

export const PageWrapperZero = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  position: absolute;
  min-height: 100vh;
  min-width: 100%;
  z-index: -1;
  background: linear-gradient(270deg, #000000, #ffffff);
  color: white;
  background-size: 400% 400%;
  animation: ${animationName} 10s ease infinite;
`;

export const PageWrapperOne = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  position: absolute;
  min-height: 100vh;
  min-width: 100%;
  z-index: -1;
  background: linear-gradient(270deg, #84b9b5, #d6f6f9);
  color: white;
  background-size: 400% 400%;
  animation: ${animationName} 5s ease infinite;
`;

export const PageWrapperTwo = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  position: absolute;
  min-height: 100vh;
  min-width: 100%;
  z-index: -1;
  background: linear-gradient(270deg, #1bb928, #dcfbd2);
  color: white;
  background-size: 400% 400%;
  animation: ${animationName} 5s ease infinite;
`;

export const PageWrapperThree = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  position: absolute;
  min-height: 100vh;
  min-width: 100%;
  z-index: -1;
  background: linear-gradient(270deg, #ff7200, #f9cb7f);
  color: white;
  background-size: 400% 400%;
  animation: ${animationName} 5s ease infinite;
`;

export const PageWrapperFour = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  position: absolute;
  min-height: 100vh;
  min-width: 100%;
  z-index: -1;
  background: linear-gradient(60deg, #fbbcbc, #fb1f1f);
  color: white;
  background-size: 400% 400%;
  animation: ${animationName} 5s ease infinite;
`;
