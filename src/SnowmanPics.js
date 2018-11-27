import React, { Component } from 'react'
import { decorate, computed, observable } from 'mobx'
import { observer } from 'mobx-react'

import game from './Game'

import step_0 from './step_0.png'
import step_1 from './step_1.png'
import step_2 from './step_2.png'
import step_3 from './step_3.png'
import step_4 from './step_4.png'
import step_5 from './step_5.png'
import step_6 from './step_6.png'
import step_7 from './step_7.png'

class SnowmanPics extends Component {
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

    return <img src={snowmen[game.snowmanNumber]} alt="Snowman" />
  }
  render() {
    return <div>{this.displayNextSnowman()}</div>
  }
}

export default observer(SnowmanPics)
