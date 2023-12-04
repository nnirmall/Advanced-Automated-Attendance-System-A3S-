import React from 'react'
import './SideBar.css';
// import { SideBarData } from './SideBarData';
// import { useAuth } from './AuthContext'
// import '///App.css';
import { Link } from 'react-router-dom'
import DashboardIcon from '@material-ui/icons/Dashboard';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import ListAltIcon from '@material-ui/icons/ListAlt';
import AssessmentIcon from '@material-ui/icons/Assessment';
import SettingsIcon from '@material-ui/icons/Settings';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { useAuth } from './AuthContext';


function SideBar() {
  const { user } = useAuth();
  // const { user } = useAuth();
  console.log("huh")
  console.log(user);
  return (
    <div className='SideBar'>
        <ul className='SideBarList'>
        <li className='SideBarRow' >
          <Link to={{ pathname: '/dashboard', state: { user: {user} } }}>
          <div id='icon'><DashboardIcon /></div>{""}
          <div id='title'>Dashboard</div> 
          </Link>
        </li>
        <li className='SideBarRow' >
          <Link to={{ pathname: '/profile', state: { user: user} }}>
            <div id='icon'> <AccountBoxIcon/></div>{""}
            <div id='title'>
              {user.accountType !== 'undefined'
                          ?     user.accountType === 0
                              ? 'Admin'
                              : user.accountType === 1
                              ? 'Instructor'
                              : user.accountType === 2
                              ? 'Student'
                              : 'Unknown Account Type'
                              : 'User data not available'}
                              </div> 
          </Link>
        </li>
        <li className='SideBarRow' >
          <Link to={{ pathname: '/course', state: { user: user} }}>
          <div id='icon'> <ListAltIcon/></div>{""}
          <div id='title'>Courses</div> 
             
          </Link>
        </li>
        <li className='SideBarRow' >
          <Link to={{ pathname: '/report', state: {user: user} }}>
          <div id='icon'><AssessmentIcon/></div>{""}
          <div id='title'>Reports</div> 
             
          </Link>
        </li>
        <li className='SideBarRow' >
          <Link to={{ pathname: '/settings', state: { user: user} }}>
             
            <div id='icon'> <SettingsIcon/></div>
          <div id='title'>Settings</div> 
          </Link>
        </li>
        <li className='SideBarRow' >
          <Link to={{ pathname: '/logout', state: { user: user} }}>
             
            <div id='icon'> <ExitToAppIcon/></div>{""}
          <div id='title'>LogOut</div> 
          </Link>
        </li>
        </ul>
    </div>
  )
}

export default SideBar
