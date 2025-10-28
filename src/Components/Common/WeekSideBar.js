import React from 'react';

const WeekSidebar = ({ selectedWeek, onSelectWeek }) => {
  const weeks = Array.from({ length: 8 }, (_, i) => i + 1); // Generates [1, 2, ..., 8]

  return (
    <div className="week-sidebar">
      <h3 className="sidebar-title">Assignment Weeks</h3>
      <ul className="week-list">
        {weeks.map((weekNum) => (
          <li
            key={weekNum}
            className={`week-list-item ${selectedWeek === weekNum ? 'active' : ''}`}
            onClick={() => onSelectWeek(weekNum)}
          >
            WEEK {weekNum}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WeekSidebar;
