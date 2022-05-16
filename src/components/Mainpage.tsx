import React from 'react';
import Navbar from './Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Body from './Body';

function Mainpage() {
  return (
    <div>
      <div className='d-flex align-items-stretch' >
        <Navbar />
        <Body />
      </div>
    </div>
  );
}

export default Mainpage;
