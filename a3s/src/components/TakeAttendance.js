import React from 'react';
import { useState } from "react";
import { Button } from '@material-ui/core';
import './AddUser.css';


function TakeAttendance(props) {
  // console.log("Hello",props)
  const [instructorId, setInstructorId] = useState("");
  const [attendanceMethodId, setAttendanceMethodId] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [allowMultipleAttendance, setAllowMultipleAttendance] = useState("");
  const [answerOption1, setAnswerOption1] = useState("");
  const [answerOption2, setAnswerOption2] = useState("");
  const [answerOption3, setAnswerOption3] = useState("");
  const [answerOption4, setAnswerOption4] = useState("");
  const [courseId, setCourseId] = useState("");
  const [courseName, setCourseName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [message, setMessage] = useState("");

  const allowMultipleAttendanceOptions = [
    { value: 0, label: "NO" },
    { value: 1, label: "Yes" },
  ];

  let handleAttendanceSubmit = async (e)=> {
    e.preventDefault();
    let requestBody = {
      instructorId: props.course.accountId,
      title: title,
      attendanceMethodId: parseInt(attendanceMethodId),
      description: description,
      startDate: startDate,
      endDate: endDate,
      allowMultipleAttendance: Boolean(allowMultipleAttendance),
      courseId: props.course.courseId,
      courseName: props.course.courseId,
      imageUrl: "",
      message: message,
    };
    console.log("requestBody", requestBody)


    // Include correctAnswer and answerOptions only when attendanceMethodId is "0"
    if (attendanceMethodId === "1") {
      requestBody = {
        ...requestBody,
        correctAnswer: correctAnswer,
        answerOption1: answerOption1,
        answerOption2: answerOption2,
        answerOption3: answerOption3,
        answerOption4: answerOption4,
      };
    }
    else {
      requestBody = {
        ...requestBody,
        correctAnswer: "",
        answerOption1: "",
        answerOption2: "",
        answerOption3: "",
        answerOption4: "",
      };
    }
    try {
      console.log("requestBody",requestBody)
      let res = await fetch("https://localhost:7220/api/Attendance/take-attendance-by-instructor", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Specify that you are sending JSON data
        },
        body:JSON.stringify(requestBody),
      });

      let resJson = await res.json();
      console.log("res",resJson);
      if (res.status === 200) {
        setInstructorId("");
        setAttendanceMethodId("");
        setTitle("");
        setCorrectAnswer("");
        setStartDate("");
        setEndDate("");
        setAllowMultipleAttendance("");
        setAnswerOption1("");
        setAnswerOption2("");
        setAnswerOption3("");
        setAnswerOption4("");
        setCourseId("");
        setCourseName("");
        setImageUrl("");
        setMessage("Attendance created successfully");
      } else {
        setMessage("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  }

  const renderCorrectAnswerOptions = () => {
    if (attendanceMethodId === "4") {
      return (
        <>
        {/* {console.log("response Attendance:", attendance)} */}
          <Input
            type="text"
            id="answerOption1"
            name="answerOption1"
            label="Option 1"
            placeholder="Option 1"
            onChange={(e) => setAnswerOption1(e.target.value)}
          />
          <Input
            type="text"
            id="answerOption2"
            name="answerOption2"
            label="Option 2"
            placeholder="Option 2"
            onChange={(e) => setAnswerOption2(e.target.value)}
          />
          <Input
            type="text"
            id="answerOption3"
            name="answerOption3"
            label="Option 3"
            placeholder="Option 3"
            onChange={(e) => setAnswerOption3(e.target.value)}
          />
          <Input
            type="text"
            id="answerOption4"
            name="answerOption4"
            label="Option 4"
            placeholder="Option 4"
            onChange={(e) => setAnswerOption4(e.target.value)}
          />
        </>
      );
    }
  };
  
  return (
    <div>
            <div className='addNewform' id='takeattendance'>
                <form id="quizForm" onSubmit={handleAttendanceSubmit} >
                  <Input 
                    type="number" 
                    id="type" 
                    name="attendanceMethodId" 
                    label="Attendance Method" 
                    placeholder="1,2,3" 
                    autofocus={true}
                    onChange={(e) => setAttendanceMethodId(e.target.value)}
                  />
                  <Input 
                    type="text" 
                    id="title" 
                    name="title" 
                    label="Title of the quiz" 
                    placeholder="Title of the quiz" 
                    autofocus={true}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                  {renderCorrectAnswerOptions()}
                  <Input 
                    type="text" 
                    id="description" 
                    name="description" 
                    label="Description" 
                    placeholder="Description" 
                    autofocus={true}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                  <Input 
                    type="text" 
                    id="correctAnswer" 
                    name="correctAnswer" 
                    label="Correct Answer" 
                    placeholder="Correct Answer" 
                    autofocus={true}
                    onChange={(e) => setCorrectAnswer(e.target.value)}
                  />
                  <Input 
                    type="datetime-local" 
                    id="startDate" 
                    name="startDate" 
                    label="Start Date and time of quiz" 
                    placeholder="2023-12-04 14:04" 
                    autofocus={true}
                    onChange={(e) => setStartDate(e.target.value)}
                  />
                  <Input 
                    type="datetime-local" 
                    id="endDate" 
                    name="endDate" 
                    label="End Date and time of quiz" 
                    placeholder="2023-12-04 14:04" 
                    autofocus={true}
                    onChange={(e) => setEndDate(e.target.value)}
                  />
                  <Input 
                    type="select" 
                    id="allowMultipleAttendance" 
                    name="allowMultipleAttendance" 
                    label="Allow Multiple Attendance?" 
                    options={allowMultipleAttendanceOptions}
                    autofocus={true}
                    onChange={(e) => setAllowMultipleAttendance(e.target.value)}
                  />
                <Button type='submit' className='custom-button' value="submit"> Add Attendance </Button>
                </form>
            </div>
    </div>
  );
}

export default TakeAttendance;

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