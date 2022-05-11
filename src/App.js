import { Route, Routes } from 'react-router-dom';
import About from './components/pages/About/About';
import Home from './components/pages/Home/Home';
import Menubar from './components/Shared/Menubar/Menubar'

function App() {
  return (
    <div >
      <Menubar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
