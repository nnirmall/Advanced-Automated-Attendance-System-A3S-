
import React, { useEffect, useState } from "react"
import './Course.css';
// import Top from "./Top";
import SideBar from "./SideBar";
// import SpecificCourse from "./SpecificCourse";
import Top from "./Top";
import { Link } from 'react-router-dom'

import { useAuth } from './AuthContext';
import AddCourse from "./AddCourse";


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
    },[]);

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
    
  
    // ... (previous code)

// ... (previous code)

return (
  <div className="App">
    <div className='container'>
      <SideBar />
      <div className='dybamicPage'>
        <div className="CourseContainer">
          {user.accountType === 1 && showPopup ? (
            // Render the pop-up when showPopup is true
            <div className="popup">
              <button onClick={() => setShowPopup(false)}>Go back to course List</button>
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
              user.accountType === 2 && showStudentViewPopup ? (
                <div className="popup">
                  {/* Add content for the student view pop-up here */}
                  {/* Example: */}
                  <button onClick={() => setShowStudentViewPopup(false)} style={{ backgroundColor: 'red' }}>X</button>
                  <h2>Mark Attendance</h2>
                  <div className="CourseContent">
                    <div className="CourseContentRow">
                        <div className='addNewform'>
                            <h2>Question of the Day</h2>
                            <p>What is the capital of France?</p>
                            <form id="quizForm" >
                                <label>
                                <input type="radio" name="answer" value="a" /> Paris
                                </label>
                                <label>
                                <input type="radio" name="answer" value="b" /> London
                                </label>
                                <label>
                                <input type="radio" name="answer" value="c" /> Berlin
                                </label>
                                <label>
                                <input type="radio" name="answer" value="d" /> Madrid
                                </label>
                                <button type="button" onClick={submitQuiz}>
                                Submit
                            </button>
                            </form>
                        </div>
                        <div className='addNewform'>
                            <div className="random-number-section">
                                <h2>Random Number of the Day</h2>
                                <h3>Random Number is: </h3>
                                <h4 id="num" onLoad={GenRandomNumber}></h4>
                                <p id="randomNumber"></p>
                                <label htmlFor="inputNumber">Enter Random Number:</label>
                                <input type="number" id="inputNumber" />
                                <button type="button" onClick={submitRandomNumber}>
                                    Submit
                                </button>
                            </div>
                        </div>
                      
                    </div>

                  
                  </div>
                  {/* Add more content as needed */}
                </div>
              ) : (
                // Render the default section when neither pop-up is active
                <section>
                  {console.log("response:", users)}
                  {user.accountType === 1 ? (
                    <h2>Instructor Course Lists</h2>
                  ) : (
                    <h2>Student Enrolled list</h2>
                  )}
                  <div className="row">
                    {users.map((item, index) => (
                      <div key={index}>
                        <div
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
                        </div>
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