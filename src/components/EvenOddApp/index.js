// Write your code here
import './index.css'

import {Component} from 'react'

class EvenOddApp extends Component {
  state = {count: 0}

  getRandomNumber = () => Math.floor(Math.random() * 101)

  toIncreaseNumber = () => {
    const randomNumber = this.getRandomNumber()

    this.setState(prevState => ({count: prevState.count + randomNumber}))
  }

  render() {
    const {count} = this.state
    const displayText = count % 2 === 0 ? 'Even' : 'Odd'

    return (
      <div className="app-container">
        <div className="container">
          <h1 className="countingNumber">Count {count}</h1>
          <p className="number-type">Count is {displayText}</p>
          <button
            type="button"
            className="button"
            onClick={this.toIncreaseNumber}
          >
            Increment
          </button>
          <p className="number-range-text">
            *Increase By Random Number Between 0 to 100
          </p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
