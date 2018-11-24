import React, { Component } from 'react'
import wordlist from './wordlist.json'

class Blanks extends Component {
  constructor(props) {
    super(props)
  }

  chooseRandomWord = () => {
    let randomWord = wordlist[Math.floor(Math.random() * wordlist.length)]
    let randomWordArray = randomWord.split('')
    console.log(randomWord)
    console.log(randomWordArray)
  }

  render() {
    return (
      <div>
        <p>{this.randomWord}</p>
      </div>
    )
  }
}

export default Blanks
