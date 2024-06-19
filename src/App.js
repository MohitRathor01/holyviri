import './App.css';
import HvtCarousel from './pages/HvtCarousel';
import HvtContactForm from './pages/HvtContactForm';
import HvtFooter from './pages/HvtFooter';
import { HvtHeader } from './pages/HvtHeader';
import HvtReview from './pages/HvtReview';
import HvtWwr from './pages/HvtWwr';
import Hvttourcard from './pages/Hvttourcard';
import HvtPayment from './pages/Hvtpayment';

function App() {
  return (
  <>
  <HvtHeader/>
  <HvtCarousel/>
  <HvtWwr/>
  <Hvttourcard/>
  <HvtReview/>
  <HvtContactForm/>
  <HvtPayment/>
  <HvtFooter/>
  </>

  )
}

export default App;
