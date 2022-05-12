import { Route, Routes } from 'react-router-dom';
import About from './components/pages/About/About';
import Appointment from './components/pages/Appointment/Appointment';
import ContactUs from './components/pages/ContactUs/ContactUs';
import Home from './components/pages/Home/Home';
import Login from './components/pages/Login/Login';
import Reviews from './components/pages/Reviews/Reviews';
import Footer from './components/Shared/Menubar/Footer/Footer';
import Menubar from './components/Shared/Menubar/Menubar'

function App() {
  return (
    <div >
      <Menubar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/appointment' element={<Appointment />} />
        <Route path='/reviews' element={<Reviews />} />
        <Route path='/contact-us' element={<ContactUs />} />
        <Route path='/about' element={<About />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
