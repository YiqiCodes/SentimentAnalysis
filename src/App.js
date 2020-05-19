import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Components
import { PageWrapper } from "./App.styles";

// Pages
import Home from "./pages/Home";
import Welcome from "./pages/Welcome";

import "antd/dist/antd.css";

const App = () => {
  return (
    <Router>
      <Switch>
        <PageWrapper>
          <Route exact path="/">
            <Welcome />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
        </PageWrapper>
      </Switch>
    </Router>
  );
};

export default App;
