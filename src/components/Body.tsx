import React from 'react'
import Tabs from './Tabs'
import { FiUser } from 'react-icons/fi'
import {  useHistory, withRouter } from 'react-router-dom'

function Body() {
  const history = useHistory()

  const navigateToLogin = () => {
    history.push("/login")
    window.location.reload()
  }

  return (
    <div className='p-2 w-100' >
      <div className='d-flex justify-content-between w-100' >
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">Account (TBO)</li>
            <li className="breadcrumb-item active" aria-current="page">FHR (Customer)</li>
          </ol>
        </nav>
        <button className='d-flex p-1' onClick={()=> navigateToLogin() }>
          <h6>John Doe</h6>
          &nbsp;&nbsp;
          <FiUser fontSize={20} />
        </button>
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

export default withRouter(Body)
