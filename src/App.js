import React, { Component } from 'react'
import { decorate, computed, observable } from 'mobx'
import { observer } from 'mobx-react'
import './App.css'

import wordlist from './wordlist.json'

import Alphabet from './Alphabet'
import Blanks from './Blanks'
import SnowmanPics from './SnowmanPics'
import game from './Game'

class App extends Component {
  resetGame = event => {
    document.location.reload(true)
  }

  render() {
    return (
      <main>
        <SnowmanPics snowmanNumber={game.snowmanNumber} />
        <Blanks
          randomWord={game.randomWord}
          chosenLetters={game.chosenLetters}
        />
        <div className={game.noDisplay ? 'no-display' : 'buttons'}>
          <Alphabet
            onClick={game._click}
            chosenLetters={game.chosenLetters}
            correctLetters={game.correctLetters}
          />
        </div>
        <div className={game.hidden ? 'hidden' : 'new-game-div'}>
          <p>You Win!</p>
          <button className="new-game" onClick={this.resetGame}>
            New Game
          </button>
        </div>
      </main>
    )
  }
}

export default observer(App)
