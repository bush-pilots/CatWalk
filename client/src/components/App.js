import React from 'react';
import axios from 'axios';
import ApiCheck from './ApiCheck.js';
import {
    HashRouter as Router,
    Switch,
    Route,
    Link,
  } from "react-router-dom";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  //
  render() {
    return (
      <div>
        TSVT FTW! 🌴 🏰 🧵 🌩️
        <div />
        <Router>
          <Route path='/:id' component={ApiCheck} />
          <Route exact path='/' component={ApiCheck} />
        </Router>

      </div>
    );
  }
}

export default App;
