import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

    async function fetchData() {
      let a =  await (await fetch("http://192.168.0.128:5000/img/drawings/")).json();
      let b = ["asdas", "asdasdas"];  
      //console.log(a);

      return a;
    }
    
ReactDOM.render(
  <React.StrictMode>
   <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
