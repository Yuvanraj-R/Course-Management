import React from 'react';
import TopicAccordion from './TopicAccordion';


const WeeklySyllabusDisplay = ({ weekData }) => {
  if (!weekData) {
    return (
      <div className="weekly-display-container">
        <p className="no-assignments-message">Please select a week to view the syllabus.</p>
      </div>
    );
  }

  return (
    <div className="weekly-display-container">
      <div className="week-header">
        <h2 className="module-topic-title">{`Week ${weekData.week}: ${weekData.title}`}</h2>
        <p className="week-objective">{weekData.objective}</p>
      </div>
      <div className="topics-container">
        {weekData.topics.map((topic) => (
          <TopicAccordion key={topic.id} topic={topic} />
        ))}
      </div>
    </div>
  );
};

export default WeeklySyllabusDisplay;
