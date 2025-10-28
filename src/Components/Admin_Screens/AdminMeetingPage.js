import React, { useState } from 'react';
import WeekSidebar from '../Common/WeekSideBar';
import WeeklyMeetingsDisplay from '../Common/WeeklyMeetingsDisplay';
import { meetingsData } from '../../data/meetingData';


const MeetingsPage = () => {
  const [selectedWeek, setSelectedWeek] = useState(1); // Default to Week 1

  const handleSelectWeek = (weekNum) => {
    setSelectedWeek(weekNum);
  };

  // Find the data for the currently selected week
  const weekMeetings = meetingsData.find(week => week.week === selectedWeek);

  return (
    <> {/* React Fragment as this component is part of a larger layout */}
      <main className="meetings-main-content"> {/* Specific class for meetings layout */}
        <WeekSidebar selectedWeek={selectedWeek} onSelectWeek={handleSelectWeek} />
        <WeeklyMeetingsDisplay weekData={weekMeetings} />
      </main>
    </>
  );
};

export default MeetingsPage;
