import React from 'react'
import Tabs from './Tabs'
import { FiUser } from 'react-icons/fi'

function Body() {
  return (
    <div className='p-2 w-100' >
      <div className='d-flex justify-content-between w-100' >
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">Account (TBO)</li>
            <li className="breadcrumb-item active" aria-current="page">FHR (Customer)</li>
          </ol>
        </nav>
        <div className='d-flex p-1' >
          <h6>John Doe</h6>
          &nbsp;&nbsp;
          <FiUser fontSize={20} />
        </div>
      </div>

      <h4>
        FHR
      </h4>
      <br />
      <div>
        <Tabs />
      </div>
    </div>
  )
}

export default Body
