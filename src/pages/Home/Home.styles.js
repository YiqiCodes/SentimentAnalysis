import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  padding: 32px;
  width: 100%;
  height: 80%;
  /* margin-top: 127px; */
`;

export const InputWrapper = styled.div`
  display: flex;
  width: 50%;
  height: 50%;
  max-height: 200px;
  @media screen and (max-width: 376px) {
    width: 75%;
  }
`;

export const TimelineWrapper = styled.div`
  display: flex;
  justify-content: center;
  overflow-y: scroll;
  margin-top: 1rem;
  width: 50%;
  @media screen and (max-width: 376px) {
    width: 75%;
  }
  .ant-timeline {
    margin: 12px 0 0;
  }
`;
