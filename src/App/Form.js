import React, { Component } from "react";
import './Form.css'

class Form extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      date: '',
      time: '',
      guests: ''
    }
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value})
  }

  submitReservation = (event) => {
    event.preventDefault()
    const newReservation = {
      id: Date.now(),
      ...this.state
    }
    this.props.addReservation(newReservation)
    this.clearInputs()
  }

  clearInputs = () => {
    this.setState({name: '', date: '', time: '', guests: ''})
  }

  render() {
    return (
      <form>
        <input 
          className="input"
          type='text'
          placeholder="Name"
          name='name'
          value={this.state.name}
          onChange={event => this.handleChange(event)}
        />

        <input 
          className="input"
          type='text'
          placeholder='Date(mm/dd)'
          name='date'
          value={this.state.date}
          onChange={event => this.handleChange(event)}
        />

        <input 
          className="input"
          type='text'
          placeholder="Time"
          name='time'
          value={this.state.time}
          onChange={event => this.handleChange(event)}
        />

        <input
          className="input" 
          type='number'
          placeholder="Number of Guests"
          name='guests'
          value={this.state.guests}
          onChange={event => this.handleChange(event)}
        />

        <button className='form-button' onClick={event => this.submitReservation(event)}>Make Reservation</button>

      </form>
    )
  }
}

export default Form;