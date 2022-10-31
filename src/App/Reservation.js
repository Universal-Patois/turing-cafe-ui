import React from "react"
import './Reservation.css'

const Reservation = ({date, name, time, number, id, cancelReservation}) => {
  return (
    <div className="reservation">
      <h2>{name}</h2>
      <h3>{date}</h3>
      <h3>{time}</h3>
      <p>Number of guests:{number}</p>
      <button className="cancel" onClick={() => cancelReservation(id)}>Cancel</button>
    </div>
  )
}

export default Reservation