import React, { useState } from 'react';
import { assignmentsData } from '../../data/assignmentsData';
import WeekSidebar from '../Common/WeekSideBar';
import WeeklyAssignmentsDisplay from '../Common/WeeklyAssignmentsDisplay';
import AssignmentModal from '../Common/AssignmentModal';


// This component is purely for the assignments section content, no longer includes the global header.
const AssignmentsPage = () => { // Removed onLogout prop from here
  const [selectedWeek, setSelectedWeek] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(null);

  const handleSelectWeek = (weekNum) => {
    setSelectedWeek(weekNum);
  };

  const handleQuestionClick = (question) => {
    setCurrentQuestion(question);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setCurrentQuestion(null);
  };

  const weekAssignments = assignmentsData.find(week => week.week === selectedWeek);

  return (
    <> {/* React Fragment as this component is now part of a larger layout */}
      <main className="assignments-main-content"> {/* Specific class for assignments layout */}
        <WeekSidebar selectedWeek={selectedWeek} onSelectWeek={handleSelectWeek} />
        <WeeklyAssignmentsDisplay
          weekData={weekAssignments}
          onQuestionClick={handleQuestionClick}
        />
      </main>

      {/* Assignment Question Modal */}
      <AssignmentModal question={currentQuestion} onClose={handleCloseModal} />
    </>
  );
};

export default AssignmentsPage;
