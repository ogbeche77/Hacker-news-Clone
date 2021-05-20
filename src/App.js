import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import { Container } from "semantic-ui-react";
import "./App.css";
import MenuBar from "./components/MenuBar";
import Home from "./pages/Home";
import New from "./pages/New";
import Past from "./pages/Past";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <>
      <Router>
        <Container>
          <MenuBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/new" component={New} />
            <Route exact path="/past" component={Past} />
            <Route component={NotFound} />
          </Switch>
        </Container>
      </Router>
    </>
  );
};

export default App;
