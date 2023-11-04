
import React, { useEffect, useState } from "react"
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
  
    return (
      <div>
        <section >
                <h2>Courses</h2>
                {users.map((cor) => 
                <Courses 
                    key={cor.id} 
                    id={cor.id}
                    coursename={cor.coursename} 
                    courseId={cor.courseId}
                    Instructor={cor.Instructor}
                    TotalEnrollment={cor.TotalEnrollment}
                    credit={cor.credit}
                />
                )}
            </section>
      </div>
    );
  }

  function Courses(props) {
    return (
        <div className="post-card">
            <h2>{props.coursename}</h2>
            <p >{props.courseId}</p>
            <p >{props.Instructor}</p>
            <p >{props.password}</p>
            <p >{props.TotalEnrollment}</p>
            <p >{props.credit}</p>
        </div>
    )   
  }