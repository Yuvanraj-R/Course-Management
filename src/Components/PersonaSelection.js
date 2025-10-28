import React from 'react';
import { Link } from 'react-router-dom';
import './PersonaSelection.css'; // We will create this file for styling

function PersonaSelection() {
    return (
        <div className="persona-container">
            <h1 className="persona-title">Choose Your Role</h1>
            <div className="persona-cards">
                <Link to="/login/student" className="persona-card">
                    <h2>I am a Student</h2>
                    <p>Access your syllabus, assignments, and grades.</p>
                </Link>
                <Link to="/login/admin" className="persona-card">
                    <h2>I am an Admin</h2>
                    <p>Manage courses, students, and content.</p>
                </Link>
            </div>
        </div>
    );
}

export default PersonaSelection;