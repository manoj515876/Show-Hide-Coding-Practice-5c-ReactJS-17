import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {
    onFirst: false,
    onLast: false,
  }

  onFistButton = () => {
    this.setState(preState => ({onFirst: !preState.onFirst}))
  }

  onLastButton = () => {
    this.setState(preState => ({onLast: !preState.onLast}))
  }

  render() {
    const {onFirst} = this.state

    const {onLast} = this.state

    return (
      <div className="container">
        <div className="card-container">
          <h1 className="heading">Show/Hide</h1>
          <div className="cards">
            <div className="first">
              <button
                className="button"
                type="button"
                onClick={this.onFistButton}
              >
                Show/Hide Firstname
              </button>
              {onFirst ? (
                <div className="firstName-card card">
                  <h1 className="card-heading">Manoj</h1>
                </div>
              ) : null}
            </div>
            <div className="first">
              <button
                className="button"
                type="button"
                onClick={this.onLastButton}
              >
                Show/Hide Lastname
              </button>
              {onLast ? (
                <div className="lastName-card card">
                  <h1 className="card-heading">Mantha</h1>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
