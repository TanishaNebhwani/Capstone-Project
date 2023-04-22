// import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Hero from './components/Hero';
import BookingPage from './components/BookingPage'
import HomePage from './components/Homepage'
import { Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div >
      <header >
        <Nav></Nav>
      </header>
      <Hero></Hero>
      
        <Routes>
        <Route index element={<HomePage />}></Route>
        <Route path="/" element={<HomePage />}></Route>
          <Route path="/booking" element={<BookingPage />}></Route>
        </Routes>
    </div>
  );
}

export default App;
