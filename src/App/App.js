import React, { Component } from 'react';
import './App.css';
import Display from './Display';

class App extends Component {
  constructor() {
    super()
    this.state = {
      reservations: []
    }
  }
  componentDidMount = () => {
    this.fetchReservations()
  }

  fetchReservations = () => {
    fetch('http://localhost:3001/api/v1/reservations')
    .then(response => response.json())
    .then(data => this.setState({reservations: data}))
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>

        </div>
        <div className='resy-container'>
          <Display reservations={this.state.reservations}/>
        </div>
      </div>
    )
  }
}

export default App;
