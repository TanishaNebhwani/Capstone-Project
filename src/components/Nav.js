
// import;
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';
import '../styles/Nav.css'
function Nav() {
    return (<nav className='navbar'>
        <img  className="logo" src={logo} alt='logo'></img>
        <ul>
        <li><NavLink className={({isActive})=>isActive?"active":"link"}to="/">HomePage</NavLink> </li>
        <li><NavLink className={({isActive})=>isActive?"active":"link"}to="/booking">Reservations</NavLink> </li>
        <li><NavLink className={({isActive})=>isActive?"active":"link"}to="/menu">Menu</NavLink></li>
        <li><NavLink className={({isActive})=>isActive?"active":"link"}to="/about-us">About</NavLink></li>
    </ul></nav>)
}

export default Nav;