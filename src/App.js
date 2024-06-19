import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import HvtCarousel from './pages/HvtCarousel';
import HvtContactForm from './pages/HvtContactForm';
import HvtFooter from './pages/HvtFooter';
import { HvtHeader } from './pages/HvtHeader';
import HvtReview from './pages/HvtReview';
import HvtWwr from './pages/HvtWwr';
import HvtPayment from './pages/Hvtpayment';
import Hvttourcard from './pages/Hvttourcard';
import TourDetails from './components/TourDetails';
import HvtFloatingbtn from './components/HvtFloatingbtn';

function App() {
  return (
    <Router>
      <HvtHeader />
      <Routes>
        <Route path="/" element={
          <>
            <HvtCarousel />
            <HvtWwr />
            <Hvttourcard />
            <HvtReview />
            <HvtContactForm />
          </>
        } />
        <Route path="/tour/:id" element={<TourDetails />} />
      </Routes>
      <HvtFloatingbtn />
      <HvtFooter />
    </Router>
  );
}

export default App;
