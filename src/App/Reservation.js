import React from "react"
import './Reservation.css'

const Reservation = ({date, name, time, guests, id}) => {
  return (
    <div className="reservation">
      <h2>{name}</h2>
      <h3>{date}</h3>
      <h3>{time}</h3>
      <h3>Number of guests: {guests}</h3>
      <button className="cancel">Cancel</button>
    </div>
  )
}
// onClick={() => cancelReservation(id)}

export default Reservation