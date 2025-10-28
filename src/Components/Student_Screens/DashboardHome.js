import React, { useState } from 'react';
import { BookOpen, ArrowRight } from 'lucide-react';

// This component is now purely for the dashboard home content, no longer includes the global header.
const DashboardHomePage = ({ userName, onNavigate, userRole, onLogout }) => { // onLogout is now largely unused here as Header handles it
  // Removed isDropdownOpen state and toggleDropdown function as dropdown is now in Header component.

  // Static navigation items are no longer relevant here for rendering the header's nav.
  // This component will only focus on its main content.

  return (
    // The main container class dashboard-container is now applied at the App.jsx level
    // to wrap *all* content below the fixed header.
    // So, we just return the main content of this page.
    <> {/* React Fragment to return multiple elements without an extra div */}
      {/* Welcome Section */}
      <section className="welcome-section">
        <h1 className="welcome-title">Hello, {userName || '[Name]'}!</h1>
        <p className="welcome-text">Welcome back. What would you like to do today?</p>
      </section>

      {/* Action Cards Section */}
      <section className="action-cards-section">
        {/* Check Assignments Card */}
        <div
          className="action-card primary-card"
          onClick={() => onNavigate('assignments')} // Still uses onNavigate for internal page routing
        >
          <h2 className="card-title">Check Assignments <ArrowRight size={30} className="card-arrow" /></h2>
          <p className="card-description">Submit work and view deadlines.</p>
        </div>

        {/* View Syllabus Card */}
        <div
          className="action-card secondary-card"
          onClick={() => onNavigate('syllabus')} // Still uses onNavigate for internal page routing
        >
          <h2 className="card-title">View Syllabus <BookOpen size={30} className="card-arrow" /></h2>
          <p className="card-description">Explore weekly topics.</p>
        </div>
      </section>
    </>
  );
};

export default DashboardHomePage;
