import React from 'react';
import PropTypes from 'prop-types';

class CustomButton extends React.Component {
  static get propTypes() {
    return {
      disabled: PropTypes.bool,
      className: PropTypes.string,
      text: PropTypes.string
    }
  };

  static get defaultProps() {
    return {
      text: 'submit'
    }
  }

  render () {
    const { text, type, className, disabled } = this.props;

    return (
      <div>
        <button className={className} type={type} disabled={disabled}>
          {text}
        </button>
      </div>
    );
  }
}

export { CustomButton }
