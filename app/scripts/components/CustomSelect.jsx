import React from 'react';
import PropTypes from 'prop-types';

class CustomSelect extends React.Component {
  static get propTypes() {
    return {
      items: PropTypes.array
    }
  };

  render () {
    const { items } = this.props;

    return (
      <select>
      {
        items.map((item, key) =>
          <option key={key} value={item.value}>{item.text}</option>
        )
      }
      </select>
    );
  }
}

CustomSelect.PropTypes = {
  items: PropTypes.object
}

export { CustomSelect }
