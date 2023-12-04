import React from 'react'
import { useState } from 'react';
import './AddUser.css';
import { useAuth } from './AuthContext'


export default function AddUser(props) {

    const [courseId, SetCourseId] = useState('');
    const [accountId, SetAccountId] = useState('');
    const [courseYear, setCourseYear] = useState('');
    const [message, setMessage] = useState("");
    // const { user } = useAuth();

    console.log("what is props",props)
    console.log("what is props.course",props.course)

    const handleAddSubmit = async (e) => {
        e.preventDefault(); 
        try {
            if (!props.course || !props.course.accountId) {
                console.error("User information is not available.");
                return;
              }
            console.log("i am inside try 1st")
            let res = await fetch("https://localhost:7220/api/Course/add-to-course", {
              method: "POST",
              headers: {
                "Content-Type": "application/json", // Specify that you are sending JSON data
              },
              body:JSON.stringify({
                courseId: props.course.courseId,
                accountId: accountId,
                courseYear: courseYear,
                addedByUserId: props.course.accountId
              }),
        
        
            });
            let resJson = await res.json();
            console.log("where am i")

            if (res.status === 200) {
                SetCourseId("");
                SetAccountId("");
                setCourseYear("");
                setMessage("Student Added successfully");
            } else {
              setMessage("Some error occured");
            }
          } catch (err) {
            console.log("I am at catch")

            console.log(err);
          }
    };    
  return (
    <div>
    <div className="body">{message ? <p>{message}</p> : null}</div>

      <form className='addNewform' onSubmit={handleAddSubmit}>
        <h2>Add new Student</h2>

        <div className="input-container">
            <label htmlFor="name">Course Id</label>
            <input 
                name="courseId" 
                type="text" 
                value={props.course.courseId}
                onChange={(e) => SetCourseId(e.target.value)}
            />
        </div>
        
        <div className="input-container">
            <label htmlFor="name">Student Account Id</label>
            <input 
                name="accountId" 
                type="text" 
                value={accountId}
                required
                onChange={(e) => SetAccountId(e.target.value)}
            />
        </div>

        <div className="input-container">
            <label>Course Year</label>
            <input 
                name="courseYear" 
                type="number" 
                value={courseYear}
                required
                onChange={(e) => setCourseYear(e.target.value)}
            />
        </div>

        {/* <div className="input-container">
            <label htmlFor="coursename">Course Name</label>
            <input 
                name="coursename" 
                type="text" 
                value={props.course.coursename} 
            />
        </div> */}

        <button type="submit" className="btn-submit">Add Student</button>
    </form>

    </div>
  )
}


