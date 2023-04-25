import '../styles/Homepage.css'
import homebanner from '../assets/homebanner.jpg'
import {Link} from 'react-router-dom'
function Homepage(){
    return (<div className="main">
        <article>
        <h1 className="heading">Little Lemon</h1>
        <h1 className='subheading'>Chicago</h1>
        <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
        <Link to="/booking">Reserve a table</Link>
        </article>
        <div><img className="hero" src={homebanner} alt="home banner"></img></div>
        </div>);
}

export default Homepage;