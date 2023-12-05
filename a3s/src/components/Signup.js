import React from 'react'
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import { useState } from "react";


export default function Signup() {

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [accountType, setAccountType] = useState("");
  const [userId, setUserId] = useState("");
  const [message, setMessage] = useState("");

let handleSubmit = async (e) => {
  e.preventDefault();
  try {
    let res = await fetch("https://localhost:7220/api/Login/user/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Specify that you are sending JSON data
      },
      body:JSON.stringify({
        userId: userId,
        firstname: firstname,
        lastname: lastname,
        email: email,
        phone: phone,
        address: address,
        password: password,
        accountType: parseInt(accountType),
        
      }),



    });
    let resJson = await res.json();
    if (res.status === 200) {
      setFirstname("");
      setLastname("");
      setPhone("");
      setEmail("");
      setPassword("");
      setAddress("");
      setAccountType("");
      setMessage("User created successfully");
    } else {
      setMessage("Some error occured");
    }
  } catch (err) {
    console.log("sdfsdf:" +err);
  }
};

const accountTypeOptions = [
  { value: 0, label: "Admin" },
  { value: 1, label: "Instructor" },
  { value: 2, label: "Student" },
];

  return (
    <div className="LoginContainer" style={{ 
      backgroundImage:"url('./img/image.png')",
      // fontSize:'50px',
      backgroundSize: 'cover',
      // backgroundRepeat: 'no-repeat',
    }}>
        <div className="Loginform">
            <h1>Register your account </h1>
            <form onSubmit={handleSubmit}>                 
                <Input 
                  type="text" 
                  id="firstname" 
                  name="firstname" 
                  label="First Name" 
                  placeholder="First Name" 
                  autofocus={true}
                  onChange={(e) => setFirstname(e.target.value)}
                />
                <Input 
                  type="text" 
                  id="lastname" 
                  name="lastname" 
                  label="Last Name" 
                  placeholder="Last Name" 
                  autofocus={true}
                  onChange={(e) => setLastname(e.target.value)}
                />
                <Input 
                  type="email" 
                  id="email" 
                  name="email" 
                  label="Email Address" 
                  placeholder="Your@example.com"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Input 
                  type="number" 
                  id="phone" 
                  name="phone" 
                  label="Phone Number" 
                  placeholder="+1 (xxx)-(xxxx)-(xxx)"
                  onChange={(e) => setPhone(e.target.value)}  
                />

                <Input 
                  type="text" 
                  id="id" 
                  name="id" 
                  label="User Id" 
                  placeholder="L20xxxx"
                  onChange={(e) => setUserId(e.target.value)}  
                />
{/* 
                <label id="accountType">Account type</label> */}
                {/* <Input 
                  type="number" 
                  id="accountType" 
                  name="accountType" 
                  // label="User Id" 
                  placeholder="1"
                  onChange={(e) => setAccountType(e.target.value)}  
                /> */}
                <Input
                  type="select"
                  id="accountType"
                  name="accountType"
                  label="Account Type"
                  options={accountTypeOptions}
                  onChange={(e) => setAccountType(e.target.value)}
                />
                <Input 
                  type="address" 
                  id="address" 
                  name="address" 
                  label="Address" 
                  placeholder="Your Address"
                  onChange={(e) => setAddress(e.target.value)} 
                />   
                <Input 
                  type="password" 
                  id="password" 
                  name="password" 
                  label="Password" 
                  placeholder="************" 
                  onChange={(e) => setPassword(e.target.value)}
                />
                {/* <Input type="password" id="confirmPassword" name="confirmPassword" label="Confirm Password" placeholder="************" /> */}
                <Button type='submit' className='custom-button' value="submit"> Signup </Button>
                <div className="body">{message ? <p>{message}</p> : null}</div>
            </form>
            <div className='register'>
                <label> Already have an account? <Link to="/login">Log in here!</Link></label>
            </div>
        </div>
           
    </div>
  )
}

function Input({type, userid, name, label, placeholder, autofocus, onChange,options}) {
  if (type === "select") {
    return (
      <label className="text-gray-500 block mt-3">{label}
        <select
          id={name}
          name={name}
          className="custom-input"
          onChange={onChange}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </label>
    );
  } else {
    return (
      <label className="text-gray-500 block mt-3">{label}
        <input
          autoFocus={autofocus}
          type={type} 
          userid={userid} 
          name={name} 
          placeholder={placeholder}
          className="custom-input"
          onChange={onChange}
        />
      </label>
    );
  }
}