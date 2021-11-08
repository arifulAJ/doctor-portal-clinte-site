import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import './App.css';
import Authprovider from "./Context/Authprovider";
import Appointment from "./pages/Appointment/Appointment";
import Dashboard from "./pages/Dashbord/Dashbord/Dashboard";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import PrivetRoute from "./pages/Login/PrivetRoute/PrivetRoute";
import Resister from "./pages/Login/Resister/Resister";

function App() {
  return (
    <div className="App">
      <Authprovider>
      <Router>
        <Switch>
          <Route exact path='/'>
           <Home/>
          </Route>
          <Route path='/home'>
           <Home/>
          </Route>
          <PrivetRoute path="/appointment">
            <Appointment/>
          </PrivetRoute>
          <PrivetRoute path="/dashboard">
            <Dashboard/>
          </PrivetRoute>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/resister">
            <Resister/>
          </Route>
        </Switch>
      </Router>
      </Authprovider>
      
    </div>
  );
}

export default App;
