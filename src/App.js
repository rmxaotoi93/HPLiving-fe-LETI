import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Districts from "./components/Districts";
import Banner from "./components/Banner";
import Mavbar from "./components/Mavbar";
function App() {
  return (
    <div className="App">
      <Mavbar />
      <Banner />
      <Districts />
      <Card />
    </div>
  );
}

export default App;
