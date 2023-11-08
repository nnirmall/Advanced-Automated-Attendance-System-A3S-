import React from 'react'
import './SideBar.css';
import { SideBarData } from './SideBarData';
// import '///App.css';

function SideBar() {
  return (
    <div className='SideBar'>
        <ul className='SideBarList'>
            {SideBarData.map((val,key)=> {
            return(
                <li 
                  className='SideBarRow' 
                  key={key} 
                  id = {window.location.pathname === val.link ? "active" : ""}
                  onClick={()=> {
                    window.location.pathname = val.link
                  }
                   
                  
                  }>
                    <div id='icon'>{val.icon}</div>{""}
                    <div id='title'>{val.title}</div> 
                </li>
            )
            })}
        </ul>
    </div>
  )
}

export default SideBar
