import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const TopicAccordion = ({ topic }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="accordion">
      <button className="accordion-button" onClick={() => setIsOpen(!isOpen)}>
        <span>{topic.title}</span>
        <ChevronDown 
          size={20} 
          className={`accordion-icon ${isOpen ? 'open' : ''}`} 
        />
      </button>

      {isOpen && (
        <div className="accordion-body">
          <div>
            <h3>Overview</h3>
            <p>{topic.overview}</p>
          </div>
          <div>
            <h3>Key Learning Points</h3>
            <ul className="key-points">
              {topic.keyPoints.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
          <div className="self-learning">
            <h3>Self Learning Task</h3>
            <p>{topic.selfLearning}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default TopicAccordion;
