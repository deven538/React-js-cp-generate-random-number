// Write your code here
import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {count: 0}

  generateRandomNumber = () => {
    const randomNumber = Math.floor(Math.random() * 100)

    this.setState({count: randomNumber})
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1 className="heading">Random Number</h1>
        <p className="description">
          Generate a random number in the range of 0 to 100
        </p>
        <div>
          <button
            className="button"
            type="button"
            onClick={this.generateRandomNumber}
          >
            Generate
          </button>
        </div>
        <p className="count">{count}</p>
      </div>
    )
  }
}

export default RandomNumberGenerator
