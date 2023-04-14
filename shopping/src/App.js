import './App.css';
import { Routes, Route, BrowserRouter} from 'react-router-dom'
import Navbar from './component/Navbar';
import Home from './pages/Home';
import Cart from './pages/Cart';


function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
      
      </BrowserRouter>
  );
}

export default App;


