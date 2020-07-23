import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "rheostat/initialize";
import "rheostat/css/rheostat.css";
import Footer from "./components/Footer";
import Districts from "./components/Districts";
import Banner from "./components/Banner";
import Mavbar from "./components/Mavbar";
import HouseList from "./components/HouseList";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PostHouse from "./components/PostHouse";
import Login from "./components/Login";
import DetailPage from "./components/DetailPage";
import Signup from "./components/Signup";
import Gallery from "./components/Gallery";

import ProtectedRoute from "./utils/ProtectedRoute";
import { useSelector, useDispatch } from "react-redux";
import { fetchUser } from "./redux/action/userAction";
import Profile from "./components/Profile";
import Allgallery from "./components/Allgallery";
function App() {
  const user = useSelector((state) => state.user);
  console.log("userrrr", user);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser());
  }, []);
  return (
    // <div className="App">
    // <Mavbar />

    //   <Card />
    // </div>

    <Router>
      <Mavbar />

      <Switch>
        <Route exact path="/">
          <div className="App">
            {" "}
            <Banner />
            <Districts />
            <HouseList />
            <Gallery />
            <Footer />
          </div>
        </Route>
        <Route exact path="/users/:id">
          <Profile />
        </Route>
        <Route exact path="/houses/gallery">
          <Allgallery />
        </Route>
        <Route exact path="/houses/:houseId">
          <DetailPage />
        </Route>
        <Route exact path="/post">
          <PostHouse />
        </Route>
        <Route exact path="/signup">
          <Signup />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>

        <ProtectedRoute exact path="/profile">
          <Profile />
        </ProtectedRoute>
      </Switch>
    </Router>
  );
}

export default App;
