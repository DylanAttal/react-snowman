import React, { Component } from 'react'
import { decorate, computed, observable } from 'mobx'
import { observer } from 'mobx-react'

import game from './Game'
import Letter from './Letter'

class Alphabet extends Component {
  alphabet = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z'
  ]
  render() {
    return (
      <ul className="letters">
        {this.alphabet.map(letter => {
          return (
            <li>
              <Letter letter={letter} />
            </li>
          )
        })}
      </ul>
    )
  }
}

export default observer(Alphabet)
