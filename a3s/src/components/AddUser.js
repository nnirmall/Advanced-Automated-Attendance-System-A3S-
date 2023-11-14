import React from 'react'
import { useState } from 'react';
import './AddUser.css';

export default function AddUser(props) {

    const [fname, setFName] = useState('');
    const [lname, setLName] = useState('');
    const [id, setID] = useState('');
    // const [courseId] = prop
    console.log(props)

    const handleSubmit = (e) => {
        // console.log("nirmal")
        // console.log(props);
        e.preventDefault();
        props.addStudent(fname,lname, id);
        setFName('');
        setLName('');
        setID('');
    };    
  return (
    <div>
      <form className='addNewform' onSubmit={handleSubmit}>
        <h2>Add new Student</h2>

        <div className="input-container">
            <label htmlFor="name">FName</label>
            <input 
                name="fname" 
                type="text" 
                value={fname}
                onChange={(e) => setFName(e.target.value)}
            />
        </div>
        
        <div className="input-container">
            <label htmlFor="name">LName</label>
            <input 
                name="lname" 
                type="text" 
                value={lname}
                onChange={(e) => setLName(e.target.value)}
            />
        </div>

        <div className="input-container">
            <label>ID</label>
            <input 
                name="number" 
                type="number" 
                value={id}
                onChange={(e) => setID(e.target.value)}
            />
        </div>

        <div className="input-container">
            <label htmlFor="coursename">Course Name</label>
            <input 
                name="coursename" 
                type="text" 
                value={props.course.coursename} // assuming coursename is a prop
                // onChange={(e) => /* handle change if needed */}
            />
        </div>

        <div className="input-container">
            <label htmlFor="courseId">Course ID</label>
            <input 
                name="courseId" 
                type="text" 
                value={props.course.courseId} // assuming courseId is a prop
                // onChange={(e) => /* handle change if needed */}
            />
        </div>

        <div className="input-container">
            <label htmlFor="credit">Credit</label>
            <input 
                name="credit" 
                type="text" 
                value={props.course.credit}  // assuming credit is a prop
                // value = "3"
                
                // onChange={(e) => /* handle change if needed */}
            />
        </div>

        <button type="submit" className="btn-submit">Add Post</button>
    </form>

    </div>
  )
}


