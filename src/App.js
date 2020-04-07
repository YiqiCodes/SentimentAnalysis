import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Components
import { PageWrapper } from "./App.styles";

// Pages
import Home from "./pages/Home/Home";
import SentimentInputPage2 from "./pages/SentimentInputPage2/SentimentInputPage2";

const App = () => {
  return (
    <Router>
      <Switch>
        <PageWrapper>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/sentiment-input-page2">
            <SentimentInputPage2 />
          </Route>
        </PageWrapper>
      </Switch>
    </Router>
  );
};

export default App;
