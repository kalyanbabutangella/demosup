import React, { useState } from 'react'
import Adapters from './TabComponents/Adapters';
import AssetID from './TabComponents/AssetID';
import Assets from './TabComponents/Assets';
import Datasources from './TabComponents/Datasources';
import Gateways from './TabComponents/Gateways';
import Monitoring from './TabComponents/Monitoring';

type TabValues = 'monitoring' | 'data-sources' | 'gateways' | 'assetId' | 'asset' | 'adapter';

function Tabs() {
  const [tabValue, setTabValue] = useState<TabValues>('monitoring');
  return (
    <div>
      <div className='d-flex' >
        <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
          <li onClick={() => setTabValue('monitoring')} className="nav-item">
            <a className={"nav-link " + (tabValue === "monitoring" && "active").toString()} id="pills-home-tab" data-toggle="pill" role="tab" aria-controls="pills-home" aria-selected="true">Monitoring</a>
          </li>
          <li onClick={() => setTabValue('data-sources')} className="nav-item">
            <a className={"nav-link " + (tabValue === "data-sources" && "active").toString()} id="pills-profile-tab" data-toggle="pill" role="tab" aria-controls="pills-profile" aria-selected="false">Data sources</a>
          </li>
          <li onClick={() => setTabValue('gateways')} className="nav-item">
            <a className={"nav-link " + (tabValue === "gateways" && "active").toString()} id="pills-contact-tab" data-toggle="pill" role="tab" aria-controls="pills-contact" aria-selected="false">Gateways</a>
          </li>
          <li onClick={() => setTabValue('assetId')} className="nav-item">
            <a className={"nav-link " + (tabValue === "assetId" && "active").toString()} id="pills-contact-tab" data-toggle="pill" role="tab" aria-controls="pills-contact" aria-selected="false">Asset ID</a>
          </li>
          <li onClick={() => setTabValue('asset')} className="nav-item">
            <a className={"nav-link " + (tabValue === "asset" && "active").toString()} id="pills-contact-tab" data-toggle="pill" role="tab" aria-controls="pills-contact" aria-selected="false">Asset</a>
          </li>
          <li onClick={() => setTabValue('adapter')} className="nav-item">
            <a className={"nav-link " + (tabValue === "adapter" && "active").toString()} id="pills-contact-tab" data-toggle="pill" role="tab" aria-controls="pills-contact" aria-selected="false">Adapter</a>
          </li>
        </ul>

        <div>
          &nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;
          <button className='btn btn-outline-dark btn-sm mt-2' >Create New Gateway</button>
          &nbsp;&nbsp;&nbsp;
          <button className='btn btn-outline-dark btn-sm mt-2' >Create New Data Source</button>
        </div>
      </div>

      <div>
        {tabValue === "monitoring" && <Monitoring />}
        {tabValue === "data-sources" && <Datasources />}
        {tabValue === "gateways" && <Gateways />}
        {tabValue === "assetId" && <AssetID />}
        {tabValue === "asset" && <Assets />}
        {tabValue === "adapter" && <Adapters />}
      </div>
    </div>

  )
}

export default Tabs
