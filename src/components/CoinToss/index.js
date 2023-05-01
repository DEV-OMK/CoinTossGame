import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {tossResult: 0}

  heads = 0

  tails = 0

  onToss = () => {
    const updateTossResult = Math.floor(Math.random() * 2)
    if (updateTossResult === 0) {
      this.heads += 1
    } else {
      this.tails += 1
    }
    this.setState({tossResult: updateTossResult})
  }

  render() {
    const {tossResult} = this.state
    let imageUrl
    if (tossResult === 0) {
      imageUrl = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
    } else {
      imageUrl = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'
    }

    return (
      <div className="bg-container">
        <div className="card">
          <h1 className="title">Coin Toss Game</h1>
          <p className="caption">Heads (or) Tails</p>
          <img src={imageUrl} className="image" alt="toss result" />
          <button type="button" className="toss-button" onClick={this.onToss}>
            Toss Coin
          </button>
          <div className="count-container">
            <p className="count">Total: {this.heads + this.tails}</p>
            <p className="count">Heads: {this.heads}</p>
            <p className="count">Tails: {this.tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
