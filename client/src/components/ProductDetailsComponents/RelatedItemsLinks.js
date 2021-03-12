import React from 'react';
import {
  Link,
  withRouter
} from 'react-router-dom';

// eslint-disable-next-line import/no-unresolved
// eslint-disable-next-line import/no-absolute-path
class RelatedItemsLinks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div id="related-items">
        <span className="large">Related Items</span>
        {this.props.related.length > 0 && (
        <ul>
          {this.props.related.map((id) => (
            <li key={id} className="related-item-link">
              <Link to={`/${id}`} onClick={() => this.props.updateData(id)}>{id}</Link>
            </li>
          ))}
        </ul>
        )}
      </div>
    );
  }
}

export default withRouter(RelatedItemsLinks);
