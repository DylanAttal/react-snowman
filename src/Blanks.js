import React, { Component } from 'react'

class Blanks extends Component {
  render() {
    return (
      <p>
        {this.props.randomWord.map(letter => {
          return (
            <>
              <span className="blank">
                {this.props.chosenLetters.includes(letter) ? letter : '_ '}
              </span>
            </>
          )
        })}
      </p>
    )
  }
}

export default Blanks
