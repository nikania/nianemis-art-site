import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import About from './components/About/About';
import Drawings from './components/Drawings/Drawings';
import Other from './components/Other/Other';
import Digital from './components/Digital/Digital';
import Sketchbook from './components/Sketchbook/Sketchbook';
import request from 'superagent';

function App() {
  let state = {
    about: request.get('http://localhost:5000/img/about'),
    drawings: request.get('http://localhost:5000/img/drawings'),
    digital: request.get('http://localhost:5000/img/digital'),
  };
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <div className="navbar"><NavBar /></div>
        
        <div className="content">
          <Route path="/about" render={() => <About data={state.about}/>} />
          <Route path="/drawings" render={() => <Drawings data={state.drawings}/>} />
          <Route path="/digital" render={() => <Digital data={state.digital}/>} />
          <Route path="/sketchbook" render={() => <Sketchbook />} />
          <Route path="/other" render={() => <Other />} />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
