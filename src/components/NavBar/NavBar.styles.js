import styled from "styled-components";
import { Button } from "antd";

export const Wrapper = styled.div`
  width: 100%;
  height: 20%;
  background: #4267b2;
  display: flex;
  top: 0;
  align-items: center;
  justify-content: space-between;
  padding: 40px;
  box-shadow: -2px 2px 4px rgba(0, 0, 0, 0.3);
  z-index: 1000;
`;

export const HeaderText = styled.div`
  color: white;
  font-size: 30px;
  font-weight: 800;
`;

export const LogoutButton = styled(Button)`
  /* padding: 8px 16px; */
  border-radius: 6px;
  font-size: 14px;
`;

export const LogoutButtonText = styled.span``;
