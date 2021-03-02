import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import {
  HashRouter as Router,
  Route,
  Redirect
} from 'react-router-dom';
import App from './components/App';

ReactDOM.render(
  <div>
    <Router>
      <Route path="/:id" component={App} />
      <Route exact path="/" component={App}>
        <Redirect to="/18201" />
      </Route>
    </Router>

  </div>,
  document.getElementById('app')
);
