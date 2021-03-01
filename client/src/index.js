import React from 'react';
import ReactDOM from 'react-dom';
import {
  HashRouter as Router,
  Route,
} from 'react-router-dom';
import App from './components/App';

ReactDOM.render(
  <div>
    <Router>
      <Route path="/:id" component={App} />
      <Route exact path="/" component={App} />
    </Router>

  </div>,
  document.getElementById('app'),
);
