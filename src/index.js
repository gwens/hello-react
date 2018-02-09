import './style.css';

console.log('hello webpack');
let text = document.getElementById('sometext');
console.log(text);
text.classList.add('hello');

import React from 'react';
import ReactDOM from 'react-dom';
//require("babel-core").transform("code", options);

ReactDOM.render(
  <h1>Hello, React!</h1>,
  document.getElementById('root')
);