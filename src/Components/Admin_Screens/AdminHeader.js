import React, { useState } from 'react';
import { BookOpen, User, ChevronDown, Settings, LogOut, HelpCircle, LayoutDashboard, Calendar, BarChart2, Lightbulb } from 'lucide-react'; // Added Calendar, BarChart2, Lightbulb for quizzes/meetings/leaderboard

// This Header component will be used across all major sections of your app.
const AdminHeader = ({ onNavigate, onLogout, currentView }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(prevState => !prevState);
  };

  // Define navigation items with their respective views and icons
  const navItems = [
    { name: 'Dashboard', view: 'dashboard', icon: <LayoutDashboard size={20} /> },
    { name: 'Syllabus', view: 'syllabus', icon: <BookOpen size={20} /> }, // Added Syllabus
    { name: 'Assignments', view: 'assignments', icon: <BookOpen size={20} /> },
    { name: 'Quizzes', view: 'quizzes', icon: <Lightbulb size={20} /> }, // Added Quizzes
    { name: 'Meetings', view: 'meetings', icon: <Calendar size={20} /> }, // Added Meetings
    { name: 'GitHub', view: 'GitHub', icon: <BarChart2 size={20} /> }, // Added Leaderboard
  ];

  return (
    <header className="header">
      {/* Logo and App Title */}
      <div className="header-logo-title">
        <BookOpen size={40} className="logo-icon" />
        <h1 className="app-title">TaskFlow</h1>
      </div>

      {/* Navigation Links */}
      <nav className="header-nav">
        {navItems.map((item) => (
          <button
            key={item.name}
            className={`nav-button ${currentView === item.view ? 'active-nav-item' : ''}`}
            onClick={() => onNavigate(item.view)}
          >
            {item.name}
          </button>
        ))}
        {/* Profile Dropdown Container */}
        <div className="profile-dropdown-container">
          <button className="nav-button profile-button" onClick={toggleDropdown}>
            <User size={20} className="profile-icon" />
            Profile
            <ChevronDown size={16} className={`dropdown-arrow ${isDropdownOpen ? 'rotated' : ''}`} />
          </button>
          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div className="dropdown-menu">
              <button className="dropdown-item">
                <User size={16} /> My Profile
              </button>
              <button className="dropdown-item">
                <Settings size={16} /> Settings
              </button>
              <button className="dropdown-item">
                <HelpCircle size={16} /> Help
              </button>
              <button className="dropdown-item logout-item" onClick={onLogout}>
                <LogOut size={16} /> Logout
              </button>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default AdminHeader;
