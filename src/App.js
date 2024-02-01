import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Navbar from './Components/Navbar.js';
import Home from './Components/Home.js';
import DetailInfo from './Components/DetailInfo.js';


function App() {
  return (
    <div className="App">
<BrowserRouter>
<Routes>
<Route path="/" element={<Home/>} />
<Route path="/:id" element={<DetailInfo/>} />
</Routes>
</BrowserRouter>      
      
    </div>
  );
}

export default App;
