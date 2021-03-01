/* eslint-disable max-len */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import {
  Link,
  withRouter,
} from 'react-router-dom';
import ApiCheckDisplay from './ApiCheckDisplay';

// eslint-disable-next-line import/no-unresolved
// eslint-disable-next-line import/no-absolute-path
const api = require('/helpers/api');

class ApiCheck extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.updateData.bind(this);
  }

  componentDidMount() {
    this.updateData(this.props.match.params.id);
  }

  updateData(id) {
    if (id !== '') {
      api.getProductData(id, (err, results) => {
        this.setState({ productData: results.data });
      });
      api.getStyles(id, (err, results) => {
        this.setState({ styles: results.data });
      });
      api.getRelated(id, (err, results) => {
        this.setState({ related: results.data });
      });
    }
  }

  render() {
    return (
      <div>
        <h1>API TEST:</h1>
        <span>
          Params: **
          {this.props.match.params.id}
          {' '}
          **
          {' '}
        </span>
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
        <ApiCheckDisplay id={this.props.match.params.id} productData={this.state.productData} styles={this.state.styles} related={this.state.related} />
      </div>
    );
  }
}
export default withRouter(ApiCheck);
