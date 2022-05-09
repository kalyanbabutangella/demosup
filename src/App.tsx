import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Body from './components/Body';

function App() {
  return (
    <div>
      <div className='d-flex align-items-stretch' >
        <Navbar />
        <Body />
      </div>
    </div>
  );
}

export default App;
