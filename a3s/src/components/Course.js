
import React, { useEffect, useState } from "react"
import './Course.css';
// import Top from "./Top";
import SideBar from "./SideBar";
// import SpecificCourse from "./SpecificCourse";
import Top from "./Top";
import { Link } from 'react-router-dom'

import { useAuth } from './AuthContext';


export default function Course() {
    const { user } = useAuth();
      console.log(user)

    const [users, setCourse] = useState([]);
    const [selectedCourse, setSelectedCourse] = useState(null);
    const [showPopup, setShowPopup] = useState(false); 
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
    
  
    return (
      <div className="App">
        <div className='container'>
          
          <SideBar/>
          <div className='dybamicPage'>
      <div className="CourseContainer">
      {showPopup ? ( // Render the pop-up when showPopup is true
                            <div className="popup">
                              <button onClick={() => setShowPopup(false)}>Go back to course List</button>
                                <Top course={selectedCourse} />
                                
                            </div>
                        ) : (
        <section >
        
          {console.log("response:", users)}
                <h2>Course Lists</h2>
                <div className="row">
                {/* {users.map((cor) => 
                <Courses 
                    key={cor.id} 
                    id={cor.id}
                    coursename={cor.coursename} 
                    courseId={cor.courseId}
                    Instructor={cor.Instructor}
                    TotalEnrollment={cor.TotalEnrollment}
                    credit={cor.credit}
                />
                )} */}
                {users.map((item, index) => (
                <div key={index}>
                  {/* {item} */}
                  <div className="card"
                onClick={(event) => handleClick(event, item)}
                >
                  {/* <h2>{item.coursename}</h2> */}
                  <p >Course ID: {item.courseId}</p>
                  <p >Instructor: {item.accountId}</p>
                  <p >{item.courseYear}</p>
                  {/* <p>{user.id}</p> */}
                  {/* <p >TotalEnrollment: {item.TotalEnrollment}</p> */}
                  {/* <p >Credit: {item.credit}</p> */}
                </div>
                </div>
              ))}
                        </div>
            </section>
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