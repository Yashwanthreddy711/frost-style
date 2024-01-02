import Home from "./pages/Home";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Menwear from './pages/Menwear';
import Womenwear from './pages/Womenwear';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/mens-wear" element={<Menwear/>}/>
          <Route path="/women-wear" element={<Womenwear/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
