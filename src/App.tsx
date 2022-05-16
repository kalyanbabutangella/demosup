import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Loginpage from './components/Loginpage';
import Mainpage from './components/Mainpage';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={Loginpage} />
        <Route exact path="/" component={Mainpage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
