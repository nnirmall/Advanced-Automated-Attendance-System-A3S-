// import React from 'react'
import AddUser from './AddUser';
import './Top.css';
import './AddUser.css';
import React, { useEffect, useState } from "react"


function Top(props) {
  const [newStudent, setNewStudet] = useState([]);

  const fetchUsers = () => {
    fetch('https://my-json-server.typicode.com/nnirmall/API_A3S_practice/students')
    .then((respose)=> respose.json())
    .then((data) => setNewStudet(data))
  }

  useEffect(() => {
    fetchUsers()
  }, []);

  const addStudent = (fname,lname,id) => {
    fetch('https://my-json-server.typicode.com/nnirmall/API_A3S_practice/students',{
      method: 'POST',
      body: JSON.stringify({
        fname:fname,
        lname:lname,
        id:id
      }),
      headers:{
        'Content-type':'application/json; charset=UTF-8',
      },
    })
    .then((response) => response.json())
    .then((data) => setNewStudet((prevStudents) => [...prevStudents, data]));
  } 

  // console.log(props.course);
  const handleGoToCourseList = () => {
    window.location.href = '/course';
  };
  const handleAddStudent = () => {
    window.location.href = '/SpecificCourse';
  };
  const handleTakeAttendance = () => {
    window.location.href = '/course';
  };
  return (
  <div className='dybamicPage'>
    <div className="CourseContainer">
      <section >
      <button onClick={handleGoToCourseList}>Go to Course List</button>
      <button onClick={handleAddStudent}>Enroll a Student</button>
      <button onClick={handleTakeAttendance}>Take Attendance</button>
        <h2>Course Content</h2>
        <div className="CourseContent">
          <div className='CourseContentRow'>
            <div className='addNewform'>
              <h2>{props.course.coursename}</h2>
              <p >Course ID: {props.course.courseId}</p>
              <p >Instructor: {props.course.Instructor}</p>
              <p >{props.course.password}</p>
              <p >TotalEnrollment: {props.course.TotalEnrollment}</p>
              <p >Credit: {props.course.credit}</p>
            </div>
            <div>
              <AddUser addStudent={addStudent} course={props.course}/>
            </div>
          </div>
          
        </div>
      </section>
     
    </div>
  </div>

  )
}

export default Top
