import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import About from './components/About/About';
import Drawings from './components/Drawings/Drawings';
import Other from './components/Other/Other';
import Cg from './components/CG/CG';

function App() {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <div>
          <Route path="/about" render={() => <About />} />
          <Route path="/drawings" render={() => <Drawings />} />
          <Route path="/cg" render={() => <Cg />} />
          <Route path="/other" render={() => <Other />} />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
