import { Route, Routes } from 'react-router-dom';
import About from './components/pages/About/About';
import Appointment from './components/pages/Appointment/Appointment';
import ContactUs from './components/pages/ContactUs/ContactUs';
import Home from './components/pages/Home/Home';
import Login from './components/pages/Login/Login';
import Register from './components/pages/Login/Register';
import RequireAuth from './components/pages/Login/RequireAuth';
import Reviews from './components/pages/Reviews/Reviews';
import Footer from './components/Shared/Footer/Footer';
import Menubar from './components/Shared/Menubar/Menubar'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className='max-w-[1440px] mx-auto' >
      <Menubar />
      <Routes>
        <Route path='/' element={<Home />} />

        <Route path='/appointment' element={
          <RequireAuth>
            <Appointment />
          </RequireAuth>}
        />

        <Route path='/reviews' element={<Reviews />} />
        <Route path='/contact-us' element={<ContactUs />} />
        <Route path='/about' element={<About />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
      <ToastContainer/>
      <Footer />
    </div>
  );
}

export default App;
