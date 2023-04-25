// import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Hero from './components/Hero';
import BookingPage from './components/BookingPage'
import HomePage from './components/Homepage'
import ErrorPage from './components/ErrorPage';
import { Routes, Route } from 'react-router-dom';
import ConfirmedBooking from './components/ConfirmedBooking';
function App() {
  return (
    <div >
      <header >
        <Nav></Nav>
      </header>
      <main>
        <h1>Learn react</h1>
      <Hero></Hero>
        <Routes>
        <Route index element={<HomePage />}></Route>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/confirmed" element={<ConfirmedBooking />}></Route>
        <Route path="*" element={<ErrorPage />}></Route>
          <Route path="/booking" element={<BookingPage />}></Route>
        </Routes>
        </main>
    </div>
  );
}

export default App;
