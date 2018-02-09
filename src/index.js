import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import Goose from './goose.jpg';
//require("babel-core").transform("code", options);

ReactDOM.render(
  <div className="hello">
    <h1>Hello, React!</h1>
    <img className="goose" src={Goose} width="400" />
  </div>,
  document.getElementById('root')
);