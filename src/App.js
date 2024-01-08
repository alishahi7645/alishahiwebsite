import Home from './Components/home/Home';
import './index.css';
import {BrowserRouter , Route , Routes} from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
