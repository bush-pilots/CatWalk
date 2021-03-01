import React from 'react';
import axios from 'axios';
import config from '/config.js';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  withRouter,
} from "react-router-dom";
import ApiCheckDisplay from './ApiCheckDisplay.js';

const api = require('/helpers/api.js')

class ApiCheck extends React.Component {
  constructor(props) {
      super(props);
      this.state = {

      }
      this.updateData.bind(this);
  }

  componentDidMount() {
    this.updateData(this.props.match.params.id)
  }

  updateData (id) {
    if(id !== '') {
      api.getProductData(id, (err, results) => {
        this.setState({productData: results.data})
      })
      api.getStyles(id, (err, results) => {
        this.setState({styles: results.data})
      })
      api.getStyles(id, (err, results) => {
        this.setState({related: results.data})
      })
    }
  }

  render () {
      return (
          <div>
              <h1>API TEST:</h1>
              <span>Params: ** {this.props.match.params.id} ** </span>
              <ul>
                  <li>
                      <Link to="/18445" onClick={() => this.updateData(18445)}>18445</Link>
                  </li>
                  <li>
                      <Link to="/18079" onClick={() => this.updateData(18079)}>18079</Link>
                  </li>
                  <li>
                      <Link to="/18080" onClick={() => this.updateData(18080)}>18080</Link>
                  </li>
                  <li>
                      <Link to="/18201" onClick={() => this.updateData(18201)}>18201</Link>
                  </li>
                  <li>
                      <Link to="/18078" onClick={() => this.updateData(18078)}>18078</Link>
                  </li>
              </ul>
              <ApiCheckDisplay id={this.props.match.params.id} productData={this.state.productData} styles={this.state.styles} related={this.state.related}/>
          </div>
      );
  }
}
export default withRouter(ApiCheck);