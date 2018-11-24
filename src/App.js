import React, { Component } from 'react'
import './App.css'

import Alphabet from './Alphabet'
import Blanks from './Blanks'

import wordlist from './wordlist.json'

import SnowmanPics from './SnowmanPics'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      snowmanNumber: 0,
      randomWord: wordlist[Math.floor(Math.random() * wordlist.length)]
        .toUpperCase()
        .split(''),
      hidden: true,
      noDisplay: false,
      chosenLetters: [],
      correctLetters: []
    }
  }

  winStatement = () => {
    this.setState({
      hidden: false,
      noDisplay: true
    })
  }

  _click = event => {
    event.target.style.visibility = 'hidden'
    this.state.chosenLetters.push(event.target.value)
    this.setState({
      chosenLetters: this.state.chosenLetters
    })
    if (this.state.randomWord.includes(event.target.value)) {
      this.state.correctLetters.push(event.target.value)
      this.setState({
        snowmanNumber: this.state.snowmanNumber + 1,
        correctLetters: this.state.correctLetters
      })
    }
    if (this.state.correctLetters.length === this.state.randomWord.length) {
      this.winStatement()
    }
  }

  resetGame = event => {
    document.location.reload(true)
  }

  render() {
    return (
      <main>
        <SnowmanPics snowmanNumber={this.state.snowmanNumber} />
        <Blanks
          randomWord={this.state.randomWord}
          chosenLetters={this.state.chosenLetters}
        />
        <div className={this.state.noDisplay ? 'no-display' : 'buttons'}>
          <Alphabet
            _click={this._click}
            chosenLetters={this.chosenLetters}
            correctLetters={this.correctLetters}
          />
        </div>
        <div className={this.state.hidden ? 'hidden' : 'new-game-div'}>
          <p>You Win!</p>
          <button className="new-game" onClick={this.resetGame}>
            New Game
          </button>
        </div>
      </main>
    )
  }
}

export default App
