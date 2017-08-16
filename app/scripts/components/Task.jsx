import React from 'react';
import PropTypes from 'prop-types';

class Task extends React.Component {
  static get propTypes() {
    return {
      name: PropTypes.string.isRequired,
      done: PropTypes.bool
    }
  };

  static get defaultProps() {
    return {
      done: false
    }
  }

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      updated: false,
      name: `Task name is ${props.name}`
    };
  }

  handleClick(event) {
    this.setState({ updated: !this.state.updated });
  };

  render () {
    const { done } = this.props;

    return (
      <li className={done? 'done' : null} onClick={this.handleClick}>
        {this.state.name}
        {this.state.updated ? <small>done</small> : null}
      </li>
    );
  }
}

export { Task }
