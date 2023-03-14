import React from "react";
import { Link } from "react-router-dom";
import { statusChange } from "../../utils/api";

function ListReservations({ data, show = false, load, setError }) {
 
  function cancelReservation(reservationID) {
    const abortController = new AbortController();

    if (window.confirm("Do you want to cancel this reservation?")) {
      statusChange(reservationID, "cancelled", abortController.signal)
        .then(() => load())
        .catch(setError);
    }
  }
  const list = data?.filter((reservation) => reservation.status !== "cancelled")
    ?.filter((reservation) => reservation.status !== "finished" || show === true)
    ?.map((reservation) => (

      <div className="card desk-card" key={reservation.reservation_id}>
        <div className="card-body">
          <h5 className="card-title">Reservation: {reservation.first_name}</h5>
          <p>Last Name: {reservation.last_name}</p>
          <p>Mobile Number: {reservation.mobile_number}</p>
          <p>Date: {reservation.reservation_date}</p>
          <p>Time: {reservation.reservation_time}</p>
          <p>People: {reservation.people}</p>
          <p data-reservation-id-status={reservation.reservation_id}>
            {reservation.status}
          </p>
          <div className="reservation-form-btn">
            {reservation.status === "booked" && (
              <Link
                to={`/reservations/${reservation.reservation_id}/seat`}
                className="btn bottom-button"
              >
                Seat
              </Link>
            )}
            {reservation.status === "booked" && (
              <Link
                to={`/reservations/${reservation.reservation_id}/edit`}
                className="btn bottom-button"
              >
                Edit
              </Link>
            )}
            <button
              className="btn btn-danger bottom-button-cancel"
              data-reservation-id-cancel={reservation.reservation_id}
              onClick={() => cancelReservation(reservation.reservation_id)}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    ));

  return <div className="list-reservation">{list}</div>;
}

export default ListReservations;
