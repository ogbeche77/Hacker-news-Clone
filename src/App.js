import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import { Container } from "semantic-ui-react";
import "./App.css";
import MenuBar from "./components/MenuBar";
import DisplayArticles from "./components/DisplayArticles";
import Home from "./pages/Home";
import New from "./pages/New";
import AskQuestions from "./pages/AskQuestions";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <div className="app-container">
      <Router>
        <Container>
          <MenuBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/:type" component={DisplayArticles} />
            <Route path="/new" component={New} />
            <Route path="/ask" component={AskQuestions} />
            <Route component={NotFound} />
          </Switch>
        </Container>
      </Router>
    </div>
  );
};

export default App;
