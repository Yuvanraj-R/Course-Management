import React from 'react';
import { Calendar, Clock, Link as LinkIcon } from 'lucide-react'; // Import icons

const MeetingCard = ({ meeting }) => {
  const handleJoinClick = (e) => {
    e.stopPropagation(); // Prevent parent clicks if card itself were clickable
    if (meeting.link && meeting.link !== '#') {
      window.open(meeting.link, '_blank', 'noopener,noreferrer');
    } else {
      alert(`Joining meeting: "${meeting.title}" (Link not available for demo)`); // Replace with custom modal later
    }
  };

  return (
    <div className="meeting-card">
      <h4 className="meeting-title">{meeting.title}</h4>
      <p className="meeting-description">{meeting.description}</p>
      <div className="meeting-details">
        <span className="detail-item">
          <Calendar size={16} className="detail-icon" /> {meeting.date}
        </span>
        <span className="detail-item">
          <Clock size={16} className="detail-icon" /> {meeting.time}
        </span>
      </div>
      <button className="join-button" onClick={handleJoinClick}>
        <LinkIcon size={18} /> Join Meeting
      </button>
    </div>
  );
};

export default MeetingCard;
