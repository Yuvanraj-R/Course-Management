import React, { useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PersonaSelection from './Components/PersonaSelection';
import Login from './Components/Login';
import './App.css';
import StudentDashboard from './Components/Student_Screens/StudentDashboard';
import DashboardHomePage from './Components/Admin_Screens/AdminDashBoardHome';
import MeetingsPage from './Components/Student_Screens/MeetingPage';
import AdminMeetingsPage from './Components/Admin_Screens/AdminMeeting';
import AdminDashboard from './Components/Admin_Screens/AdminDashBoardHome';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<PersonaSelection />} />
          {/* A dynamic route for login. :userType will be 'student' or 'admin' */}
          <Route path="/login/:userType" element={<Login />} />
          <Route path="/student/dashboard" element={<StudentDashboard />} />
          <Route path="/admin/dashboard" element={<DashboardHomePage />} />
        </Routes>
      </div>
    </Router>

  );
}

export default App;