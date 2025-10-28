import React from 'react';
import MeetingCard from './MeetingCard';

const WeeklyMeetingsDisplay = ({ weekData }) => {
  if (!weekData || weekData.meetings.length === 0) {
    return (
      <div className="weekly-meetings-display-container">
        <p className="no-meetings-message">No meetings scheduled for this week.</p>
      </div>
    );
  }

  return (
    <div className="weekly-meetings-display-container">
      <h3 className="meetings-section-title">Meetings for Week {weekData.week}</h3>
      <div className="meetings-list-grid">
        {weekData.meetings.map((meeting) => (
          <MeetingCard key={meeting.id} meeting={meeting} />
        ))}
      </div>
    </div>
  );
};

export default WeeklyMeetingsDisplay;
