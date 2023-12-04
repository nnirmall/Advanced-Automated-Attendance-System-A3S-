import React from 'react'
import { useState } from 'react';
import './AddUser.css';
import { useAuth } from './AuthContext';




function AddCourse() {

    const { user } = useAuth();
    console.log("me")
    console.log(user.id)


    // console.log("props", props)

    // const [fname, setFName] = useState('');
    // const [lname, setLName] = useState('');
    // const [id, setID] = useState('');
    // const [courseId] = prop
    // console.log(props)

    const handleSubmit = (e) => {
        // console.log("nirmal")
        // console.log(props);
        e.preventDefault();
        // props.addStudent(fname,lname, id);
        // setFName('');
        // setLName('');
        // setID('');
    }; 
  return (
    <div>
      {/* <h1>Add course component</h1> */}
      <div>
      <form className='addNewform' onSubmit={handleSubmit}>
        <h2>Add new Course</h2>

        <div className="input-container">
            <label htmlFor="courseId">Course Id</label>
            <input 
                name="courseId" 
                type="text" 
                value={"courseId"}
                // onChange={(e) => setFName(e.target.value)}
            />
        </div>
        
        <div className="input-container">
            <label htmlFor="name">Course Name</label>
            <input 
                name="name" 
                type="text" 
                value={"name"}
                // onChange={(e) => setLName(e.target.value)}
            />
        </div>

        <div className="input-container">
            <label>UserId</label>
            <input 
                name="addedByUserId" 
                type="text" 
                value={user.id}
                // onChange={(e) => setID(e.target.value)}
            />
        </div>

        <div className="input-container">
            <label htmlFor="courseYear">Course Year</label>
            <input 
                name="courseYear" 
                type="text" 
                value={"courseYear"}
                // onChange={(e) => /* handle change if needed */}
            />
        </div> 
        {/* <div className="input-container">
            <label htmlFor="credit">Credit</label>
            <input 
                name="credit" 
                type="text" 
                value={"props.course.credit"}
            />
        </div> */}

        <button type="submit" className="btn-submit">Add Course</button>
    </form>

    </div>
      
    </div>
  )
}

export default AddCourse
