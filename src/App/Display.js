import React from 'react';
import Reservation from './Reservation';
import './Display.css'

const Display = ({reservations}) => {

  const cafeReservations = reservations.map(reservation => {
    return (
      <Reservation
        date={reservation.date}
        name={reservation.name}
        time={reservation.time}
        guests={reservation.number}
        key={reservation.id}
      />
    )
  })

  return (
    <div className='display-reservations'>
      {cafeReservations}
    </div>
  )
}

export default Display;