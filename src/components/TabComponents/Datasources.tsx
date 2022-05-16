import React from 'react'

export default function Datasources() {
  return (
    <div className='text-center p-3'>
      <h2 className='text-start'>
        High Level Data source metrics if applicable
      </h2>

      <div className='d-flex justify-content-between'>
          <button className='btn btn-outline-dark btn-sm mt-2' >View Controls</button>
          <button className='btn btn-outline-dark btn-sm mt-2' >Potential local function</button>
        </div>
      
      <table className="table table-bordered mt-3">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Create/Update status</th>
            <th scope="col">Status</th>
            <th scope="col">Tag Status ?</th>
            <th scope="col">Total Tags/Fail</th>
            <th scope="col">Connection Status</th>
            <th scope="col">Adapter Status</th>
            <th scope="col">Adapter Version</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>New Data Source</td>
            <td style={{backgroundColor:"rgb(237, 126, 181)"}}>FAIL</td> 
            <td>Healthy</td>
            <td>Synced</td>
            <td>123/3</td>
            <td>Healthy</td>
            <td>Healthy</td>
            <td>Healthy</td>
          </tr>
          <tr>
            <td>Data Source Name</td>
            <td>Pending</td> 
            <td>Healthy</td>
            <td>Sync in progress</td>
            <td>123/3</td>
            <td>Healthy</td>
            <td>Unhealthy</td>
            <td>Healthy</td>
          </tr>
          <tr>
            <td>Data Source Name</td>
            <td>Success</td> 
            <td>Unhealthy Flow ?</td>
            <td>Sync in progress</td>
            <td>123/3</td>
            <td>Healthy</td>
            <td style={{backgroundColor:"rgb(237, 126, 181)"}}>Failed (error)</td>
            <td>Healthy</td>
          </tr>
          <tr>
            <td>Data Source Name</td>
            <td>Success</td> 
            <td>Healthy</td>
            <td style={{backgroundColor:"rgb(237, 126, 181)"}} >Out of Sync - how is this resolved</td>
            <td>123/3</td>
            <td>Healthy</td>
            <td>Healthy</td>
            <td>Healthy</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
