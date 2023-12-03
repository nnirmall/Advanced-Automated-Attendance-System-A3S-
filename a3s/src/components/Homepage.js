import React from 'react'
import './Homepage.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { useState } from "react";

import Login from './Login';
import Signup from './Signup';
import Dashboard from './Dashboard';
import Course from './Course';
import Reports from './Reports';
import Preferences from './Preferences/Preferences';
import SpecificCourse from './SpecificCourse';
import Profile from './Profile';
import Top from './Top';
// import Top from './Top';

export default function Homepage() {



  return (
    <Router>
    <div className='Homepage'>
      <Routes>
      <Route path="/" element={<Login/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
        <Route path="/profile" element={<Profile />} /> 
        <Route path="/course" element={<Course />} />
        <Route path="/report" element={<Reports />} />
        <Route path="/settings" element={<Preferences />} />
        <Route path="/SpecificCourse" element={<SpecificCourse />} />
        <Route path="/logiut" element={<Login/>} />
        <Route path="/top" element={<Top/>}/>
        {/* <Route exact path="/">
          {isLoggedIn ? (
            <DashboardContainer userData={userData} onLogout={handleLogout} />
          ) : (
            <Login onSuccessfulLogin={handleSuccessfulLogin} />
          )}
        </Route> */}
      </Routes>
    </div>
    </Router>
  )
}
