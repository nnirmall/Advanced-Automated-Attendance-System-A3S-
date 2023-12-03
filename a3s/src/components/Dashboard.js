import React, { useEffect } from 'react'
import SideBar from './SideBar'
import { useAuth } from './AuthContext'
import { useNavigate } from 'react-router-dom';


function Dashboard() {
  // console.log(props.user)
  const { user } = useAuth();

  const usenavigate = useNavigate();
  useEffect(() => {
  let userId = sessionStorage.getItem('user');
  if(userId === '' || userId == null){
    usenavigate('/login');
  }
},[]);

  // const userr = props.user;
  return (
    
    // <Router>
      <div className="App">
        <div className='container'>
          <SideBar/>
          <div className='dybamicPage' style={{
            backgroundImage: "url('./img/image.png')",
            backgroundSize: 'cover',
          }}>
            <h2 style={{
            color:"white",
          }}>Welcome, {user.firstname} {user.lastname}</h2>
          </div>
        </div>  
      </div>
    // </Router>
  )
}

export default Dashboard
