import React, { useState } from 'react';
import WeekSidebar from '../Common/WeekSideBar';
import WeeklySyllabusDisplay from '../Common/WeeklySyllabusDisplay';
import syllabusData from '../../data/syllabusData';


const SyllabusPage = () => {
  const [selectedWeek, setSelectedWeek] = useState(1);

  const handleSelectWeek = (weekNum) => {
    setSelectedWeek(weekNum);
  };

  const weekSyllabus = syllabusData.find(week => week.week === selectedWeek);

  return (
    <>
      <main className="assignments-main-content"> {/* Using same main class for consistent layout */}
        <WeekSidebar 
          selectedWeek={selectedWeek} 
          onSelectWeek={handleSelectWeek} 
        />
        <WeeklySyllabusDisplay weekData={weekSyllabus} />
      </main>
    </>
  );
};

export default SyllabusPage;
