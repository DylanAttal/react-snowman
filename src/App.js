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
      buttonValue: true,
      snowmanNumber: 0
    }
  }
  chooseRandomWord = () => {
    let randomWord = wordlist[Math.floor(Math.random() * wordlist.length)]
    let randomWordArray = randomWord.split('')
    console.log(randomWord)
    console.log(randomWordArray)
    return randomWordArray
  }

  _click = event => {
    this.setState({
      buttonValue: false,
      snowmanNumber: this.state.snowmanNumber + 1
    })
    console.log(this.state.snowmanNumber)
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

    return <img src={snowmen[this.state.snowmanNumber]} />
  }

  isLetterChosen = letter => {
    // How will I tell if this letter is already chosen?
    return false
  }

  render() {
    return (
      <div>
        <div className="img-shell">{this.displayNextSnowman()}</div>
        <p>
          {this.chooseRandomWord().map(letter => {
            return <span>{letter} </span>
          })}
        </p>
        <div className="buttons">
          <div className="first-row">
            <button onClick={this._click} disabled={this.isLetterChosen('A')}>
              A
            </button>
            <button onClick={this._click} disabled={!this.state.buttonValue}>
              B
            </button>
            <button onClick={this._click} disabled={!this.state.buttonValue}>
              C
            </button>
            <button onClick={this._click} disabled={!this.state.buttonValue}>
              D
            </button>
            <button onClick={this._click} disabled={!this.state.buttonValue}>
              E
            </button>
            <button onClick={this._click} disabled={!this.state.buttonValue}>
              F
            </button>
            <button onClick={this._click} disabled={!this.state.buttonValue}>
              G
            </button>
            <button onClick={this._click} disabled={!this.state.buttonValue}>
              H
            </button>
          </div>
          <div className="second-row">
            <button>I</button>
            <button>J</button>
            <button>K</button>
            <button>L</button>
            <button>M</button>
            <button>N</button>
            <button>O</button>
            <button>P</button>
            <button>Q</button>
          </div>
          <div className="third-row">
            <button>R</button>
            <button>S</button>
            <button>T</button>
            <button>U</button>
            <button>V</button>
            <button>W</button>
            <button>X</button>
            <button>Y</button>
            <button>Z</button>
          </div>
        </div>
      </div>
    )
  }
}

export default App
