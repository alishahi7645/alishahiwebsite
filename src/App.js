import About from './Components/about/About';
import Contact from './Components/cantact/Contact';
import Footer from './Components/footer/Footer';
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
      <Contact/>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
