import React, { useEffect, useState } from "react"
import { useAuth } from './AuthContext';
import { render } from '@testing-library/react';

import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';
import { BarChart } from '@mui/x-charts/BarChart';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';



function Reports() {
    const { user } = useAuth();
    //console.log("hiddd", user.id);
    const [items, setItems] = useState([]);
    const [data, setData] = useState([]);
    const [TOTAL, setTotal] = useState("");
    const [getArcLabel, setgetArcLabel] = useState("");
    const [userId, setUserId] = useState([]);

    const [courseId, setCourseId] = useState("");
    const [courseYear, setCourseYear] = useState("");

    const [AttendanceDate, setAttendanceDate] = useState([]);
    const [AttendanceCount, setAttendanceCount] = useState([]);
    const [AttendanceDataReady, setAttendanceDataReady] = useState(false);
    
    //setUserId(user.id);
    const sizing = {
      margin: { right: 5 },
      width: 200,
      height: 200,
      legend: { hidden: true },
    };

    let handleReportSubmit = async (e)=> {
      e.preventDefault();
      let requestBody = {
        instructorId: user.id,
        courseId: courseId,
        courseYear: courseYear
      };
      try {
        console.log("requestBody",requestBody)
        let res = await fetch("https://localhost:7220/api/Attendance/attendance-report-by-instructor", {
          method: "POST",
          headers: {
            "Content-Type": "application/json", // Specify that you are sending JSON data
          },
          body:JSON.stringify(requestBody),
        });
  
        let resJson = await res.json();
        

        console.log(resJson);
        if (res.status === 200) {
          
          const data1 = [
            { label: 'Total Attendance Taken', value: resJson.totalAttendanceTaken, color: '#0088FE' },
            { label: 'Total Class Taken', value: resJson.totalClassTaken, color: '#00C49F' },
          
          ];         
          setData(data1);
          var TOTAL1 = data1.map((item) => item.value).reduce((a, b) => a + b, 0);
          
          console.log("hello", data);
          setTotal(TOTAL1);

          
          var abc = resJson.attendanceRecord;
          
          console.log("abc", abc);

          const dates = [];
          const days = [];
          for (const [key, value] of Object.entries(abc)) {
            console.log(key);
            dates.push(key.substring(0,10));
            days.push(value);
          }

          // console.log("22", dates);
          // console.log("222", days);

          setAttendanceDate(dates);
          setAttendanceCount(days);

          console.log("wow", AttendanceDate);
          console.log("wow1", AttendanceCount);
          
          var getArcLabel1 = (params) => {
            const percent = params.value / TOTAL;
            return `${(percent * 100).toFixed(0)}%`;


          };    
          setgetArcLabel(getArcLabel1);
          //var{isLoaded,items}= this.state;
          //console.log('birbsl' + items);
          setAttendanceDataReady(true);
          console.log("sdfshdsdf", AttendanceDataReady);
        } else {
          //setMessage("Some error occured");
        }
      } catch (err) {
        console.log(err);
      }
    }


    
    
  return (    
    // <div>
    //   <form id="quizForm" onSubmit={handleReportSubmit} >
    //   <Button type='submit' className='custom-button' value="submit"> Add Attendance </Button>
    //             </form>
    // </div>

    <div style={{
      display: 'inline',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
    }}>
      <form id="quizForm" onSubmit={handleReportSubmit} >

      <div style={{
      display: 'flex',
      margin: '10px',
      padding: '40px',
    }}>
          <Typography style={{margin:20}} variant="body2" component="div" sx={{ fontSize: 20 }} color="text.secondary" >Course Id</Typography>
          <input style={{margin:20}} type="text" className="custom-input" label="Course Id" placeholder="COSC 1200" onChange={e => setCourseId(e.target.value)} />
          <Typography style={{margin:20}} variant="body2" component="div" sx={{ fontSize: 20 }} color="text.secondary" >Course Year</Typography>
          <input style={{margin:20}} type="text" className="custom-input"  label="Course Year" placeholder="2023"  onChange={e => setCourseYear(e.target.value)} />
          <Button style={{margin:20}} type='submit' value="submit"> Search </Button>
    </div>
      
      <div>
        {AttendanceDataReady ? (<div>
          

      <Typography style={{
        display: 'flex',
        alignItems: 'center',
        left: '50%',
        justifyContent: 'center',
      }} variant="body2" component="div" sx={{ fontSize: 44 }} color="text.secondary" >Attendance Report</Typography>
      
          <div style={{
        display: 'flex',
        alignItems: 'center',
        left: '50%',
        justifyContent: 'center',
      }}>
        
      <PieChart  
      series={[
        {
          outerRadius: 80,
          data,
          arcLabel: getArcLabel,
        },
      ]}
      sx={{
        [`& .${pieArcLabelClasses.root}`]: {
          fill: 'white',
          fontSize: 14,
        },
      }}
      {...sizing}
    />
    </div>
    <Typography style={{
        display: 'flex',
        alignItems: 'center',
        left: '50%',
        justifyContent: 'center',
      }} variant="body2" component="div" sx={{ fontSize: 24 }} color="text.secondary" >Total Attendance Percentage</Typography>
    
    <div style={{
        display: 'flex',
        alignItems: 'center',
        left: '50%',
        justifyContent: 'center',
      }}>
        <BarChart 
      xAxis={[{ scaleType: 'band', data: AttendanceDate }]}
      series={[{ data: AttendanceCount }]}
      width={500}
      height={300}
    />
    
    </div>

    <Typography style={{
        display: 'flex',
        alignItems: 'center',
        left: '50%',
        justifyContent: 'center',
      }} variant="body2" component="div" sx={{ fontSize: 24 }} color="text.secondary" >Attendance by days</Typography>
        </div>):(<div></div>)}
        </div>
    </form>
    </div>
  )

  
function Input({ type, id, name, label, placeholder, autoFocus, onChange }) {
  return (
      <label className="text-gray-500 block mt-3">{label}
          <input
              autoFocus={autoFocus}
              type={type}
              id={id}
              name={name}
              placeholder={placeholder}
              className="custom-input"
              onChange={onChange}
          />
      </label>
  )
}
}




export default Reports
