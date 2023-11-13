import React from 'react'
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';


export default function Signup() {
  return (
    <div className="LoginContainer" style={{ 
      backgroundImage:"url('./img/image.png')",
      // fontSize:'50px',
      backgroundSize: 'cover',
      // backgroundRepeat: 'no-repeat',
    }}>
        <div className="Loginform">
            <h1>Register your account </h1>
            <form id='form'>                 
                <Input type="text" id="name" name="name" label="Name" placeholder="Your Full Name" autofocus={true}/>
                <Input type="email" id="email" name="email" label="Email Address" placeholder="Your@example.com"/>
                <Input type="number" id="phone" name="phone" label="Phone Number" placeholder="+1 (xxx)-(xxxx)-(xxx)"/>
                <label id="userType">User type</label>
                <select name="userType" id="userType">
                    <option value="student">Student</option>
                    <option value="instructor">Instructor</option>
                </select>   
                <Input type="password" id="password" name="password" label="Password" placeholder="************" />
                <Input type="password" id="confirmPassword" name="confirmPassword" label="Confirm Password" placeholder="************" />
                <Button className='custom-button' value="Submit"> Signup </Button>
            </form>
            <div className='register'>
                <label>  Already have an account? <Link to="/login">Log in here!</Link></label>
            </div>
        </div>
           
    </div>
  )
}

function Input({type, id, name, label, placeholder, autofocus}) {
    return (
      <label className="text-gray-500 block mt-3">{label}
        <input
          autoFocus={autofocus}
          type={type} 
          id={id} 
          name={name} 
          placeholder={placeholder}
          className="custom-input"/>
      </label>
    )
}