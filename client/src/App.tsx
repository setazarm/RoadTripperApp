
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About';
import Login from './components/Login';
import "./style.css"
import TripForm from './TripForm';

function App(): JSX.Element {
  const [count, setCount] = useState<number>(0);

  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login/>}/>
      </Routes>
      <TripForm/>
    </BrowserRouter>
  );
}

export default App;
