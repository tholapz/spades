import React, { Component } from 'react';
import { noop } from 'lodash';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './App.css';
import AppNav from './AppNav';
import Home from './Home';
import Floorplan from './Floorplan';
import BookingList from "./BookingList";
import { ROUTES } from './constants';

const { HOME, FLOORPLAN, BOOKING } = ROUTES;

let removeHashChange = noop;

class App extends Component {
  state = {
    route: HOME
  };

  componentWillMount() {
    this.setState({ route: window.location.hash.substr(1) });
  }

  componentDidMount() {
    removeHashChange = window.addEventListener('hashchange', () => {
      this.setState({
        route: (window.location.hash.substr(1))
      });
    });
  }

  componentWillUnmount() {
    removeHashChange();
  }

  render() {
    return (
      <div className="App">
        <AppNav/>
        <div className="container">
          { this.state.route.startsWith(HOME) && <Home/> }
          { this.state.route.startsWith(FLOORPLAN) && <Floorplan id="0"/> }
          { this.state.route.startsWith(BOOKING) && <BookingList /> }
        </div>
      </div>
    );
  }
}

export default App;
