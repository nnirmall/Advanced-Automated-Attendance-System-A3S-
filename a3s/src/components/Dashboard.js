import React from 'react'
import SideBar from './SideBar'

function Dashboard() {
  return (
    // <Router>
      <div className="App">
        <div className='container'>
          <SideBar/>
          <div className='dybamicPage'>
            <h2>Dashboard</h2>
          </div>
        </div>  
      </div>
    // </Router>
  )
}

export default Dashboard
