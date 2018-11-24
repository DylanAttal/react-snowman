import React, { Component } from 'react'

class Letter extends Component {
  render() {
    return (
      <button value={this.props.letter} onClick={this.props._click}>
        {this.props.letter}
      </button>
    )
  }
}

export default Letter
