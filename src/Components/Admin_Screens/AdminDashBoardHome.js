import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BookOpen, User, ChevronDown, Settings, LogOut, HelpCircle, LayoutDashboard, Calendar, BarChart2, Lightbulb, ArrowRight, Github } from 'lucide-react';
import { BsPlusCircle as PlusCircle } from 'react-icons/bs';
import './AdminMeetings.css';
import WeekSidebar from '../Common/WeekSideBar';


const AdminMeetingsPage = () => {
    const [meetings, setMeetings] = useState([]);
    const [selectedWeek, setSelectedWeek] = useState(1);
    const [showAddForm, setShowAddForm] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    // Form states
    const [formState, setFormState] = useState({
        title: '', description: '', meetingDate: '', meetingTime: '', meetingLink: ''
    });
    const [formError, setFormError] = useState('');

    useEffect(() => {
        const fetchMeetings = async () => {
            setIsLoading(true);
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get(`http://localhost:8080/api/meetings/${selectedWeek}`, {
                    headers: { 'Authorization': `Bearer ${token}` }
                });
                setMeetings(response.data);
            } catch (error) {
                console.error("Failed to fetch meetings", error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchMeetings();
    }, [selectedWeek]);

    const handleSelectWeek = (weekNum) => {
        setSelectedWeek(weekNum);
        setShowAddForm(false); // Hide form when switching weeks for a cleaner UI
    };

    const handleFormChange = (e) => {
        const { id, value } = e.target;
        setFormState(prevState => ({ ...prevState, [id]: value }));
    };

    const handleAddMeetingSubmit = async (e) => {
        e.preventDefault();
        setFormError('');
        if (Object.values(formState).some(field => !field)) {
            setFormError('All fields are mandatory.');
            return;
        }
        try {
            const token = localStorage.getItem('token');
            const newMeetingPayload = { ...formState, weekNumber: selectedWeek };
            const response = await axios.post('http://localhost:8080/api/admin/meetings', newMeetingPayload, {
                headers: { 'Authorization': `Bearer ${token}` }
            });
            setMeetings(prevMeetings => [...prevMeetings, response.data]);
            setShowAddForm(false);
            setFormState({ title: '', description: '', meetingDate: '', meetingTime: '', meetingLink: '' });
        } catch (error) {
            setFormError('Failed to add meeting. Please try again.');
            console.error(error);
        }
    };

    return (
        <main className="admin-meetings-main-content">
            <WeekSidebar selectedWeek={selectedWeek} onSelectWeek={handleSelectWeek} />
            <div className="admin-meetings-display-area">
                <h2>Manage Meetings for Week {selectedWeek}</h2>
                <button className="add-meeting-button" onClick={() => setShowAddForm(prev => !prev)}>
                    <PlusCircle size={20} /> {showAddForm ? 'Hide Form' : 'Add New Meeting'}
                </button>
                {showAddForm && (
                    <div className="add-meeting-form-container">
                        <h3>Add New Meeting for Week {selectedWeek}</h3>
                        <form onSubmit={handleAddMeetingSubmit} className="add-meeting-form">
                            <input id="title" value={formState.title} onChange={handleFormChange} placeholder="Title" />
                            <textarea id="description" value={formState.description} onChange={handleFormChange} placeholder="Description" rows="3"></textarea>
                            <input id="meetingDate" type="date" value={formState.meetingDate} onChange={handleFormChange} />
                            <input id="meetingTime" value={formState.meetingTime} onChange={handleFormChange} placeholder="e.g., 10:00 AM IST" />
                            <input id="meetingLink" type="url" value={formState.meetingLink} onChange={handleFormChange} placeholder="https://meet.google.com/..." />
                            {formError && <p className="form-error">{formError}</p>}
                            <button type="submit" className="submit-button">Add Meeting</button>
                        </form>
                    </div>
                )}
                <h3>Scheduled Meetings</h3>
                <div className="meetings-list">
                    {isLoading ? <p>Loading meetings...</p> : (
                        meetings.length > 0 ? meetings.map(meeting => (
                            <div key={meeting.id} className="meeting-card">
                                <h4>{meeting.title}</h4>
                                <p>{meeting.description}</p>
                                <span><strong>Date:</strong> {meeting.meetingDate}</span>
                                <span><strong>Time:</strong> {meeting.meetingTime}</span>
                                <a href={meeting.meetingLink} target="_blank" rel="noopener noreferrer">Join Meeting</a>
                            </div>
                        )) : <p>No meetings scheduled for this week.</p>
                    )}
                </div>
            </div>
        </main>
    );
};

// Updated component to display student repos in a table
const GitHubReposPage = () => {
    const [students, setStudents] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchStudentRepos = async () => {
            try {
                const token = localStorage.getItem('token');
                if (!token) throw new Error("No token found.");

                const response = await axios.get('http://localhost:8080/api/admin/students', {
                    headers: { 'Authorization': `Bearer ${token}` }
                });
                setStudents(response.data);
            } catch (err) {
                setError("Failed to fetch student data.");
                console.error(err);
            } finally {
                setIsLoading(false);
            }
        };
        fetchStudentRepos();
    }, []);

    if (isLoading) return <h2>Loading Student Repositories...</h2>;
    if (error) return <h2>{error}</h2>;

    return (
        <div className="main-content">
            <h2>Student GitHub Repositories</h2>
            <p>Review the GitHub repositories submitted by students.</p>
            
            {/* Table Layout */}
            <div className="table-container">
                <table className="student-repo-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Superset ID</th>
                            <th>GitHub Repository</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.length > 0 ? (
                            students.map(student => (
                                <tr key={student.id}>
                                    <td>{student.name}</td>
                                    <td>{student.supersetId || 'N/A'}</td>
                                    <td>
                                        {student.githubRepo ? (
                                            <a href={student.githubRepo} target="_blank" rel="noopener noreferrer" className="github-link">
                                                <Github size={16} /> View Repository
                                            </a>
                                        ) : (
                                            'Not Submitted'
                                        )}
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="3" style={{ textAlign: 'center' }}>No students found.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};


const AdminDashboardHome = ({ userName, onNavigate }) => (
    <>
        <section className="welcome-section">
            <h1 className="welcome-title">Hello, {userName || '[Admin]'}!</h1>
            <p className="welcome-text">Manage the platform from here.</p>
        </section>
        <section className="action-cards-section">
            <div className="action-card primary-card" onClick={() => onNavigate('github')}>
                <h2 className="card-title">Review Repositories <ArrowRight size={30} className="card-arrow" /></h2>
                <p className="card-description">View student GitHub submissions.</p>
            </div>
            <div className="action-card secondary-card" onClick={() => onNavigate('quizzes')}>
                <h2 className="card-title">Create Quiz <Lightbulb size={30} className="card-arrow" /></h2>
                <p className="card-description">Set up new weekly quizzes.</p>
            </div>
        </section>
    </>
);

// The main AdminDashboard component
const AdminDashboard = () => {
    const [currentView, setCurrentView] = useState('dashboard');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [userData, setUserData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchAdminData = async () => {
            try {
                const token = localStorage.getItem('token');
                if (!token) throw new Error("No token found.");
                const response = await axios.get('http://localhost:8080/api/user/me', {
                    headers: { 'Authorization': `Bearer ${token}` }
                });
                setUserData(response.data);
            } catch (err) {
                setError("Failed to load admin data.");
            } finally {
                setIsLoading(false);
            }
        };
        fetchAdminData();
    }, []);

    const handleNavigate = (view) => setCurrentView(view);
    const toggleDropdown = () => setIsDropdownOpen(prev => !prev);
    const handleLogout = () => {
        localStorage.clear();
        window.location.href = '/';
    };

    const renderMainContent = () => {
        if (isLoading) return <div className="main-content"><h2>Loading...</h2></div>;
        if (error) return <div className="main-content"><h2>{error}</h2></div>;

        switch (currentView) {
            case 'dashboard':
                return <AdminDashboardHome userName={userData?.name} onNavigate={handleNavigate} />;
            case 'github':
                return <GitHubReposPage />;
            case 'meetings': // New case for meetings
                return <AdminMeetingsPage />;
            case 'quizzes':
                return <div className="main-content"><h2>Create Quizzes (Coming Soon!)</h2></div>;
            default:
                return <div className="main-content"><h2>Page Not Found</h2></div>;
        }
    };

    const navItems = [
        { name: 'Dashboard', view: 'dashboard' },
        { name: 'GitHub', view: 'github' },
        { name: 'Meetings', view: 'meetings' }, // Added meetings nav item
        { name: 'Quizzes', view: 'quizzes' },
    ];

    return (
        <div className="App">
            <header className="header">
                <div className="header-logo-title">
                    <BookOpen size={40} className="logo-icon" />
                    <h1 className="app-title">Admin Panel</h1>
                </div>
                <nav className="header-nav">
                    {navItems.map((item) => (
                        <button
                            key={item.name}
                            className={`nav-button ${currentView === item.view ? 'active-nav-item' : ''}`}
                            onClick={() => handleNavigate(item.view)}
                        >
                            {item.name}
                        </button>
                    ))}
                    <div className="profile-dropdown-container">
                        <button className="nav-button profile-button" onClick={toggleDropdown}>
                            <User size={20} /> Profile <ChevronDown size={16} className={`dropdown-arrow ${isDropdownOpen ? 'rotated' : ''}`} />
                        </button>
                        {isDropdownOpen && (
                            <div className="dropdown-menu">
                                <button className="dropdown-item"><User size={16} /> My Profile</button>
                                <button className="dropdown-item logout-item" onClick={handleLogout}>
                                    <LogOut size={16} /> Logout
                                </button>
                            </div>
                        )}
                    </div>
                </nav>
            </header>
            <div className="dashboard-container">
                {renderMainContent()}
            </div>
        </div>
    );
};


export default AdminDashboard;
