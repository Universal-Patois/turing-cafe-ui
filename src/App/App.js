import React, { Component } from 'react';
import './App.css';
import Display from './Display';
import Form from './Form';

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

  addReservation = (newReservation) => {
    this.setState({reservations: [...this.state.reservations, newReservation]})
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <Form addReservation={this.addReservation} />
        </div>
        <div className='resy-container'>
          <Display reservations={this.state.reservations}/>
        </div>
      </div>
    )
  }
}

export default App;
