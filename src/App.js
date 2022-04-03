import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/footer';
import { Home } from './pages/home';
import { Bollywood } from './pages/Bollywood';
import { Hollywood } from './pages/Hollywood';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Search } from './Components/Search';
import { ToggleTheme } from './Components/ToggleTheme';
import React, { useState } from 'react';
function App() {
  const [mode, setMode] = useState('light');
  const toggleMode = () => {
    if (mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
    else {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
    }
  }
  return (
    <div>
      <Router>
      
        <Navbar mode={mode} toggleMode={toggleMode} />
        
        <Routes>
          <Route path="/" element={<Home />}> </Route>
          <Route path="/Bollywood" element={<Bollywood />}> </Route>
          <Route path="/Hollywood" element={<Hollywood />}> </Route>
        </Routes>
        <Footer/>
      </Router>
      
    </div>
  );
}
export default App;

