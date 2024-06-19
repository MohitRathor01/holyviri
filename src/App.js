import './App.css';
import HvtCarousel from './pages/HvtCarousel';
import HvtContactForm from './pages/HvtContactForm';

import HvtFooter from './pages/HvtFooter';
import { HvtHeader } from './pages/HvtHeader';

function App() {
  return (<>
  <HvtHeader/>
  <HvtCarousel/>
  <HvtContactForm/>
  <HvtFooter/>
  </>
  )
}

export default App;
