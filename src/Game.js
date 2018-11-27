import { decorate, computed, observable } from 'mobx'
import { observer } from 'mobx-react'

import wordlist from './wordlist.json'

class Game {
  constructor() {
    this.snowmanNumber = 0
    this.randomWord = wordlist[Math.floor(Math.random() * wordlist.length)]
      .toUpperCase()
      .split('')
    this.hidden = true
    this.noDisplay = false
    this.chosenLetters = []
    this.correctLetters = []
  }

  winStatement = () => {
    this.hidden = false
    this.noDisplay = true
  }

  _click = event => {
    event.target.style.visibility = 'hidden'
    this.chosenLetters.push(event.target.value)
    if (this.randomWord.includes(event.target.value)) {
      this.correctLetters.push(event.target.value)
      this.snowmanNumber = this.snowmanNumber + 1
    }

    if (this.correctLetters.length === this.randomWord.length) {
      this.winStatement()
    }
  }
}

decorate(Game, {
  snowmanNumber: observable,
  randomWord: observable,
  hidden: observable,
  noDisplay: observable,
  chosenLetters: observable,
  correctLetters: observable
})

export default new Game()
