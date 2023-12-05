import React, { useEffect, useState } from "react"

function MarkAttendance(props) {
    console.log("course",props.getcourse);
    console.log("addedByUserId",props.getcourse.addedByUserId);
    // const addedByUserId = ''
    // const { attendanceMethodId } = props;
    const [attendance, setAttendance] = useState([]);
    const [markAttendance, setMarkAttendance] = useState([]);
    const [attendanceId,setAttendanceId] = useState([]);
    const [studentId,setStudentId] = useState([]);
    const [attendanceMethodId,setAttendanceMethodId] = useState([]);
    const [courseId,setCourseId] = useState([]);
    const [courseName,setCourseName] = useState([]);
    const [instructorId,setInstructorId] = useState([]);
    const [lastAnswer,setLastAnswer] = useState([]);
    const [message, setMessage] = useState("");


    const fetchAttendence = () => {
        // console.log("API URL:", apiUrl);
        fetch(`https://localhost:7220/api/Attendance/current-attendance-info-for-student?courseId=${props.getcourse.courseId}&instructorId=${props.getcourse.addedByUserId}`,{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        })
        .then(response => response.json())
        .then((data) => setAttendance(data))
    }
      useEffect(() => {
        fetchAttendence()
      }, [attendance]);


      const handleMarkAttandance  = async (e) => {
        e.preventDefault();
        console.log("Before fetch")
        console.log("Input Data:", {
            attendanceId: attendance.attendanceId,
            studentId: props.getcourse.accountId,
            attendanceMethodId: attendance.attendanceMethodId,
            courseId: attendance.courseId,
            courseName: attendance.courseName,
            instructorId: attendance.instructorId,
            lastAnswer: lastAnswer,
        });
        try {
            let res = await fetch("https://localhost:7220/api/Attendance/take-attendance-by-student", {
            method: "POST",
            headers: {
                "Content-Type": "application/json", // Specify that you are sending JSON data
            },
            body:JSON.stringify({
                attendanceId:attendance.attendanceId,
                studentId:props.getcourse.accountId,
                attendanceMethodId:attendance.attendanceMethodId,
                courseId:attendance.courseId,
                courseName:attendance.courseName,
                instructorId:attendance.instructorId,
                lastAnswer:lastAnswer
                
            }),

            });
            let resJson = await res.json();
            console.log("ATTE", resJson);
            if (res.status === 200) {
                setAttendanceId("");
                setStudentId("");
                setAttendanceMethodId("");
                setCourseId("");
                setCourseName("");
                setInstructorId("");
                setLastAnswer("");
            setMessage("Attendance Marked Successfully");
            } else {
            setMessage("Some error occured");
            }
        } catch (err) {
            console.log("sdfsdf:" +err);
        }
        };

  return (
    <div>
      <div className="CourseContent">
        <div className="CourseContentRow">
        {console.log("response Attendance:", attendance)}
          {attendance.attendanceMethodId === 2 ? (
            <div className='addNewform'>
              <h2>Question of the Day</h2>
              <h3>{attendance.title}</h3>
              <form onSubmit={handleMarkAttandance}>                 
                <input 
                  type="text" 
                  id="lastanswer" 
                  name="lastanswer" 
                  label="Answer" 
                  placeholder="Your answer" 
                  autoFocus={true}
                  onChange={(e) => setLastAnswer(e.target.value)}
                />
                <button type='submit' className='custom-button' value="submit"> Submit </button>
                <div className="body">{message ? <p>{message}</p> : null}</div>
            </form>
            </div>
          ) : (
            <div className='addNewform'>
              
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default MarkAttendance;
