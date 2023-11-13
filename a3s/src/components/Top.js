import React from 'react'
import './Top.css';
// import { Button } from 'bootstrap';
function Top() {
  return (
    <div className='topnav'>
      <a className="active" href="/">Home</a>
      <a href="/login">Login</a>
      <a href="/contact">Contact</a>
      <a href="/about">About</a>
    </div>
  )
}

export default Top
