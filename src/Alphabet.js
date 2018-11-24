import React, { Component } from 'react'
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
              <Letter
                _click={this.props._click}
                letter={letter}
                chosenLetters={this.props.chosenLetters}
                correctLetters={this.props.correctLetters}
              />
            </li>
          )
        })}
      </ul>
    )
  }
}

export default Alphabet
