// import React from 'react'
import AddUser from './AddUser';
import './Top.css';
import './AddUser.css';
import React, { useEffect, useState } from "react";
import { useAuth } from './AuthContext';
import { useNavigate } from 'react-router-dom';
import TakeAttendance from './TakeAttendance';
import { Button } from '@material-ui/core';



function Top(props) {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [newStudent, setNewStudet] = useState([]);
  const [showPopupAdd, setShowPopupAdd] = useState(false);
  const [showPopupAttendance, setShowPopupAttendance] = useState(false);

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

  const handleAddStudent = () => {
    setShowPopupAdd(true); 
  };
  const handleTakeAttendance = () => {
    setShowPopupAttendance(true);

  };
  return (
  <div className='dybamicPage'>
    <div className="CourseContainer">
      <section>
      <div className="top-holder" style={{ display: 'flex', flexDirection: 'row'}}>
        <button className='custom-button-1' style={{ margin: '16px 20px 4px 10px' }} onClick={handleAddStudent}>Enroll Student</button>
        <button className='custom-button-1' style={{ margin: '16px 20px 4px 10px' }} onClick={handleTakeAttendance}>Take Attendance</button>
      </div>
      
        <h2>Course Content</h2>
        <div className="CourseContent">
          <div className='CourseContentRow'>
          {showPopupAdd ? (
                <div>
                <div className="popup">
                  <button onClick={() => setShowPopupAdd(false)} style={{ backgroundColor: 'red' }}>X</button>
                  <AddUser course={props.course}/>
                </div>
                </div>
              ) : (
                // Render the new pop-up when showPopupAttendance is true
                showPopupAttendance ? (
                  
                  <div className="popup" >
                    <h2>Attendance System</h2>
                            <button onClick={() => setShowPopupAttendance(false)} style={{ backgroundColor: 'red' }}>X</button>
                            <TakeAttendance course={props.course}/>
                    
                  </div>
                ) : (
                  
                  <div className='addNewform'>
                    <Button style={{ backgroundColor: 'green' }} onClick={handleAddStudent}>Enroll a Student</Button>
                    '
                    <Button style={{ backgroundColor: 'green' }} onClick={handleTakeAttendance}>Take Attendance</Button>
                    <h2>Course Content</h2>
                    {/* Your existing code for displaying course information */}
                    <p>Course ID: {props.course.courseId}</p>
                    <p>Instructor: {props.course.accountId}</p>
                    <p>{props.course.courseYear}</p>
                  </div>
                )
              )}
            <div>

              
            </div>
          </div>
          
        </div>
      </section>
     
    </div>
  </div>

  )
}

export default Top
