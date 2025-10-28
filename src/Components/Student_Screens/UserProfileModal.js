import React from 'react';
import { X } from 'lucide-react';
import './UserProfileModal.css'; // We'll create this for styling

const UserProfileModal = ({ isOpen, onClose, userData }) => {
  if (!isOpen || !userData) {
    return null; // Don't render if not open or if there's no data
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content profile-modal">
        <button className="modal-close-button" onClick={onClose}>
          <X size={24} />
        </button>
        <h2 className="profile-title">My Profile</h2>
        <div className="profile-details">
          <div className="profile-item">
            <span className="profile-label">Name</span>
            <span className="profile-value">{userData.name || 'N/A'}</span>
          </div>
          <div className="profile-item">
            <span className="profile-label">Email</span>
            <span className="profile-value">{userData.email || 'N/A'}</span>
          </div>
          <div className="profile-item">
            <span className="profile-label">Superset ID</span>
            <span className="profile-value">{userData.supersetId || 'Not set'}</span>
          </div>
          <div className="profile-item">
            <span className="profile-label">GitHub Repository</span>
            <span className="profile-value">{userData.githubRepo || 'Not set'}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfileModal;