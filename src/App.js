import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import About from './components/About/About';
import Drawings from './components/Drawings/Drawings';
import Other from './components/Other/Other';
import Digital from './components/Digital/Digital';
import Sketchbook from './components/Sketchbook/Sketchbook';

function App() {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <div className="navbar"><NavBar /></div>
        
        <div className="content">
          <Route path="/about" render={() => <About />} />
          <Route path="/drawings" render={() => <Drawings />} />
          <Route path="/digital" render={() => <Digital />} />
          <Route path="/sketchbook" render={() => <Sketchbook />} />
          <Route path="/other" render={() => <Other />} />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
