import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SideBar from './components/SideBar';
import Dashboard from './components/Dashboard';
import Course from './components/Course';
// Reports
import Preferences from './components/Preferences/Preferences';
import Reports from './components/Reports';
import Profile from './components/Course/Profile';
import SpecificCourse from './components/SpecificCourse';
function App() {

  return (
    <Router>
      <div className="App">
        <div className='container'>
          <SideBar/>
          <div className='dybamicPage'>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/profile" element={<Profile />} /> 
              <Route path="/course" element={<Course />} />
              <Route path="/report" element={<Reports />} />
              <Route path="/settings" element={<Preferences />} />
              <Route path="/SpecificCourse" element={<SpecificCourse />} />

            </Routes>
          </div>
        </div>  
      </div>
    </Router>
  );
}

export default App;