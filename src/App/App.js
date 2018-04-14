import React, { Component } from 'react';
import { HashRouter as Router, Route } from "react-router-dom";

import AppNav from './AppNav';
import './App.css';

class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <AppNav/>
          <Route exact path="/" component={() => { return <div/>}} />
        </div>
      </Router>
    );
  }
}

export default App;
