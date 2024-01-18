import About from './Components/about/About';
import Home from './Components/home/Home';
import Navbar from './Components/navbar/Navbar';
import './index.css';
import {BrowserRouter , Route , Routes} from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Home/>
      <About/>
    </BrowserRouter>
  );
}

export default App;
