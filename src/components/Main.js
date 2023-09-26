import React , { useState } from "react";
import BookingForm from "./BookingForm.js";
import foodpic1 from "/Users/bashirbinbash/frontend/reservetableapp/src/images/restauranfood.jpg"
import greeksalad from "/Users/bashirbinbash/frontend/reservetableapp/src/images/greek salad.jpg"
import brusche from "/Users/bashirbinbash/frontend/reservetableapp/src/images/Bruschetta copy.jpg"
import lemon from "/Users/bashirbinbash/frontend/reservetableapp/src/images/lemon dessert.jpg"
import deli from "/Users/bashirbinbash/frontend/reservetableapp/src/images/deli.png"



function Main () {
     const [date,setDate] = useState('');
     const [time,setTime] = useState('');
     const [guests,setGuests] = useState(1);
     const [occasion,setOccasion] = useState('Birthday');
     const [reservations,setReservations] = useState([]);

return (
     <>
<main>
<section className="about-main">

     <h1>Little Lemon</h1>
     <h2 className="chicago">Chicago</h2>
     <div className="lemon-description">
     <p className="about-des"> We are a family owned Mediterranean restarant,focused on traditional
          recipes served with a modern twist</p>
     <img className="sushi-pic"src={foodpic1}/> </div>

     <button className="reserve-button">Reserve a Table</button>
</section>
<div className="special-flex">
          <h2>Specials</h2>
          <button className="reserve-button">Online Menu</button>
</div>
<section className="container-flex">

     <article className="specials-menu">
          <img className="specials-img"src={greeksalad}/>
          <h3 className="specials-title">Greek Salad</h3>
          <h6 className="specials-price">$12.99</h6>

          <p className="specials-des">The Famous greek salad of crispy lettuce,peppers,olives,and our chicago style feta
               cheese,gernished with crunchy garlic and rosemary croutons.
          </p>
          <h3 className="order-des">Order a delivery</h3><img className="deli-icon" src={deli}/>
     </article>
     <article className="specials-menu">
          <img className="specials-img"src={greeksalad}/>
          <h3 className="specials-title">Greek Salad</h3>
          <h6 className="specials-price">$12.99</h6>

          <p className="specials-des">The Famous greek salad of crispy lettuce,peppers,olives,and our chicago style feta
               cheese,gernished with crunchy garlic and rosemary croutons.
          </p>
          <h3 className="order-des">Order a delivery</h3><img className="deli-icon" src={deli}/>
     </article>
     <article className="specials-menu">
          <img className="specials-img"src={greeksalad}/>
          <h3 className="specials-title">Greek Salad</h3>
          <h6 className="specials-price">$12.99</h6>

          <p className="specials-des">The Famous greek salad of crispy lettuce,peppers,olives,and our chicago style feta
               cheese,gernished with crunchy garlic and rosemary croutons.
          </p>
          <h3 className="order-des">Order a delivery</h3><img className="deli-icon" src={deli}/>
     </article>
</section>
<section>
     <div>
     <h1>Reserve a Table Here </h1>
      <BookingForm
      date={date}
      time={time}
      guests={guests}
      occasion={occasion}
      setDate={setDate}
      setTime={setTime}
      setGuests={setGuests}
      setOccasion={setOccasion}
      reservations={reservations}
      setReservations={setReservations}
      />
     </div>
</section>
</main></> )
}

export default Main;