import React, { useEffect, useState } from "react"

function SpecificCourse() {
    const [speCour, setSpeCour] = useState([]);
    const fetchSpecificCourse = () => {
        // fetching data of course
        fetch('https://my-json-server.typicode.com/nnirmall/API_A3S_practice/students')
        .then(response => response.json())
        .then((data) => setSpeCour(data))
    }

    useEffect(()=>{
        fetchSpecificCourse()
    },[]);

    
  return (
    <div>
              <section >
                <h2>Student Lists</h2>
                <div className="row">
                {speCour.map((std) => 
                <StudentList 
                    key={std.id} 
                    id={std.id}
                    coursename={std.coursename} 
                    courseId={std.courseId}
                    firstName={std.fname}
                    lastName = {std.lanem}
                    credit={std.credit}
                />
                )}
                        </div>
            </section>
    </div>
  )
}

function StudentList(props){
    return(
        <div className="card">
            <h2>{props.coursename}</h2>
            <p >Course ID: {props.courseId}</p>
            <p >Name: {props.firstName} {props.lastName}</p>
            <p >Credit: {props.credit}</p>
        </div>
    )
}

export default SpecificCourse
