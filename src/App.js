import React from 'react';
import './App.css';
import Home from './components/pages/HomePage/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import YoutubeEmbed from './components/YoutubeEmbed';

function App() {
  return (
    <Router>
      <Navbar />


      <div className='yVideo'>
        <YoutubeEmbed embedId="Lv9C9vzFo5E" />
      </div>


      <div className='homePage'>
        <Home />
      </div>

      {/* <Routes>
        
        <Route path='/'  element={<Home />} />
      </Routes> */}

      
    </Router>
  );
}

export default App;
