import React from 'react';
import PropTypes from 'prop-types';

class CustomList extends React.Component {
  static get propTypes() {
    return {
      items: PropTypes.array
    }
  };

  render () {
    const { items } = this.props;

    return (
      <ul>
        {
          items.map((item, key) =>
            <li key={key}>{item.title}</li>
          )
        }
      </ul>
    );
  }
}

export { CustomList }
