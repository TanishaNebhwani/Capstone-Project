// import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Hero from './components/Hero';
import BookingPage from './components/BookingPage';
import Footer from './components/Footer';
import HomePage from './components/Homepage';
import ErrorPage from './components/ErrorPage';
import { Routes, Route } from 'react-router-dom';
import ConfirmedBooking from './components/ConfirmedBooking';
import Chicago from './components/Chicago';
import Specials from './components/Specials';
import CustomerSays from './components/CustomersSay';
import Menu from './components/Menu';
import About from './components/About';
function App() {
  return (
    < >
      <header >
        <Nav></Nav>
      </header>
      <main>
      <Hero></Hero>
        <Routes>
        <Route index element={[<HomePage/>,<Specials/>,<CustomerSays/>,<Chicago/>]}></Route>
        <Route path="/" element={[<HomePage/>,<Specials/>,<CustomerSays/>,<Chicago/>]}></Route>
        <Route path="/confirmed" element={<ConfirmedBooking />}></Route>
        <Route path="*" element={<ErrorPage />}></Route>
          <Route path="/booking" element={<BookingPage />}></Route>
          <Route path="/menu" element={<Menu />}></Route>
          <Route path="/about-us" element={<About />}></Route>
        </Routes>
        </main>
        <footer><Footer></Footer></footer>
    </>
  );
}

export default App;
