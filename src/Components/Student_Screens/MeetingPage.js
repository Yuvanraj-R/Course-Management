import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import axios for API calls
import WeekSidebar from '../Common/WeekSideBar';
import WeeklyMeetingsDisplay from '../Common/WeeklyMeetingsDisplay';
// Note: The static meetingsData import is now removed

const MeetingsPage = () => {
    const [selectedWeek, setSelectedWeek] = useState(1);
    const [meetings, setMeetings] = useState([]); // State to hold meetings from the API
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');

    // This effect runs whenever the 'selectedWeek' changes
    useEffect(() => {
        const fetchMeetingsForWeek = async () => {
            setIsLoading(true);
            setError('');
            try {
                const token = localStorage.getItem('token');
                if (!token) {
                    throw new Error("Authentication token not found.");
                }

                // Call the backend endpoint to get meetings for the selected week
                const response = await axios.get(`http://localhost:8080/api/meetings/${selectedWeek}`, {
                    headers: { 'Authorization': `Bearer ${token}` }
                });

                setMeetings(response.data); // Save the fetched meetings to state
            } catch (err) {
                console.error(`Failed to fetch meetings for week ${selectedWeek}`, err);
                setError('Could not load meetings. Please try again later.');
            } finally {
                setIsLoading(false);
            }
        };

        fetchMeetingsForWeek();
    }, [selectedWeek]); // The dependency array ensures this runs when selectedWeek changes

    const handleSelectWeek = (weekNum) => {
        setSelectedWeek(weekNum);
    };

    // ERROR FIX: Map the backend data fields (e.g., meetingDate) to the
    // field names that the WeeklyMeetingsDisplay component expects (e.g., date).
    const weekDataForDisplay = {
        week: selectedWeek,
        meetings: meetings.map(meeting => ({
            ...meeting, // Keep original fields like id, title, description
            date: meeting.meetingDate, // Translate meetingDate -> date
            time: meeting.meetingTime, // Translate meetingTime -> time
            link: meeting.meetingLink  // Translate meetingLink -> link
        }))
    };

    return (
        <main className="meetings-main-content">
            <WeekSidebar selectedWeek={selectedWeek} onSelectWeek={handleSelectWeek} />
            
            {/* Conditionally render based on loading or error state */}
            {isLoading ? (
                <div className="loading-message">Loading meetings...</div>
            ) : error ? (
                <div className="error-message">{error}</div>
            ) : (
                <WeeklyMeetingsDisplay weekData={weekDataForDisplay} />
            )}
        </main>
    );
};

export default MeetingsPage;
