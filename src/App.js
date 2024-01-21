import About from './Components/about/About';
import Freelancer from './Components/freelancer/Freelancer';
import Home from './Components/home/Home';
import Navbar from './Components/navbar/Navbar';
import Portfolio from './Components/portfolio/Portfolio';
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
      <Portfolio/>
      <Freelancer/>
    </BrowserRouter>
  );
}

export default App;
