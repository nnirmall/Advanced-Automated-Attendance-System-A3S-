import React, { useEffect, useState } from "react"
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import './AddUser.css';


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
    const [attemptsLeft, setAttemptsLeft] = useState(1); 


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
      }, []);


      const handleMarkAttandance  = async (e) => {
        e.preventDefault();
        if (attendance.allowMultipleAttendance === false && attemptsLeft === 0) {
          setMessage("No more attempts left");
          return;
        }    
        const newLastAnswer = lastAnswer;
        console.log("Before fetch")
        console.log("Input Data:", {
            attendanceId: attendance.attendanceId,
            studentId: props.getcourse.accountId,
            attendanceMethodId: attendance.attendanceMethodId,
            courseId: attendance.courseId,
            courseName: attendance.courseName,
            instructorId: attendance.instructorId,
            lastAnswer: newLastAnswer,
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
                lastAnswer:newLastAnswer
            }),
            });
            let resJson = await res.json();
            console.log("resJson Mark attendance", resJson);
            if (res.status === 200 ) {
              if(attendance.allowMultipleAttendance === false){
                setAttemptsLeft(attemptsLeft - 1);
              }
                setAttendanceId("");
                setStudentId("");
                setAttendanceMethodId("");
                setCourseId("");
                setCourseName("");
                setInstructorId("");
                setLastAnswer(newLastAnswer);
                setMessage("")
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
                  {attendance.message == "Attendance has not posted today yet."?(
                    <div>
                      <Box sx={{ minWidth: 275 }} margin={4}>
                        <Button />
                      </Box>
                        <h2>{attendance.message}</h2>
                        </div>
                    ):  attendance.attendanceMethodId === 5 && attemptsLeft !== 0 ? (
                          <div className='addNewform' id='takeattendance'>
                            <h2>Question of the Day</h2>
                            <h3>{attendance.title}</h3>
                            <form id="quizForm" onSubmit={handleMarkAttandance}>
                              <Input
                                type="radio" 
                                id="option1" 
                                name="answerOption" 
                                label= {attendance.answerOption1}
                                autofocus={true}
                                onChange={() => setLastAnswer(attendance.answerOption1)}
                              />
                              <Input
                                type="radio" 
                                id="option2" 
                                name="answerOption" 
                                label= {attendance.answerOption2}
                                autofocus={true}
                                onChange={() => setLastAnswer(attendance.answerOption2)}
                              />
                              <Input
                                type="radio" 
                                id="option3" 
                                name="answerOption" 
                                label= {attendance.answerOption3}
                                autofocus={true}
                                onChange={() => setLastAnswer(attendance.answerOption3)}
                              />
                              <Input
                                type="radio" 
                                id="option4" 
                                name="answerOption" 
                                label= {attendance.answerOption4}
                                autofocus={true}
                                onChange={() => setLastAnswer(attendance.answerOption4)}
                              />
                              
                              <button type='submit' className='custom-button' value="submit"  disabled={attemptsLeft === 0}> Submit </button>
                              <div className="body">{message ? <p>{message}</p> : null}</div>
                            </form>
                          </div>                 
                        ): ( attendance.attendanceMethodId === 2 && attemptsLeft !== 0 ?(
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
                            ):( attendance.attendanceMethodId === 3 && attemptsLeft !== 0 ?(
                              <div className='addNewform'>
                                <h2>Image of the Day</h2>
                                <h3>{attendance.title}</h3>
                                <img src={process.env.PUBLIC_URL + '/img/image.png'} alt="Questionimage" />
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
                            ):
                            (
                              <div>
                                No more attempts left
                              </div>
                            )
                            )
                  )}
                </div>
            </div>
        </div>
    );
}
function Input({type, userid, name, label, placeholder, autofocus, onChange,options}) {
  if (type === "select") {
    return (
      <label className="text-gray-500 block mt-3">{label}
        <select
          id={name}
          name={name}
          className="custom-input"
          onChange={onChange}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </label>
    );
  } else {
    return (
      <label className="text-gray-500 block mt-3">{label}
        <input
          autoFocus={autofocus}
          type={type} 
          userid={userid} 
          name={name} 
          placeholder={placeholder}
          className="custom-input"
          onChange={onChange}
        />
      </label>
    );
  }
}



export default MarkAttendance;
