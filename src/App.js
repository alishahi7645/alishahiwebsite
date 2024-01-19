import About from './Components/about/About';
import Home from './Components/home/Home';
import Navbar from './Components/navbar/Navbar';
import Services from './Components/servics/Services';
import './index.css';
import {BrowserRouter , Route , Routes} from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Home/>
      <About/>
      <Services/>
    </BrowserRouter>
  );
}

export default App;
