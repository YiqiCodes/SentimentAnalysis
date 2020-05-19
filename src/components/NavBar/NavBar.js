import React from "react";

import { useHistory } from "react-router-dom";
import {
  Wrapper,
  HeaderText,
  LogoutButton,
  LogoutButtonText,
} from "./NavBar.styles";

const NavBar = () => {
  const history = useHistory();
  const logout = () => {
    localStorage.clear();
    history.push("/");
  };

  return (
    <Wrapper>
      <HeaderText>Analyze My Sentiment</HeaderText>
      <LogoutButton onClick={logout} type="default">
        <LogoutButtonText>Logout</LogoutButtonText>
      </LogoutButton>
    </Wrapper>
  );
};

export default NavBar;
