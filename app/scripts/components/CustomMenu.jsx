import React from 'react';
import PropTypes from 'prop-types';
import { CustomList } from './CustomList';

class CustomMenu extends React.Component {
  static get propTypes() {
    return {
      items: PropTypes.array,
      className: PropTypes.string
    }
  };

  renderList(items) {
    return (
      <ul>
        {
          items.map((item, key) =>
            <li key={key}>
              {item.title}
              {
                item.subitems
                ? this.renderList(item.subitems)
                : null
              }
            </li>
          )
        }
      </ul>
    )
  }

  render() {
    const { items, className } = this.props;

    return (
      <div className={className}>
        {
          this.renderList(items)
        }
      </div>
    );
  }
}

export { CustomMenu }
