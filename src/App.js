import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Components
import { PageWrapper } from "./App.styles";

// Pages
import Home from "./pages/Home/Home";

const App = () => {
  return (
    <Router>
      <Switch>
        <PageWrapper
          style={{
            display: "flex",
            flexDirection: "column",
            minHeight: "100%",
          }}
        >
          <Route exact path="/">
            <Home />
          </Route>
        </PageWrapper>
      </Switch>
    </Router>
  );
};

export default App;
