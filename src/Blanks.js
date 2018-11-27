import React, { Component } from 'react'
import { decorate, computed, observable } from 'mobx'
import { observer } from 'mobx-react'

import game from './Game'

class Blanks extends Component {
  render() {
    return (
      <p>
        {game.randomWord.map(letter => {
          return (
            <>
              <span className="blank">
                {game.chosenLetters.includes(letter) ? letter : '_ '}
              </span>
            </>
          )
        })}
      </p>
    )
  }
}

export default observer(Blanks)
