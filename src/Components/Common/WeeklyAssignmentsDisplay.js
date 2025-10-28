import React from 'react';
import { ArrowRight } from 'lucide-react'; // For the arrow icon

const WeeklyAssignmentsDisplay = ({ weekData, onQuestionClick }) => {
  if (!weekData) {
    return <div className="weekly-display-container">Select a week to view assignments.</div>;
  }

  return (
    <div className="weekly-display-container">
      {/* Mandatory Note */}
      <div className="mandatory-note">
        <p><strong style={{color:"red"}}> IMPORTANT:</strong> {weekData.mandatoryNote}</p>
      </div>

      {/* Modules and Assignments */}
      {weekData.modules.map((module, moduleIndex) => (
        <div key={moduleIndex} className="module-section">
          <h3 className="module-topic-title">{module.topic}</h3>
          <div className="assignments-grid">
            {/* Mandatory Assignments Partition */}
            <div className="assignments-partition mandatory-partition">
              <h4 className="partition-title">Mandatory Assignments</h4>
              <ul className="assignment-list">
                {module.mandatoryAssignments.length > 0 ? (
                  module.mandatoryAssignments.map((assignment) => (
                    <li key={assignment.id} className="assignment-item" onClick={() => onQuestionClick(assignment)}>
                      <p className="assignment-intro">{assignment.intro}</p>
                      <ArrowRight size={20} className="assignment-arrow-icon" />
                    </li>
                  ))
                ) : (
                  <p className="no-assignments-message">No mandatory assignments for this module.</p>
                )}
              </ul>
            </div>

            {/* Additional Assignments Partition */}
            <div className="assignments-partition additional-partition">
              <h4 className="partition-title">Additional Assignments</h4>
              <ul className="assignment-list">
                {module.additionalAssignments.length > 0 ? (
                  module.additionalAssignments.map((assignment) => (
                    <li key={assignment.id} className="assignment-item" onClick={() => onQuestionClick(assignment)}>
                      <p className="assignment-intro">{assignment.intro}</p>
                      <ArrowRight size={20} className="assignment-arrow-icon" />
                    </li>
                  ))
                ) : (
                  <p className="no-assignments-message">No additional assignments for this module.</p>
                )}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WeeklyAssignmentsDisplay;
