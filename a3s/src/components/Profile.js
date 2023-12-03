import React from 'react'
import SideBar from './SideBar'

function Profile() {
  return (
    <div className="App">
        <div className='container'>
          <SideBar/>
          <div className='dybamicPage' style={{
            backgroundImage: "url('./img/bio_page_1.png')",
            backgroundSize: 'cover',
          }}>
           {/* <h2>
           Profile Page
           </h2> */}
          </div>
        </div>
    </div>
  )
}

export default Profile
