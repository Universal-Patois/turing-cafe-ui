import React from "react"
import './Reservation.css'

const Reservation = ({date, name, time, guests, id, cancelReservation}) => {
  return (
    <div className="reservation">
      <h2>{name}</h2>
      <h3>{date}</h3>
      <h3>{time}</h3>
      <p>Number of guests:{guests}</p>
      <button className="cancel" onClick={() => cancelReservation(id)}>Cancel</button>
    </div>
  )
}

export default Reservation