import React, { useState } from 'react';
import { Github, Link, XCircle } from 'lucide-react';

const GitHubLinkForm = ({ isOpen, onClose, onSubmit }) => {
  const [githubLink, setGithubLink] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = () => {
    // Simple validation for a GitHub URL
    if (!githubLink.startsWith('https://github.com/')) {
      setError('Please enter a valid GitHub repository link (e.g., https://github.com/username/repo).');
      return;
    }
    setError('');
    onSubmit(githubLink);
  };

  if (!isOpen) {
    return null; // Don't render the modal if it's not open
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content github-modal">
        {/* We don't want a close button to force the user to submit */}
        {/* <button className="modal-close-button" onClick={onClose}><XCircle size={24} /></button> */}
        
        <div className="github-modal-header">
          <Github size={40} className="github-icon" />
          <h3 className="modal-question-title">Submit Your GitHub Repository</h3>
        </div>
        
        <p className="github-modal-text">
          Please provide the link to your GitHub repository. This is required for assignment submissions.
        </p>

        <div className="input-group">
          <Link size={20} className="input-icon" />
          <input
            type="text"
            className="form-input"
            placeholder="https://github.com/username/repository"
            value={githubLink}
            onChange={(e) => setGithubLink(e.target.value)}
          />
        </div>

        {error && <p className="error-message">{error}</p>}

        <button className="submit-button" onClick={handleSubmit}>
          Save and Continue
        </button>
      </div>
    </div>
  );
};

export default GitHubLinkForm;
