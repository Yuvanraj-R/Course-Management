import React, { useState } from 'react';
import WeekSidebar from '../Common/WeekSideBar';
import WeeklyMeetingsDisplay from '../Common/WeeklyMeetingsDisplay';
import { meetingsData, addMeeting } from '../../data/meetingData';
import { PlusCircle } from 'lucide-react';
import './AdminMeetings.css';

// This component is for the administrator's view of meetings, including the add form.
const AdminMeetingsPage = () => {
  const [selectedWeek, setSelectedWeek] = useState(1);
  const [showAddForm, setShowAddForm] = useState(false); // State to toggle form visibility

  // Form states
  const [meetingTitle, setMeetingTitle] = useState('');
  const [meetingDescription, setMeetingDescription] = useState('');
  const [meetingDate, setMeetingDate] = useState('');
  const [meetingTime, setMeetingTime] = useState('');
  const [meetingLink, setMeetingLink] = useState('');
  const [formError, setFormError] = useState('');

  const handleSelectWeek = (weekNum) => {
    setSelectedWeek(weekNum);
    setShowAddForm(false); // Hide form when switching weeks
  };

  const handleAddMeetingSubmit = (e) => {
    e.preventDefault();
    setFormError(''); // Clear previous errors

    // Basic validation
    if (!meetingTitle || !meetingDescription || !meetingDate || !meetingTime || !meetingLink) {
      setFormError('All fields are mandatory.');
      return;
    }

    const newMeeting = {
      week: selectedWeek,
      title: meetingTitle,
      description: meetingDescription,
      date: meetingDate,
      time: meetingTime,
      link: meetingLink,
    };

    const success = addMeeting(newMeeting); // Simulate adding the meeting
    if (success) {
      alert('Meeting added successfully!'); // Replace with custom modal later
      // Clear form fields
      setMeetingTitle('');
      setMeetingDescription('');
      setMeetingDate('');
      setMeetingTime('');
      setMeetingLink('');
      setShowAddForm(false); // Hide form after successful submission
      // Force a re-render of the meetings data by updating state (e.g., selectedWeek)
      setSelectedWeek(0); // Temporarily set to 0
      setTimeout(() => setSelectedWeek(newMeeting.week), 0); // Then back to current week
    } else {
      setFormError('Failed to add meeting. Please try again.');
    }
  };

  const weekMeetings = meetingsData.find(week => week.week === selectedWeek);

  return (
    <>
      <main className="admin-meetings-main-content">
        <WeekSidebar selectedWeek={selectedWeek} onSelectWeek={handleSelectWeek} />

        <div className="admin-meetings-display-area">
          <div className="admin-controls-header">
            {/* REMOVED: <h2 className="meetings-section-title">Meetings for Week {selectedWeek}</h2> */}
            <button className="add-meeting-button" onClick={() => setShowAddForm(prevState => !prevState)}>
              <PlusCircle size={20} /> {showAddForm ? 'Hide Form' : 'Add New Meeting'}
            </button>
          </div>

          {showAddForm && (
            <div className="add-meeting-form-container">
              <h3 className="form-title">Add New Meeting for Week {selectedWeek}</h3>
              <form onSubmit={handleAddMeetingSubmit} className="add-meeting-form">
                <div className="form-group">
                  <label htmlFor="meetingTitle">Title:</label>
                  <input
                    type="text"
                    id="meetingTitle"
                    value={meetingTitle}
                    onChange={(e) => setMeetingTitle(e.target.value)}
                    placeholder="e.g., Masterclass: Week 5 - Spring Boot"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="meetingDescription">Description:</label>
                  <textarea
                    id="meetingDescription"
                    value={meetingDescription}
                    onChange={(e) => setMeetingDescription(e.target.value)}
                    placeholder="Brief description of the meeting content."
                    rows="3"
                  ></textarea>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="meetingDate">Date:</label>
                    <input
                      type="date"
                      id="meetingDate"
                      value={meetingDate}
                      onChange={(e) => setMeetingDate(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="meetingTime">Time:</label>
                    <input
                      type="text"
                      id="meetingTime"
                      value={meetingTime}
                      onChange={(e) => setMeetingTime(e.target.value)}
                      placeholder="e.g., 10:00 AM - 11:00 AM IST"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="meetingLink">Meeting Link:</label>
                  <input
                    type="url"
                    id="meetingLink"
                    value={meetingLink}
                    onChange={(e) => setMeetingLink(e.target.value)}
                    placeholder="https://meet.google.com/xyz-abc-def"
                  />
                </div>
                {formError && <p className="form-error">{formError}</p>}
                <button type="submit" className="submit-button">
                  Add Meeting
                </button>
              </form>
            </div>
          )}

          <WeeklyMeetingsDisplay weekData={weekMeetings} />
        </div>
      </main>
    </>
  );
};

export default AdminMeetingsPage;
