import React from 'react';
import Reservation from './Reservation';
import './Display.css'

const Display = ({reservations, cancelReservation}) => {

  const cafeReservations = reservations.map(reservation => {
    return (
      <Reservation
        date={reservation.date}
        name={reservation.name}
        time={reservation.time}
        number={reservation.number}
        id={reservation.id}
        key={reservation.id}
        cancelReservation={cancelReservation}
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