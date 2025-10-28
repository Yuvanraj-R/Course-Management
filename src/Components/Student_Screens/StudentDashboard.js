import React, { useState, useEffect } from 'react';
import axios from 'axios'; // ERROR FIX: Added missing import for axios

// Component Imports
import Header from '../Common/Header';
import DashboardHomePage from '../Student_Screens/DashboardHome';
import AssignmentsPage from '../Student_Screens/AssignmentsPage';
import MeetingsPage from '../Student_Screens/MeetingPage';
import SyllabusPage from '../Student_Screens/SyllabusPage';
import GitHubLinkForm from './GitHubLinkForm';
import UserProfileModal from './UserProfileModal'; 

// CSS Imports
import '../../Styles/Dashboard.css';
import '../../Styles/Assignments.css';
import '../../Styles/Meeting.css';
import '../../Styles/Syllabus.css';
import '../../Styles/GitHubRepos.css';
import StudentHeader from './StudentHeader';

const StudentDashboard = () => {
    // State for navigation and UI control
    const [currentView, setCurrentView] = useState('dashboard');
    const [isModalOpen, setIsModalOpen] = useState(false);

    // State for data, loading, and errors
    const [userData, setUserData] = useState(null); // ERROR FIX: Added state for user data
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');

    const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
    const handleProfileClick = () => {
      setIsProfileModalOpen(true);
    };

    // This effect runs once on component mount to fetch user data
    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const token = localStorage.getItem('token');
                if (!token) {
                    setError("Authentication error. Please log in again.");
                    setIsLoading(false);
                    return;
                }

                const response = await axios.get('http://localhost:8080/api/user/me', {
                    headers: { 'Authorization': `Bearer ${token}` }
                });

                setUserData(response.data);

                // Show the modal only if the githubRepo link is null or empty
                if (!response.data.githubRepo) {
                    setIsModalOpen(true);
                }
            } catch (err) {
                console.error("Failed to fetch user data", err);
                setError("Could not load your data. Please try refreshing the page.");
            } finally {
                setIsLoading(false);
            }
        };

        fetchUserData();
    }, []); // Empty array ensures this runs only once

    // Handler for submitting the GitHub link from the modal
    const handleGithubSubmit = async (githubLink) => {
        try {
            const token = localStorage.getItem('token');
            await axios.put('http://localhost:8080/api/user/github',
                { githubLink },
                { headers: { 'Authorization': `Bearer ${token}` } }
            );

            // Update state to reflect the change and close the modal
            setUserData(prevData => ({ ...prevData, githubRepo: githubLink }));
            setIsModalOpen(false);
        } catch (err) {
            console.error("Failed to update GitHub link", err);
            // Optionally, set an error state to show in the modal
        }
    };

    const handleLogout = () => {
        // Implement proper logout logic here (clear localStorage, redirect)
        localStorage.clear();
        window.location.href = '/'; // Redirect to home/login
    };

    const handleNavigate = (view) => {
        setCurrentView(view);
    };

    // Renders the main content based on the current view
    const renderMainContent = () => {
        if (isLoading) {
            return <div className="main-content"><h2>Loading...</h2></div>;
        }
        if (error) {
            return <div className="main-content"><h2>{error}</h2></div>;
        }

        switch (currentView) {
            case 'dashboard':
                return (
                    <DashboardHomePage
                        userName={userData?.name || 'Student'}
                        userRole={userData?.role || 'student'}
                        onNavigate={handleNavigate}
                    />
                );
            case 'assignments':
                return <AssignmentsPage />;
            case 'meetings':
                return <MeetingsPage />;
            case 'syllabus':
                return <SyllabusPage />;
            case 'quizzes':
                return <div className="main-content"><h2>Quizzes (Coming Soon!)</h2></div>;
            case 'leaderboard':
                return <div className="main-content"><h2>Leaderboard (Coming Soon!)</h2></div>;
            default:
                return <div className="main-content"><h2>Page Not Found</h2></div>;
        }
    };

    return (
        <div className="App">
            {/* ERROR FIX: The modal must be rendered here to be displayed */}
            <GitHubLinkForm
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onSubmit={handleGithubSubmit}
            />
            <UserProfileModal 
              isOpen={isProfileModalOpen}
              onClose={() => setIsProfileModalOpen(false)}
              userData={userData} 
            />

            <StudentHeader onNavigate={handleNavigate} onLogout={handleLogout} currentView={currentView} onProfileClick={handleProfileClick} />

            <div className="dashboard-container">
                {renderMainContent()}
            </div>
        </div>
    );
};

export default StudentDashboard;