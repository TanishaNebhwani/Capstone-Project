import '../styles/Booking.css';
import { useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {fetchAPI, submitAPI} from '../dateCheck.js'
function BookingForm() {

   var today = new Date();
   var dd = String(today.getDate()).padStart(2, '0');
   var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
   var yyyy = today.getFullYear();
   today = yyyy + '-' + mm + '-' + dd;

   const [date, setDate] = useState(today);
   const[time, setTime] = useState();
   const [guests, setGuests]=useState();
   const [occasion, setOccasion]= useState();
   const [availableTimes,setAvailableTimes]=useState(['17:00','18:00','19:00','20:00']);
   const navigate = useNavigate();

   useEffect(()=>{
      let res=fetchAPI(new Date(date));
      setAvailableTimes(res);
   },[date])

   const handleSubmit = (e) => {
      e.preventDefault();
      submitAPI(e);
      navigate("/confirmed");
   }

   return (
      <div className="reservation">
         <h1>Reserve a table!</h1>
         <form className="bookingForm" onSubmit={handleSubmit}>
            <label htmlFor="res-date">Choose date</label>
            <input type="date" id="res-date" value={date} onChange={(e)=>setDate(e.target.value)}/>

            <label htmlFor="res-time">Choose time</label>
            <select id="res-time " value={time} onChange={(e)=>setTime(e.target.value)}>
               {availableTimes.map((r)=><option key={r}>{r}</option>)}
            </select>

            <label htmlFor="guests">Number of guests</label>
            <input type="number" placeholder="1" min="1" max="10" id="guests" value={guests} onChange={(e)=>setGuests(e.target.value)}/>

            <label htmlFor="occasion">Occasion</label>
            <select id="occasion" value={occasion} onChange={(e)=>setOccasion(e.target.value)}>
               <option>Birthday</option>
               <option>Anniversary</option>
            </select>

            <input type="submit" value="Make Your reservation" />

         </form>
      </div>
   )
}

export default BookingForm;