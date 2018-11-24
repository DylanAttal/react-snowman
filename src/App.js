import React, { Component } from 'react'
import './App.css'
import wordlist from './wordlist.json'

import step_0 from './step_0.png'
import step_1 from './step_1.png'
import step_2 from './step_2.png'
import step_3 from './step_3.png'
import step_4 from './step_4.png'
import step_5 from './step_5.png'
import step_6 from './step_6.png'
import step_7 from './step_7.png'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      lettersChosen: [],
      snowmanNumber: 0,
      randomWord: wordlist[Math.floor(Math.random() * wordlist.length)]
        .toUpperCase()
        .split(''),
      hidden: true,
      noDisplay: false
    }
  }

  chosenLetters = []
  correctLetters = []

  winStatement = () => {
    this.setState({
      hidden: false,
      noDisplay: true
    })
  }

  _click = event => {
    this.chosenLetters.push(event.target.value)
    event.target.style.visibility = 'hidden'
    if (this.state.randomWord.includes(event.target.value)) {
      this.setState({
        snowmanNumber: this.state.snowmanNumber + 1
      })
      this.correctLetters.push(event.target.value)
    }
    console.log(this.chosenLetters)
    if (this.correctLetters.length === this.state.randomWord.length) {
      this.winStatement()
    }
  }

  displayNextSnowman = () => {
    const snowmen = [
      step_0,
      step_1,
      step_2,
      step_3,
      step_4,
      step_5,
      step_6,
      step_7
    ]

    return <img src={snowmen[this.state.snowmanNumber]} alt="Snowman" />
  }

  // isLetterChosen = letter => {
  //   if (this.chosenLetters.includes(letter)) {
  //     return true
  //   }
  //   return false
  // }

  render() {
    return (
      <div>
        <div className="img-shell">{this.displayNextSnowman()}</div>
        <p>
          {this.state.randomWord.map(letter => {
            return (
              <>
                <span>
                  {this.chosenLetters.includes(letter) ? letter : '_ '}
                </span>
              </>
            )
          })}
        </p>
        <div className={this.state.noDisplay ? 'no-display' : 'buttons'}>
          <div className="first-row">
            <button value="A" onClick={this._click}>
              A
            </button>
            <button value="B" onClick={this._click}>
              B
            </button>
            <button value="C" onClick={this._click}>
              C
            </button>
            <button value="D" onClick={this._click}>
              D
            </button>
            <button value="E" onClick={this._click}>
              E
            </button>
            <button value="F" onClick={this._click}>
              F
            </button>
            <button value="G" onClick={this._click}>
              G
            </button>
            <button value="H" onClick={this._click}>
              H
            </button>
          </div>
          <div className="second-row">
            <button value="I" onClick={this._click}>
              I
            </button>
            <button value="J" onClick={this._click}>
              J
            </button>
            <button value="K" onClick={this._click}>
              K
            </button>
            <button value="L" onClick={this._click}>
              L
            </button>
            <button value="M" onClick={this._click}>
              M
            </button>
            <button value="N" onClick={this._click}>
              N
            </button>
            <button value="O" onClick={this._click}>
              O
            </button>
            <button value="P" onClick={this._click}>
              P
            </button>
            <button value="Q" onClick={this._click}>
              Q
            </button>
          </div>
          <div className="third-row">
            <button value="R" onClick={this._click}>
              R
            </button>
            <button value="S" onClick={this._click}>
              S
            </button>
            <button value="T" onClick={this._click}>
              T
            </button>
            <button value="U" onClick={this._click}>
              U
            </button>
            <button value="V" onClick={this._click}>
              V
            </button>
            <button value="W" onClick={this._click}>
              W
            </button>
            <button value="X" onClick={this._click}>
              X
            </button>
            <button value="Y" onClick={this._click}>
              Y
            </button>
            <button value="Z" onClick={this._click}>
              Z
            </button>
          </div>
        </div>
        <div className={this.state.hidden ? 'hidden' : 'new-game'}>
          <p>You Win!</p>
          <button>New Game</button>
        </div>
      </div>
    )
  }
}

export default App
