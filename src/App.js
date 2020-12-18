import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Dashboard from './pages/Dashboard/Dashboard';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Logout from './pages/Logout/Logout';
import SignUp from './pages/SignUp/SignUp';

import Footer from './components/Footer/Footer';
import Logo from './components/Logo/Logo';
import Menu from './components/Menu/Menu';

function App() {
  return (
    <Router>
      <Menu />
      <Logo />
      <div className="mainContainer">
        <Switch>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/Login">
            <Login />
          </Route>
          <Route path="/Logout">
            <Logout />
          </Route>
          <Route path="/SignUp">
            <SignUp />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
