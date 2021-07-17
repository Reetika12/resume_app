import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize.min.js'
import Skills from "./Component/Skills"
import Home from "./Component/Home"
import Experience from "./Component/Experience"
import Education from "./Component/Education"
import Profile from "./Component/Profile"
import Navbar from "./Component/Navbar"
// import './App.css';

function App() {
  return (
    <Router className="App">
        <Navbar/>
        <Route exact path='/' component={Home}/>
        <Switch>
          <Route exact path="/skills" component={Skills}/>
          <Route exact path="/educations" component={Education}/>
          <Route exact path="/experience" component={Experience}/>
          <Route exact path="/profile" component={Profile}/>
        </Switch>
    </Router>
  );
}

export default App;
