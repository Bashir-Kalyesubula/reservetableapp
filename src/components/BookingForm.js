

function BookingForm ({
    date,
    time,
    guests,
    occasion,
    setDate,
    setTime,
    setGuests,
    setOccasion,
    reservations,
    setReservations,
}) {
    const handleSubmit =(e) =>{
        e.preventDefault();
        const newReservation = {
            date,
            time,
            guests,
            occasion,
          };
    // Update the reservations state with the new reservation
    setReservations([...reservations, newReservation]);
    };

    return(
        <>
        <form onSubmit={handleSubmit}>
            <fieldset>
            <div className="form-container">
            <label className="field" htmlFor="res-date">Choose Date</label>

            <input type="date" id="res-date"
            value={date}
            onChange={(e)=> setDate(e.target.value)}/>

            <label className="field" htmlFor="res-time">Choose Time</label>
            <select id="res-time"
            value={time}
            onChange={(e)=> setTime(e.target.value)}>
                <option>17:00</option>
                <option>18:00</option>
                <option>19:00</option>
                <option>20:00</option>
                <otpion>21:00</otpion>
                <option>22:00</option>
            </select>
            <label className="field" htmlFor="guests">Number of guests</label>
            <input type="number"
            id="guests" placeholder="1"
            min="1" max="10"
            value={guests}
            onChange={(e)=> setGuests(e.target.value)}/>

            <label className="field" htmlFor="occasion">occasion</label>
            <select id="occasion"
            value={occasion}
            onChange={(e)=> setOccasion(e.target.value)}>
                <option>Birthday</option>
                <option>Anniversary</option>
                <option>Other</option>
            </select>
            <input className="field" type="submit" value="Make your Reservation"/>
            </div>
            </fieldset>

        </form>
        <div>
            {/* Display existing reservations */}
<h2>Your Reservations</h2>
<ul>
  {reservations && reservations.map((reservation, index) => (
    <li key={index}>
      Date: {reservation.date}, Time: {reservation.time}, Guests: {reservation.guests}, Occasion: {reservation.occasion}
    </li>
  ))}
</ul>
        </div>
        </>


    );
}

export default BookingForm;