import React, { useState, useContext } from 'react';
import ReactDOM from 'react-dom';
import Routing from './components/Routing';

import './index.scss';

function App() {
  return <div className="app">
    <Routing />
  </div>;
}

const wrapper = document.getElementById("multitrust-app");
wrapper ? ReactDOM.render(<App />, wrapper) : false;
