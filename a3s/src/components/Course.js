
import React, { useEffect, useState } from "react"
import './Course.css';
// import Top from "./Top";
import SideBar from "./SideBar";
// import SpecificCourse from "./SpecificCourse";
import Top from "./Top";
// import { Link } from 'react-router-dom'

import { useAuth } from './AuthContext';
import AddCourse from "./AddCourse";
import MarkAttendance from "./MarkAttendance";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function Course() {
    const { user } = useAuth();
      console.log("I am user",user)

    const [users, setCourse] = useState([]);
    const [selectedCourse, setSelectedCourse] = useState(null);
    const [showPopup, setShowPopup] = useState(false); 
    const [showAddStudentPopup, setShowAddStudentPopup] = useState(false);
    const [showStudentViewPopup, setShowStudentViewPopup] = useState(false); 
    
    

    // const [cardPopup, setCardPopup] = useState(false);
    const fetchCourses = () => {
        // fetching data of course
        // fetch('https://localhost:7220/api/Course/all-courses-catalog-by-user-id/L20422171')
 fetch(`https://localhost:7220/api/Course/all-enrolled-courses?userId=${user.id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Specify that you are sending JSON data
      },
    })
        .then(response => response.json())
        .then((data) => setCourse(data))
    }
    // console.log(setCourse)

    useEffect(()=>{
      console.log("Calling fetchCourses with user:", user);
        fetchCourses()
        // console.log("response:", users)
    },[user]);

    // const addUser =(username,password) =>{

    // };

    // const deleteUser = (id) => {

    // };

    const handleClick = (event, course) => {
      event.stopPropagation();
      setSelectedCourse(course);
      setShowPopup(true);
      console.log("Clicked course:", course);
      console.log("Event:", event);
    }

    const handleAddCourse = () => {
      setShowAddStudentPopup(true); 
    };

    const handleExpandClick = (event, course) => {
      event.stopPropagation();
      setSelectedCourse(course);
      setShowStudentViewPopup(true);
      if (user.accountType === 1) {
        setShowPopup(true);
      } else {
        setShowStudentViewPopup(true);
      }
    }

return (
  <div className="App">
    <div className='container'>
      <SideBar />
      <div className='dybamicPage'>
        <div className="CourseContainer" >
          {user.accountType === 1 && showPopup ? (
            // Render the pop-up when showPopup is true
            <div className="popup">
              <Button style={{ margin: '16px 20px 4px 24px' }} variant="outlined" size="small" onClick={() => setShowPopup(false)}>Back</Button>
              <Top course={selectedCourse} />
            </div>
          ) : (
            // Render the new pop-up when showAddStudentPopup is true
            user.accountType === 1 && showAddStudentPopup ? (
              <div className="popup">
                <button onClick={() => setShowAddStudentPopup(false)} style={{ backgroundColor: 'red' }}>X</button>
                {/* Add the content for the attendance pop-up here */}
                <AddCourse />
              </div>
            ) : (
              // Render the new pop-up for user.accountType === 2
              user.accountType === 2 && showStudentViewPopup && selectedCourse ? (

                <div className="popup">
                  {/* Add content for the student view pop-up here */}
                  {/* Example: */}
                  <button onClick={() => setShowStudentViewPopup(false)} style={{ backgroundColor: 'red' }}>X</button>
                  <MarkAttendance getcourse={selectedCourse}/>
                  {/* Add more content as needed */}
                </div>
              ) : (
                // Render the default section when neither pop-up is active
                <section>
                  {console.log("responsehw:", users)}
                  {user.accountType === 1 ? (
                    <h2>Instructor Course Lists</h2>
                  ) : (
                    <h2>Student Enrolled list</h2>
                  )}
                  <div className="row">
                    {users.map((item, index) => (
                      <div key={index}>
                        {/* <div
                          className="card"
                          onClick={(event) => {
                            if (user.accountType === 2) {
                              // Open the new pop-up for user.accountType === 2
                              setShowStudentViewPopup(true);
                            } else {
                              handleClick(event, item);
                            }
                          }}
                        >
                          <p>Course ID: {item.courseId}</p>
                          <p>Instructor: {item.accountId}</p>
                          <p>{item.courseYear}</p>
                        </div> */
                        
                        <Box sx={{ minWidth: 275 }} margin={4}>
                            <Card variant="outlined">
                                <CardContent>
                                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                      Start: {item.courseStartDatetime} | End: {item.courseEndDatetime}
                                    </Typography>
                                    <Typography variant="body2" component="div">
                                    Course Name: {item.courseName}
                                    </Typography>
                                    <Typography variant="body2" component="div">
                                    Course ID: {item.courseId}
                                    </Typography>
                                    <Typography variant="body2" component="div">
                                    Instructor ID: {item.accountId}
                                    </Typography>
                                    <Typography variant="body2" component="div">
                                    Course Year: {item.courseYear}
                                    </Typography>
                                    {/* <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                      adjective
                                    </Typography>
                                    <Typography variant="body2">
                                    Course ID: {item.courseId}
                                      <br />
                                      {'"a benevolent smile"'}
                                    </Typography> */}
                            </CardContent>
                            <CardActions>
                            <Button
                                variant="outlined"
                                size="small"
                                onClick={(event) => handleExpandClick(event, item)}
                              >
                                Expand
                              </Button>
                          </CardActions>
                          </Card>
                        </Box>

                        }
                      </div>
                    ))}
                  </div>
                </section>
              )
            )
          )}
        </div>
      </div>
    </div>
  </div>
);


  }
//   const inputChangedHandler = e => {
//     // setForm({
//     //     ...form,
//     //     data: {
//     //         ...form.data,
//     //         [e.target.id]: e.target.value
//     //     }
//     // })
//     console.log("here i am")
//     console.log(e.target.id)
//     console.log(e.target.id)

// }


// return (
//   <div>
    
//   </div>
// );


  // function handleSpecificCourse(pathname) {
  //  console.log(pathname)

  //  window.location.pathname = '/SpecificCourse'
  // }
//   function Courses(props) {
//     console.log("wow")
//     return (
// //       <div class="CardContainer">
// //         <div class="cardRow">
// //         {props.coursename}
// //         </div>
// // </div>

         
          
  //   )   
  // }


  function submitQuiz() {
    // Implement quiz submission logic
  }
  
  function GenRandomNumber() {
    // Implement logic to generate a random number
  }
  
  function submitRandomNumber() {
    // Implement logic to submit the random number
  }