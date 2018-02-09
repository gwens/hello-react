import './style.css';
import Goose from './goose.jpg';

console.log('hello webpack');

// Use some imported CSS
let nonReactStuff = document.getElementById('somestuff');
nonReactStuff.classList.add('hello');

// Use an imported image
let myGoose = new Image();
myGoose.src = Goose;
nonReactStuff.appendChild(myGoose);



import React from 'react';
import ReactDOM from 'react-dom';
//require("babel-core").transform("code", options);

ReactDOM.render(
  <h1>Hello, React!</h1>,
  document.getElementById('root')
);