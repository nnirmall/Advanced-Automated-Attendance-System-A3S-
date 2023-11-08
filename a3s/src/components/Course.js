
import React, { useEffect, useState } from "react"
import './Course.css';
import Top from "./Top";
export default function Course() {
    const [users, setCourse] = useState([]);
    const fetchCourses = () => {
        // fetching data of course
        fetch('https://my-json-server.typicode.com/nnirmall/API_A3S_practice/courses')
        .then(response => response.json())
        .then((data) => setCourse(data))
    }

    useEffect(()=>{
        fetchCourses()
    },[]);

    // const addUser =(username,password) =>{

    // };

    // const deleteUser = (id) => {

    // };

    const handleClick = (item) => {
     console.log(item.courseId);
     <Top
     coursename={item.coursename} 
     />
    }
    
  
    return (
      <div className="CourseContainer">

        <section >
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
                onClick={() => handleClick(item)}
                >
                  <h2>{item.coursename}</h2>
                  <p >Course ID: {item.courseId}</p>
                  <p >Instructor: {item.Instructor}</p>
                  <p >{item.password}</p>
                  <p >TotalEnrollment: {item.TotalEnrollment}</p>
                  <p >Credit: {item.credit}</p>
                </div>
                </div>
              ))}
                        </div>
            </section>
  
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