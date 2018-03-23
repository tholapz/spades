import React, { Component } from 'react';
import { noop } from 'lodash';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './App.css';
import AppNav from './AppNav';
import Home from './Home';
import Floorplan from './Floorplan';
import routes from './routes';

const { HOME, FLOORPLAN } = routes;

let removeHashChange = noop;

class App extends Component {
  state = {
    route: HOME,

  };

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
        { this.state.route === HOME && <Home/> }
        { this.state.route === FLOORPLAN && <Floorplan/> }
      </div>
    );
  }
}

export default App;
