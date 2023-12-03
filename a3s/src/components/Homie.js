import React from 'react'
import { Link } from 'react-router-dom'
import DashboardIcon from '@material-ui/icons/Dashboard';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import ListAltIcon from '@material-ui/icons/ListAlt';
import AssessmentIcon from '@material-ui/icons/Assessment';
import SettingsIcon from '@material-ui/icons/Settings';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
// Dashboard

export default function  Homie(props) {
  return (
    <div>
      <h2>
        Welcome {props.user.firstname} {props.user.lastname}
      </h2>
      <SideieeBar what= {props}/>
      
    </div>
  )
}

function SideieeBar(what) {
    return (
      <div className='SideBar'>
          <ul className='SideBarList'>
          <ul className='SideBarList'>
        <li>
          <Link to={{ pathname: '/dashboard', state: { user: {what} } }}>
          <DashboardIcon /> Dashboard
          </Link>
        </li>
        <li>
          <Link to={{ pathname: '/profile', state: { user: what} }}>
            <AccountBoxIcon/> Instructor
          </Link>
        </li>
        <li>
          <Link to={{ pathname: '/course', state: { user: what} }}>
            <ListAltIcon/>Courses
          </Link>
        </li>
        <li>
          <Link to={{ pathname: '/report', state: {user: what} }}>
            <AssessmentIcon/>Reports
          </Link>
        </li>
        <li>
          <Link to={{ pathname: '/settings', state: { user: what} }}>
            <SettingsIcon/>Settings
          </Link>
        </li>
        <li>
          <Link to={{ pathname: '/logout', state: { user: what} }}>
            <ExitToAppIcon/>LogOut
          </Link>
        </li>
        </ul>
          </ul>
      </div>
    )
  }