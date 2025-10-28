import React from 'react';
import { XCircle } from 'lucide-react'; // For the cross button

const AssignmentModal = ({ question, onClose }) => {
  if (!question) return null; // Don't render if no question is provided

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}> {/* Prevent clicks inside from closing */}
        <button className="modal-close-button" onClick={onClose}>
          <XCircle size={24} />
        </button>
        <h3 className="modal-question-title">{question.intro}</h3>
        {/* Changed p to div and added white-space: pre-wrap */}
        <div
          className="modal-question-full"
          style={{ whiteSpace: 'pre-wrap', }}
        >
          {question.fullQuestion}
        </div>
      </div>
    </div>
  );
};

export default AssignmentModal;
