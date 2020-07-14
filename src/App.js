import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Districts from "./components/Districts";
import Banner from "./components/Banner";
import Mavbar from "./components/Mavbar";
import HouseList from "./components/HouseList";
import { Container, Row, Col } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PostHouse from "./components/PostHouse";
import Login from "./components/Login";
function App() {
  return (
    // <div className="App">
    // <Mavbar />
    //   <Banner />
    //   <Districts />
    //   <Card />
    // </div>
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Mavbar />
            <HouseList />
          </Route>
          <Route exact path="/post">
            <PostHouse />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
