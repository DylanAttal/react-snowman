import React, { Component } from 'react'
import { decorate, computed, observable } from 'mobx'
import { observer } from 'mobx-react'

import game from './Game'

class Letter extends Component {
  render() {
    return (
      <button value={this.props.letter} onClick={game._click}>
        {this.props.letter}
      </button>
    )
  }
}

export default observer(Letter)
