import React from "react";
import "./styles.css";
import { CssBaseline, Container } from "@material-ui/core";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import BottomNavbar from "./components/layout/BottomNavbar";

export default function App() {
  return (
    <BrowserRouter>
      <CssBaseline />
      <BottomNavbar />
      <Container>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </Container>
    </BrowserRouter>
  );
}
