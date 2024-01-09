import Home from './Components/home/Home';
import Navbar from './Components/navbar/Navbar';
import './index.css';
import {BrowserRouter , Route , Routes} from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Home/>
    </BrowserRouter>
  );
}

export default App;
