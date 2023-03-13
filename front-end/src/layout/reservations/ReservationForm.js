function ReservationForm({
    submitHandler,
    setReservationForm,
    reservationForm,
    formatPhoneNumber,
    history,
  }) {
    return (
      <form onSubmit={submitHandler} className="reservation-form">
        <div className="form-group">
          <label htmlFor="reservationFirstNameInput" className="form-label">First Name</label>
          <input
            name="first_name"
            className="form-control"
            id="reservationFirstNameInput"
            placeholder="first name"
            value={reservationForm.first_name}
            required
            onChange={(update) =>
              setReservationForm({
                ...reservationForm,
                first_name: update.target.value,
              })
            }
          />
          <label htmlFor="reservationLastNameInput" className="form-label">Last Name</label>
          <input
            name="last_name"
            className="form-control"
            id="reservationLastNameInput"
            placeholder="last name"
            value={reservationForm.last_name}
            required
            onChange={(update) =>
              setReservationForm({
                ...reservationForm,
                last_name: update.target.value,
              })
            }
          />
          <label htmlFor="reservationMobileNumberInput" className="form-label">Mobile Number</label>
          <input
            name="mobile_number"
            className="form-control"
            id="reservationMobileNumberInput"
            placeholder="phone number"
            maxLength="12"
            required
            value={reservationForm.mobile_number}
            onChange={(update) => {
              const formattedPhoneNumber = formatPhoneNumber(update.target.value);
              setReservationForm({
                ...reservationForm,
                mobile_number: formattedPhoneNumber,
              });
            }}
          />
          <label htmlFor="reservationDateInput" className="form-label">Date</label>
          <input
            name="reservation_date"
            type="date"
            className="form-control"
            placeholder="YYYY-MM-DD"
            pattern="\d{4}-\d{2}-\d{2}"
            value={reservationForm.reservation_date.slice(0, 10)}
            required
            onChange={(update) => {
              setReservationForm({
                ...reservationForm,
                reservation_date: update.target.value,
              });
            }}
          />
          <label htmlFor="reservationTimeInput" className="form-label">Time</label>
          <input
            name="reservation_time"
            type="time"
            className="form-control"
            placeholder="HH:MM"
            pattern="[0-9]{2}:[0-9]{2}"
            value={reservationForm.reservation_time}
            required
            onChange={(update) => {
              setReservationForm({
                ...reservationForm,
                reservation_time: `${update.target.value}:00`,
              });
            }}
          />
          <label htmlFor="reservationNumberOfPeopleInput" className="form-label">
            Number of people attending
          </label>
          <input
            name="people"
            type="number"
            className="form-control"
            max="30"
            min="1"
            value={reservationForm.people || 1}
            onChange={(update) => {
              setReservationForm({
                ...reservationForm,
                people: Number(update.target.value),
              });
            }}
          />
        </div>
        <div className="reservation-form-btn">
          <button type="submit" className="btn bottom-button">
            Submit
          </button>
          <button
            type="button"
            data-reservation-id-cancel={reservationForm.reservation_id}
            className="btn bottom-button-cancel"
            onClick={() => history.goBack()}
          >
            cancel
          </button>
        </div>
      </form>
    );
  }
  
  export default ReservationForm;
  